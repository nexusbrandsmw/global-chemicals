function getApiUrl(): string {
  const url = process.env.WORDPRESS_API_URL;
  if (!url) throw new Error("WORDPRESS_API_URL is not set");
  return url;
}

function getWpOrigin(): string {
  return new URL(getApiUrl()).origin;
}

async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(getApiUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

export interface WPPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author?: string;
  content: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, "").trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function extractFirstImage(content: string): string {
  const match = content.match(/src="([^"]+)"/);
  return match ? match[1] : "/blog-placeholder.jpg";
}

// Fixes relative URLs and strips pasted inline colors that can make text invisible.
function cleanContentHtml(html: string): string {
  const origin = getWpOrigin();

  return html
    .replace(/(src|href)="\/(?!\/)/g, `$1="${origin}/`)
    .replace(/style="([^"]*)"/gi, (_match, styles: string) => {
      const cleaned = styles
        .split(";")
        .filter((rule) => {
          const prop = rule.split(":")[0]?.trim().toLowerCase();
          return (
            prop !== "color" &&
            prop !== "background" &&
            prop !== "background-color"
          );
        })
        .join(";")
        .trim();

      return cleaned ? `style="${cleaned}"` : "";
    });
}

function cleanText(text: string) {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "—")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, " ")
    .trim();
}

function mapPost(post: any): WPPost {
  const content = cleanContentHtml(post.content ?? "");

  return {
    slug: post.slug,
    title: cleanText(post.title),
    excerpt: cleanText(post.excerpt ?? ""),
    date: formatDate(post.date),
    readTime: estimateReadTime(content),
    author: post.author?.node?.name,
    category: post.categories?.nodes?.[0]?.name ?? "General",
    image: post.featuredImage?.node?.sourceUrl ?? extractFirstImage(content),
    content,
  };
}

export async function getAllPosts(): Promise<WPPost[]> {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { status: PUBLISH }) {
        nodes {
          slug
          title
          excerpt
          date
          content
          author { node { name } }
          categories { nodes { name } }
          featuredImage { node { sourceUrl } }
        }
      }
    }
  `);

  return data.posts.nodes.map(mapPost);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!) {
      postBy(slug: $slug) {
        slug
        title
        excerpt
        date
        content
        author { node { name } }
        categories { nodes { name } }
        featuredImage { node { sourceUrl } }
      }
    }
    `,
    { slug }
  );

  return data.postBy ? mapPost(data.postBy) : null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const data = await fetchAPI(`
    query AllSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes { slug }
      }
    }
  `);

  return data.posts.nodes.map((post: any) => post.slug);
}