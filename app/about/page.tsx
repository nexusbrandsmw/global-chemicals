import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteButton from "@/components/QuoteButton";
import { site } from "@/data/site";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Global Chemicals is a Malawian seller and supplier of agricultural products, tools, equipment, pest control, veterinary services and drugs.",
};

const coreValues = [
  "Customer focused culture",
  "Just-in-time delivery",
  "Highly motivated, well-trained staff",
  "Team work",
  "Continuous improvement of goods and services",
  "Uncompromised discipline",
  "Equal employment opportunity",
  "Social responsibility",
];

const team = [
  { name: "Shabban U. Makawila", role: "Managing Director (HR and Admin.)", qualification: "CIPS Diploma", image: "/Shabban.jpg" },
  { name: "Abdul Rasheed A. Amanzie", role: "Co-Managing Director (Procurement and supplying chain management)", qualification: "BBA", image: "/rasheed.jpg" },
  { name: "Faham Alizi Banda", role: "Communications and Corporate Affairs Manager", qualification: "Degree in Communication Studies", image: "/FahamBanda.jpeg" },
  { name: "Abdullah Kaisi", role: "Marketing Manager", qualification: "CIPS Diploma", image: "/Abdullah.jpeg" },
  { name: "Kumbukani Rasheed", role: "Finance Manager", qualification: "Associate Degree in Marketing & Diploma in Business Management", image: "/kumbukani.jpg" },
  { name: "Juhudie Makawila", role: "Operations Manager", qualification: "Associate Degree in Marketing & Diploma in Business Management", image: "/juhudie.jpg" },
  { name: "Shahida Makawila", role: "Secretary", qualification: "Diploma in Business Management", image: "/shahida.jpg" },
  { name: "Awame Abubakar", role: "Fumigation & Pest Control Officer", qualification: "Diploma in Agriculture, Certificate in Pest Control & Management", image: "/Awame.jpeg" },
  { name: "Tionge M. Kaliyopa", role: "Veterinary Technician", qualification: "Diploma in Veterinary Medicine", image: "/TiongeKaliyopa.jpeg" },
  { name: "Nema Kamala", role: "Mitundu Branch", qualification: "Diploma in Veterinary Medicine", image: "/Nema.jpeg" },
];

const branches = [
  {
    name: "Lilongwe (Head Office)",
    detail: "Kampala House, adjacent to TNM Shop, along Kamuzu Procession Road",
  },
  { name: "Malangalanga", detail: "Branch office" },
  { name: "Mitundu", detail: "Branch office" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HEADING */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 text-center max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About Us
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary">
              A Trusted Name in Malawian Agriculture
            </h1>

            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              A trusted name in Malawian agricultural industry/sector that provides, sells and supplies seeds, 
              fertilizers, chemicals, herbicides tools & equipment, veterinary drugs and services, pest control 
              & fumigation services and occupational health services
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white p-10 border border-primary/10">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Mission
              </span>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                To effectively and efficiently deliver high quality agricultural
                solutions including inputs, tools, equipment, veterinary
                services and pest control while promoting sustainability and
                maximizing value for our customers, stakeholders and partners.
              </p>
            </div>

            <div className="rounded-3xl bg-primary p-10 text-white">
              <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondaey">
                Vision
              </span>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                To become the premier provider of innovative agricultural
                solutions, delivering exceptional quality, expertise and value
                to our customers in Malawi and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                How We Operate
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
                Our Core Values
              </h2>
            </div>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((v) => (
                <li
                  key={v}
                  className="flex items-start gap-3 rounded-2xl border border-primary/10 p-6"
                >
                  <FaCheckCircle className="shrink-0 mt-0.5 text-primary" size={16} />
                  <span className="text-sm text-foreground/80">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MANAGEMENT TEAM */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Our Team
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
                Management Team
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                A multidisciplinary team spanning business management, animal
                and plant nutrition, occupational health and safety, and
                communication and marketing.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl bg-white border border-primary/10 overflow-hidden"
                >
                  <div className="relative aspect-square w-full bg-primary/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-accent font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRANCHES */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Where We Are
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary leading-tight">
                Our Branches
              </h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {branches.map((b) => (
                <div
                  key={b.name}
                  className="rounded-2xl border border-primary/30 p-7"
                >
                  <FaMapMarkerAlt className="text-primary" size={18} />
                  <p className="mt-4 font-display font-semibold text-secondary">
                    {b.name}
                  </p>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-center text-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-display font-semibold">
              Want to work with us?
            </h2>
            <p className="mt-3 text-white/75">
              Get in touch for pricing, availability, or to book a service.
            </p>
            <QuoteButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-secondary px-8 py-4 text-sm font-semibold hover:opacity-90 transition">
              Request a Quote
              <span aria-hidden>→</span>
            </QuoteButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}