import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa";
import { getAllPosts } from "@/lib/wordpress";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Safety guidance, product spotlights and company news from Global Chemicals — agricultural inputs, pest control and veterinary supply across Malawi.",
};

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  let allPosts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    allPosts = await getAllPosts();
  } catch (e) {
    allPosts = [];
  }

  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const blogPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Latest News
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-primary">
                Stories &amp; Updates
              </h1>

              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                Safety guidance, product spotlights, and company news from
                Global Chemicals.
              </p>
            </div>

            {/* Blog Grid or Empty State */}
            {blogPosts.length === 0 ? (
              <div className="mt-16 flex flex-col items-center text-center max-w-md mx-auto py-16">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaNewspaper size={24} className="text-primary" />
                </div>
                <h2 className="mt-6 font-display font-semibold text-xl text-primary">
                  Stories are on the way
                </h2>
                <p className="mt-3 text-foreground/60 leading-relaxed">
                  We&apos;re working on articles about safety practice, product
                  guides, and news from our branches. Check back soon.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Get in Touch Instead
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ) : (
              <>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block overflow-hidden rounded-3xl border border-primary/10 bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="mb-5 flex items-center justify-between">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {post.category}
                          </span>
                          <span className="text-sm text-foreground/50">
                            {post.date}
                          </span>
                        </div>

                        <h2 className="font-display text-2xl font-semibold leading-snug text-primary transition-colors group-hover:text-accent">
                          {post.title}
                        </h2>

                        <p className="mt-4 line-clamp-3 leading-relaxed text-foreground/70">
                          {post.excerpt}
                        </p>

                        <div className="mt-8 inline-flex items-center gap-2 font-medium text-primary transition group-hover:text-accent">
                          Read Article
                          <span aria-hidden>→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav
                    aria-label="Blog pagination"
                    className="mt-16 flex items-center justify-center gap-2"
                  >
                    {safePage > 1 ? (
                      <Link
                        href={safePage - 1 === 1 ? "/blog" : `/blog?page=${safePage - 1}`}
                        className="inline-flex items-center justify-center rounded-full border border-primary/15 w-11 h-11 text-primary transition hover:border-primary hover:text-accent"
                        aria-label="Previous page"
                      >
                        ←
                      </Link>
                    ) : (
                      <span
                        className="inline-flex items-center justify-center rounded-full border border-primary/10 w-11 h-11 text-primary/30 cursor-not-allowed"
                        aria-hidden
                      >
                        ←
                      </span>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <Link
                        key={num}
                        href={num === 1 ? "/blog" : `/blog?page=${num}`}
                        aria-current={num === safePage ? "page" : undefined}
                        className={`inline-flex items-center justify-center rounded-full w-11 h-11 text-sm font-medium transition ${
                          num === safePage
                            ? "bg-primary text-white"
                            : "border border-primary/15 text-primary hover:border-primary hover:text-accent"
                        }`}
                      >
                        {num}
                      </Link>
                    ))}

                    {safePage < totalPages ? (
                      <Link
                        href={`/blog?page=${safePage + 1}`}
                        className="inline-flex items-center justify-center rounded-full border border-primary/15 w-11 h-11 text-primary transition hover:border-primary hover:text-accent"
                        aria-label="Next page"
                      >
                        →
                      </Link>
                    ) : (
                      <span
                        className="inline-flex items-center justify-center rounded-full border border-primary/10 w-11 h-11 text-primary/30 cursor-not-allowed"
                        aria-hidden
                      >
                        →
                      </span>
                    )}
                  </nav>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}