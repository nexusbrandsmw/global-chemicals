import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { catalog } from "@/data/products";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Global Chemicals' range of seeds, fertilizers, pesticides, herbicides, veterinary products and farming tools, supplied across Malawi.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ───────────────── PRODUCTS ───────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Our Products
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary">
                Discover Our Product Range
              </h1>

              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                {site.description}
              </p>
            </div>

            {/* CATALOG */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {catalog.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="group block rounded-[2rem] border border-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
                >
                  <div className="relative h-64 mb-8">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-secondary">
                    {c.name}
                  </h3>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition">
                      View Details
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}