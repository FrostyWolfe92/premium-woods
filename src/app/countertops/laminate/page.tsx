import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Plastic Laminate Countertops — Commercial, Office, Healthcare",
  description:
    "Commercial-grade plastic laminate countertops. Wilsonart, Formica, Pionite, Nevamar. Post-form or square-edge construction. Fast lead times for offices, retail, healthcare, and education across Nebraska, Iowa, and Kansas.",
  alternates: { canonical: "/countertops/laminate/" },
};

export default function Laminate() {
  return (
    <>
      <PageHero
        eyebrow="Plastic Laminate Counters"
        title="Commercial-grade laminate."
        highlight="Built fast. Built right."
        subtitle="When the spec calls for durable, washable, color-matched, and on-budget, this is what we run all day. We've been making laminate tops since 1999 — we know the seam tricks and the post-form bends that make them last."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="eyebrow">Where It Wins</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            The right answer for <em className="text-[var(--color-brass-deep)] not-italic">working spaces.</em>
          </h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
            Offices, exam rooms, breakrooms, schools, retail back-of-house, public-sector. Laminate is durable, cleanable, fits any color spec, and we can deliver it weeks faster than stone. We carry the full Wilsonart, Formica, Pionite, and Nevamar lines and can match nearly any finish your designer specs.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Post-form, square-edge, or beveled construction",
              "3/4\" or 1-1/8\" particleboard or MDF substrate",
              "Matching backsplash and end-cap available",
              "ADA-compliant heights and edge profiles",
              "AWI Premium grade available on spec",
              "Most jobs delivered in 2-3 weeks",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-brass-deep)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
            <div className="eyebrow">Suppliers We Run</div>
            <ul className="mt-4 space-y-3 text-[var(--color-ink)]">
              <li className="border-b border-[var(--color-line)] pb-3"><strong>Wilsonart</strong> — full range, any finish</li>
              <li className="border-b border-[var(--color-line)] pb-3"><strong>Formica</strong> — including 180fx and DecoMetal</li>
              <li className="border-b border-[var(--color-line)] pb-3"><strong>Pionite</strong> — solids, woodgrains, abstracts</li>
              <li><strong>Nevamar</strong> — including ARP scratch-resistant</li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-white p-6">
            <div className="eyebrow">Common Specs</div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
              <li>· Office breakroom counters</li>
              <li>· Reception transaction tops</li>
              <li>· Healthcare exam casework</li>
              <li>· Educational lab/desk tops</li>
              <li>· Retail back-of-house</li>
              <li>· Municipal & public-sector facilities</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock sub="Send us your spec — laminate color, edge profile, linear footage. We'll come back with pricing and a real lead time." />
    </>
  );
}
