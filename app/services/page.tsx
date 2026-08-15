import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/products";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Global Chemicals provides fumigation, pest and termite control, veterinary services, and environmental disinfection across Malawi.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Our Services
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary">
                Services Beyond the Shelf
              </h1>

              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                {site.description}
              </p>
            </div>

            {/* SERVICES */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={`/services/${s.slug}`}
                  className="group block rounded-[2rem] border border-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon size={22} className="text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-display font-semibold text-secondary">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    {s.text}
                  </p>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition">
                      Learn More
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