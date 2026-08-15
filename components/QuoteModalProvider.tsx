"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";

type QuoteModalContextType = {
  openQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used inside QuoteModalProvider");
  return ctx;
}

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openQuoteModal = () => {
    setSubmitted(false);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Global Chemicals, I'd like to request a quote."
  )}`;

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition"
              aria-label="Close"
            >
              <FaTimes size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <h3 className="text-xl font-display font-semibold text-primary">
                  Thanks — we&apos;ll be in touch
                </h3>
                <p className="mt-3 text-sm text-foreground/60">
                  Our sales team will reach out shortly with your quote.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-display font-semibold text-primary">
                  Request a Quote
                </h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Tell us what you need and we&apos;ll get back to you — or
                  chat with us directly on WhatsApp.
                </p>

                < a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full border border-primary/20 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition"
                >
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </a>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-primary/10" />
                  <span className="text-xs text-foreground/40 uppercase tracking-wide">or</span>
                  <div className="h-px flex-1 bg-primary/10" />
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-primary/15 px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="w-full rounded-lg border border-primary/15 px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                  <textarea
                    rows={3}
                    placeholder="What do you need a quote for?"
                    className="w-full rounded-lg border border-primary/15 px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary text-white py-3.5 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Send Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}