import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { BUSINESS } from "@/lib/business";
import { MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Countertops & Casework — Lincoln, NE",
  description:
    "Premium Woods is Lincoln's family-owned custom counter and casework shop. Butcher block, live edge, epoxy, and laminate counters plus commercial casework — fabricated in our Cornhusker Highway shop since 1999.",
  alternates: { canonical: "/locations/lincoln-ne/" },
};

export default function LincolnPage() {
  return (
    <>
      <PageHero
        eyebrow="Lincoln, Nebraska"
        title="Our home shop."
        highlight="Since 1999."
        subtitle="We've been building counters and commercial casework out of our Cornhusker Highway shop for 27 years. Most local jobs are templated and delivered the same week."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow">Lincoln Service</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            Right down the street.
          </h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
            From a Haymarket bar build to a South Lincoln remodel, we know the city, the inspectors, and the contractors. Field measure today, drawings tomorrow, install in weeks not months.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Same-day field measure availability for most Lincoln zip codes",
              "Direct delivery from our 2139 Cornhusker shop",
              "Familiar with Lincoln residential remodel & commercial GCs",
              "Trusted by Lincoln Public Schools and local healthcare facilities",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-amber-deep)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-xl bg-[var(--color-walnut)] text-[var(--color-bone)] p-7 grain">
            <div className="eyebrow-light">Visit The Shop</div>
            <div className="mt-3 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-amber)] mt-1" />
              <div>
                <div className="font-display text-xl font-semibold">2139 Cornhusker Hwy, Suite B</div>
                <div>Lincoln, NE 68521</div>
                <div className="mt-3 text-sm text-[var(--color-oat)]/80">{BUSINESS.hours.weekdays}</div>
              </div>
            </div>
            <div className="mt-6 border-t border-[var(--color-amber)]/30 pt-4">
              <div className="eyebrow-light">Phone</div>
              <a href={BUSINESS.phoneHref} className="font-display text-2xl font-semibold hover:text-[var(--color-amber)]">{BUSINESS.phone}</a>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
            <div className="eyebrow">Nearby Service</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Waverly", "Hickman", "Eagle", "Crete", "Seward", "Beatrice", "Nebraska City", "York"].map((c) => (
                <span key={c} className="text-xs bg-white border border-[var(--color-line)] rounded-full px-3 py-1 text-[var(--color-ink)]">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
