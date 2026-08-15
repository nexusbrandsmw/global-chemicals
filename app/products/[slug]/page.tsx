import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { catalog } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaBoxOpen } from "react-icons/fa";

export async function generateStaticParams() {
  return catalog.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = catalog.find((c) => c.slug === slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = catalog.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const relatedCategories = catalog.filter((c) => c.slug !== category.slug);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <span className="text-primary uppercase tracking-[0.25em] text-sm">
                Product Category
              </span>

              <h1 className="mt-5 text-5xl lg:text-6xl font-display font-semibold text-secondary">
                {category.name}
              </h1>

              <p className="mt-6 text-lg leading-8 text-foreground/70">
                {category.description}
              </p>

              <Link
                href="/contact"
                className="inline-block mt-10 bg-primary text-white px-8 py-4 rounded-full hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-accent/10 py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          {/* Highlights */}
          <div>
            <h2 className="text-3xl font-display font-semibold text-secondary">
              What&apos;s Covered
            </h2>

            <div className="mt-8 space-y-5">
              {category.features.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <span className="text-lg text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div>
            <h2 className="text-3xl font-display font-semibold text-secondary">
              Example Products
            </h2>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              A sample of what&apos;s in stock in this category — contact us
              for the full price list and current availability.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {category.examples.map((example) => (
                <div
                  key={example}
                  className="bg-accent rounded-full px-6 py-4 flex items-center gap-3 border border-primary/10"
                >
                  <FaBoxOpen className="text-primary text-lg shrink-0" />
                  <span className="font-medium text-black/80">{example}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CATEGORIES */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="uppercase tracking-[0.25em] text-sm text-primary">
                More Categories
              </span>
              <h2 className="mt-3 text-4xl font-display font-semibold text-secondary">
                You May Also Need
              </h2>
            </div>

            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition"
            >
              View All Products
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCategories.slice(0, 3).map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group rounded-2xl border border-primary/10 px-6 py-8 text-center transition hover:border-accent hover:bg-primary/5"
              >
                <h3 className="text-xl font-display font-semibold text-primary transition group-hover:text-accent">
                  {c.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              View All Products
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}