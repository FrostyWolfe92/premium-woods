import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function CTABlock({ headline, sub }: { headline?: React.ReactNode; sub?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative rounded-2xl wood-bg grain text-[var(--color-bone)] p-10 md:p-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[var(--color-amber)]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[var(--color-amber-deep)]/15 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="eyebrow-light">Ready When You Are</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight text-balance">
            {headline ?? <>Get a real quote in <span className="text-[var(--color-amber)]">24 hours.</span></>}
          </h2>
          {sub && <p className="mt-5 text-[var(--color-oat)] max-w-2xl mx-auto text-pretty">{sub}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="btn-amber rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              Start a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
