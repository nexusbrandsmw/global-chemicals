"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import { site, getCopyrightText } from "@/data/site";

const services = [
  "Fumigation Services",
  "Pest & Termite Control",
  "Veterinary Services",
  "Environmental Disinfection",
];

const products = [
  "Insecticides",
  "Fertilizers",
  "Seeds",
  "Garden Tools & Protective Wear",
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <footer className="bg-secondary text-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 py-12 transition-all duration-700 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        <div className="grid gap-10 sm:grid-cols-3">
          {/* SERVICES */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-accent">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-white/80">{s}</li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-accent">
              Products
            </h3>

            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p} className="text-white/80">{p}</li>
              ))}
            </ul>
            <ul className="text-white/80 mt-3">
              Herbicides
            </ul>
            <ul className="text-white/80 mt-3">
              Pesticides
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-accent">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone className="text-accent mt-1 shrink-0" size={20} />
                <a href={`tel:${site.phone}`} className="text-white/80 hover:text-accent">
                  {site.phone}
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-accent mt-1 shrink-0" size={20} />
                <a href={`mailto:${site.email}`} className="text-white/80 hover:text-accent">
                  {site.email}
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                <span className="text-white/80">
                  {site.address}
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="pt-6 flex gap-4">
              {site.social.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookF className="hover:text-accent cursor-pointer" />
                </a>
              )}

              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram className="hover:text-accent cursor-pointer" />
                </a>
              )}

              {site.social.linkedin && (
                <a href={site.social.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn className="hover:text-accent cursor-pointer" />
                </a>
              )}

              {site.social.tiktok && (
                <a href={site.social.tiktok} target="_blank" rel="noreferrer">
                  <FaTiktok className="hover:text-accent cursor-pointer" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>{getCopyrightText()}</div>

          <div>
            {site.copyright.developer.label}{" "}
            <a
              href={site.copyright.developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors underline"
            >
              {site.copyright.developer.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}