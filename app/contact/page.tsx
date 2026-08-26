import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Global Chemicals for agricultural inputs, pest control, fumigation and veterinary services across Malawi.",
};

const branches = [
  {
    name: "Lilongwe (Head Office)",
    detail: "Kampala House, adjacent to TNM Shop, along Kamuzu Procession Road",
  },
  { name: "Malangalanga", detail: "Branch office" },
  { name: "Mitundu", detail: "Branch office" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HEADING */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 text-center max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">
              Get In Touch
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-secondary">
              Talk to Our Sales Team
            </h1>

            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              Reach out for stock availability, pricing, or to arrange a
              fumigation, pest control or veterinary service.
            </p>
          </div>
        </section>

        {/* CONTACT INFO + FORM */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            {/* INFO */}
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt size={14} className="text-primary shrink-0" />
                  <span>{site.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope size={14} className="text-primary shrink-0" />
                  <span>{site.email}</span>
                </div>

                <div className="flex items-center gap-3 ">
                  <FaMapMarkerAlt size={14} className="text-primary shrink-0" />
                  <span>{site.address}</span>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-1 gap-4">
                {branches.map((b) => (
                  <div
                    key={b.name}
                    className="rounded-3xl p-5 border border-primary/60"
                  >
                    <p className="font-display font-semibold  text-secondary">
                      {b.name}
                    </p>
                    <p className="mt-2 leading-relaxed text-foreground/60">
                      {b.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <form className="rounded-3xl bg-white p-8 border border-primary/10">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className=" font-medium text-secondary">Name</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-primary/60 px-4 py-3  focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className=" font-medium text-secondary">Phone</label>
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-primary/60 px-4 py-3 focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className=" font-medium text-secondary">
                  What do you need?
                </label>
                <select className="mt-2 w-full rounded-lg border border-primary/60 px-4 py-3 text-sm focus:outline-none focus:border-accent bg-white">
                  <option>Seeds</option>
                  <option>Fertilizers</option>
                  <option>Pesticides</option>
                  <option>Herbicides</option>
                  <option>Veterinary Products</option>
                  <option>Farming Tools</option>
                  <option>Fumigation / Pest Control</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-5">
                <label className=" font-medium text-secondary">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-primary/60 px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-secondary text-white py-3.5 font-semibold hover:opacity-90 transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}