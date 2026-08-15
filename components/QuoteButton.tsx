"use client";

import { useQuoteModal } from "@/components/QuoteModalProvider";
import type { ReactNode } from "react";

export default function QuoteButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button onClick={openQuoteModal} className={className}>
      {children}
    </button>
  );
}