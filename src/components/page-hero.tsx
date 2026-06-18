import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  showCta = true,
  bgImage,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  showCta?: boolean;
  bgImage?: string;
}) {
  return (
    <section className="relative wood-bg grain text-[var(--color-bone)] overflow-hidden">
      {bgImage && (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-walnut-deep)]/85 via-[var(--color-walnut)]/85 to-[var(--color-walnut)]/95" />
        </>
      )}
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-[var(--color-amber)]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--color-amber-deep)]/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 lg:pt-32 lg:pb-28">
        <div className="eyebrow-light">{eyebrow}</div>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.04] max-w-4xl text-balance">
          {title} {highlight && <span className="text-[var(--color-amber)]">{highlight}</span>}
        </h1>
        <p className="mt-7 text-lg text-[var(--color-oat)] max-w-2xl leading-relaxed text-pretty">{subtitle}</p>
        {showCta && (
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-amber rounded-md px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
