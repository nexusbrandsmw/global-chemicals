"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { useQuoteModal } from "@/components/QuoteModalProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="hidden md:block bg-primary text-white text-xs">
        <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <FaEnvelope className="text-white" />
            <span>{site.email}</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <FaPhone className="text-white" />
            <span>{site.phone}</span>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-primary/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src={site.logo} alt={site.name} width={120} height={40} priority />
          </Link>

          {/* NAV — links and CTA share one pill container, right-aligned */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-primary/10 p-1.5 text-sm font-medium text-white ml-auto">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-5 py-2 transition ${
                      isActive(link.href)
                        ? "bg-primary/80 text-white font-semibold"
                        : "text-secondary hover:bg-primary/20 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-1 bg-accent text-secondary font-bold px-5 py-2 rounded-full transition hover:opacity-90"
            >
              Request a Quote
              <span aria-hidden> →</span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t border-secondary/10">
            <ul className="flex flex-col p-4 gap-2 text-secondary">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-full px-5 py-2.5 text-sm text-primary font-medium transition ${
                      isActive(link.href)
                        ? "bg-primary text-secondary font-semibold"
                        : "text-white/85 hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    setOpen(false);
                    openQuoteModal();
                  }}
                  className="mt-2 w-full text-left bg-accent text-secondary font-bold px-5 py-2.5 rounded-full inline-block text-sm"
                >
                  Request a Quote
                  <span aria-hidden> →</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}