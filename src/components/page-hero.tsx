import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  showCta = true,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  showCta?: boolean;
}) {
  return (
    <section className="relative wood-bg grain text-[var(--color-bone)] overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-[var(--color-brass)]/15 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="eyebrow-light">{eyebrow}</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          {title} {highlight && <span className="text-[var(--color-brass)]">{highlight}</span>}
        </h1>
        <p className="mt-6 text-lg text-[var(--color-oat)] max-w-2xl leading-relaxed">{subtitle}</p>
        {showCta && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-brass rounded-md px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
