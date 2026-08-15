// ─────────────────────────────────────────────
// WordPress integration — DISABLED
//
// No WordPress backend exists for Global Chemicals yet. These
// functions keep the same signatures other pages already import,
// but return empty results instead of attempting a network call.
// Once a WordPress + WPGraphQL instance exists, set WORDPRESS_API_URL
// and restore the real implementation.
// ─────────────────────────────────────────────

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

export async function getAllPosts(): Promise<WPPost[]> {
  return [];
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  return null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  return [];
}