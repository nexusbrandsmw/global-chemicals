import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl bg-primary/5 h-[320px] flex items-center justify-center">
              <div className="relative rounded-3xl h-[320px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-primary uppercase tracking-[0.25em] text-sm">
                Service
              </span>

              <h1 className="mt-5 text-5xl lg:text-6xl font-display font-semibold text-secondary">
                {service.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-foreground/70">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="inline-block mt-10 bg-primary text-white px-8 py-4 rounded-full hover:opacity-90 transition"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-semibold text-secondary">
            What&apos;s Covered
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-5 max-w-3xl">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-primary" />
                </div>
                <span className="text-lg text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="uppercase tracking-[0.25em] text-sm text-primary">
                More Services
              </span>
              <h2 className="mt-3 text-4xl font-display font-semibold text-secondary">
                You May Also Need
              </h2>
            </div>

            <Link
              href="/services"
              className="hidden md:inline-flex items-center gap-2 text-secondary font-medium hover:text-accent transition"
            >
              View All Services
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-primary/10 px-6 py-8 text-center transition hover:border-accent hover:bg-primary/5"
              >
                <h3 className="text-xl font-display font-semibold text-primary transition group-hover:text-accent">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              View All Services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}