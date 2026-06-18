import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function CTABlock({ headline, sub }: { headline?: React.ReactNode; sub?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl wood-bg grain text-[var(--color-bone)] p-10 md:p-14 text-center">
        <div className="eyebrow-light">Ready When You Are</div>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold leading-tight">
          {headline ?? <>Get a real quote in <span className="text-[var(--color-brass)]">24 hours.</span></>}
        </h2>
        {sub && <p className="mt-4 text-[var(--color-oat)] max-w-2xl mx-auto">{sub}</p>}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/contact/" className="btn-brass rounded-md px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
            Start a Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
