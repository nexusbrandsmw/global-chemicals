import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShieldAlt } from "react-icons/fa";
import { catalog, services, customers, suppliers, whyUs } from "@/data/products";
import { getAllPosts } from "@/lib/wordpress";
import { site } from "@/data/site";
import QuoteButton from "@/components/QuoteButton";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ─── DATA ─────────────────────────────────────────────────── */

const testimonials = [
  {
    quote: "We've bought our inputs from Global Chemicals for years. Reliable stock, fair prices, and the team actually knows the products.",
    name: "Grace Banda",
    location: "Blantyre",
  },
  {
    quote: "Their fumigation team handled our warehouse infestation fast and safely. Protective wear, proper dosage, no shortcuts.",
    name: "Joseph Phiri",
    location: "Lilongwe",
  },
  {
    quote: "As a research station we need consistent supply and documentation. Global Chemicals has never let us down.",
    name: "Mary Chikwanda",
    location: "Mzuzu",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────── */

export default async function Home() {
  // Fetch latest 3 posts from WordPress — falls back to empty array if API is unreachable
  let latestPosts: any[] = [];
  try {
    const allPosts = await getAllPosts();
    latestPosts = allPosts.slice(0, 3);
  } catch (e) {
    latestPosts = [];
  }

  return (
    <>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[640px] flex items-center text-white">
        {/* background photo — add the real field/tractor/spraying shot
            at public/hero-farm.jpg (or update the src below) */}
        <Image
          src="/hero-farm.jpg"
          alt="Global Chemicals agricultural field"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/20" aria-hidden />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase rounded-full px-4 py-2 bg-white/10 border border-white/15 text-accent">
              Sellers &amp; Suppliers of Quality Agricultural Products
            </span>

            <h1 className="mt-6 font-display font-bold leading-[1.05] text-4xl md:text-5xl lg:text-6xl">
              Agricultural Inputs
              <br />
              &amp; Pest Control
            </h1>

            <p className="mt-6 text-white/75 text-base leading-relaxed max-w-md">
              {site.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-white pl-6 pr-2 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                See All Products
                <span className="flex items-center justify-center w-8 h-8 text-white" aria-hidden>
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 text-white pl-6 pr-2 py-2 text-sm font-semibold hover:bg-white/10 transition"
              >
                See All Services
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE BUSINESS ─────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Who We Are
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
              A trusted name in Malawian agriculture
            </h2>

            <p className="mt-6 text-foreground/70 text-base leading-relaxed">
              {site.description}
            </p>

            <p className="mt-4 text-foreground/70 text-base leading-relaxed">
              Our mission is to effectively and efficiently deliver high quality
              agricultural solutions including inputs, tools, equipment,
              veterinary services and pest control while promoting sustainability
              and maximizing value for our customers, stakeholders and partners.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition"
            >
              Get in Touch
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 border border-primary/60">
              <p className="font-display font-semibold text-4xl text-primary">3</p>
              <p className="mt-2 text-sm text-foreground/60">
                Branches — Lilongwe, Malangalanga, Mitundu
              </p>
            </div>

            <div className="rounded-3xl p-8 border border-primary/60">
              <p className="font-display font-semibold text-4xl text-primary">10</p>
              <p className="mt-2 text-sm text-foreground/60">
                Manufacturer &amp; distributor partners
              </p>
            </div>

            <div className="rounded-3xl p-8 border border-primary/60">
              <p className="font-display font-semibold text-4xl text-primary">10</p>
              <p className="mt-2 text-sm text-foreground/60">
                Product categories in stock
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-secondary text-white">
              <FaShieldAlt size={20} className="text-accent" />
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Safety-first — full protective wear and regulated dosage on every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATALOG ───────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Catalog
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
              What we stock
            </h2>

            <p className="mt-6 text-foreground/70 text-base leading-relaxed">
              From insecticides to veterinary drugs, seed to termiticide — browse
              our range by category.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((c) => (
              <div
                key={c.name}
                className="rounded-3xl overflow-hidden bg-white border border-primary/60 transition hover:border-primary/30 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-primary/5">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-ssecondary">
                    {c.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
            >
              See All Products
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              What We Do
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
              Services beyond the shelf
            </h2>

            <p className="mt-6 text-foreground/70 text-base leading-relaxed">
              From properties fumigation to veterinary care, our team covers the
              full range of agricultural and pest-management needs.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl p-8 border border-primary/10 transition hover:border-primary/30 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-secondary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <QuoteButton
              className="inline-flex items-center gap-2 rounded-full bg-secondary text-accent px-8 py-4 text-sm font-semibold hover:bg-primary/70 hover:text-secondary transition"
            >
              Book a Service
              <span aria-hidden>→</span>
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section className="bg-primary py-20 lg:py-28 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              Why Us
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold leading-tight">
              Why farms and institutions choose us
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-3xl p-7 border border-white/15 bg-white/5">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <w.icon size={18} className="text-white" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-base">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SOURCED FROM (suppliers) ───────────────────────────── */}
      <section className=" py-16 border-b border-primary/10 overflow-hidden">
        <p className="text-center mb-16 text-l font-bold tracking-widest uppercase mb-8 text-secondary">
          Sourced from trusted manufacturers &amp; distributors
        </p>
        <div className="flex w-max animate-marquee-reverse">
          {[...suppliers, ...suppliers].map((s, i) => (
            <div key={`${s.name}-${i}`} className="relative h-20 w-32 mx-16 shrink-0">
              <Image src={s.logo} alt={s.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG / FROM OUR JOURNAL ────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Blog Posts
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
                Our Latest stories
              </h2>

              <p className="mt-5 text-foreground/70 text-lg leading-relaxed">
                Safety guidance, product spotlights and news from Global
                Chemicals&apos; branches across Malawi.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition"
            >
              View All Articles
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.length > 0 ? (
              latestPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group block overflow-hidden rounded-3xl border border-primary/10 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/50">{post.date}</span>
                    </div>

                    <h3 className="mt-2 text-2xl font-display font-semibold text-primary leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-4 text-foreground/70 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-foreground/50">
                No posts published yet. Check back soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ─────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />

            <div className="relative max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white">
                Ready to Stock Up?
              </span>

              <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-white">
                Get the Inputs and Support
                <span className="text-accent"> Your Farm Needs</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                From seeds and fertilizers to pest control and veterinary services —
                Global Chemicals supplies what farms, institutions and businesses
                across Malawi rely on.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-secondary transition hover:scale-105 hover:shadow-lg"
                >
                  Explore Our Products
                </Link>
                <QuoteButton className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white hover:text-primary">
                  Request a Quote
                </QuoteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY (customers) ─────────────────────────────── */}
      <section className="bg-surface py-16 border-b border-primary/10 overflow-hidden">
        <p className="text-center mb-16 text-l font-bold tracking-widest uppercase mb-8 text-secondary">
          Trusted by both big and small businesses and Institutions
        </p>
        <div className="flex w-max animate-marquee">
          {[...customers, ...customers].map((c, i) => (
            <div key={`${c.name}-${i}`} className="relative h-20 w-32 mx-16 shrink-0">
              <Image src={c.logo} alt={c.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}