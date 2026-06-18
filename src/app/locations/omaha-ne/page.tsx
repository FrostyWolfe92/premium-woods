import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Countertops & Casework — Omaha, NE",
  description:
    "Custom butcher block, live edge, epoxy, and commercial casework delivered to Omaha from our Lincoln shop. Weekly Omaha delivery runs. Family-owned since 1999. Serving West Omaha, Midtown, Bellevue, Papillion, La Vista.",
  alternates: { canonical: "/locations/omaha-ne/" },
};

export default function OmahaPage() {
  return (
    <>
      <PageHero
        eyebrow="Omaha, Nebraska"
        title="A Lincoln shop"
        highlight="that runs to Omaha weekly."
        subtitle="Most Omaha-metro jobs go in our truck on the same delivery run. Same crew that built it sets it. That's how installs stay clean and dates stay tight."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="eyebrow">What We Do In Omaha</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            From West Omaha kitchens to Midtown office build-outs.
          </h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
            Custom butcher block islands for residential remodelers, live-edge bar tops for the Old Market, plastic-laminate casework for healthcare and commercial spaces. We've quietly supplied Omaha GCs for two decades.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Field measure in West Omaha, Midtown, Downtown, Bellevue, Papillion, La Vista",
              "Direct weekly delivery from Lincoln — no long-haul up-charge",
              "Familiar with Omaha residential GCs and commercial contractors",
              "Bonded and insured for commercial bid work",
              "Lead times typically 3-5 weeks for residential, 4-8 for commercial",
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
            <div className="eyebrow">Omaha-Metro Cities We Serve</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Omaha", "West Omaha", "Midtown", "Old Market", "Bellevue", "Papillion", "La Vista", "Gretna", "Elkhorn", "Bennington", "Ralston", "Fort Calhoun"].map((c) => (
                <span key={c} className="text-xs bg-white border border-[var(--color-line)] rounded-full px-3 py-1 text-[var(--color-ink)]">{c}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-[var(--color-walnut)] text-[var(--color-bone)] p-6 grain">
            <div className="eyebrow-light">Why Omaha Calls Lincoln</div>
            <p className="mt-3 text-[var(--color-oat)] text-sm leading-relaxed">
              Omaha has plenty of cabinet shops. What we offer that they don't: 27 years of laminate AND wood under one roof, on-time delivery as a written commitment, and a family running the install — not a third-party crew.
            </p>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
