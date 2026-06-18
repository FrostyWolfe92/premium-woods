import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Butcher Block Countertops — Walnut, Maple, Cherry, Oak",
  description:
    "Custom butcher block countertops in walnut, hard maple, cherry, and red oak. Edge-grain and end-grain construction, food-safe finishes. Fabricated in Lincoln, NE — delivered across Nebraska, Iowa & Kansas.",
  alternates: { canonical: "/countertops/butcher-block/" },
};

const SPECIES = [
  { name: "Black Walnut", swatch: "swatch-walnut", note: "Premium hardwood. Dark, rich, classic." },
  { name: "Hard Maple", swatch: "swatch-maple", note: "Bright, tight grain. Maximum durability." },
  { name: "American Cherry", swatch: "swatch-cherry", note: "Warm tones that deepen with age." },
  { name: "Red Oak", swatch: "swatch-oak", note: "Bold open grain. Midwest workhorse." },
];

export default function ButcherBlock() {
  return (
    <>
      <PageHero
        eyebrow="Butcher Block Countertops"
        title="Solid hardwood tops"
        highlight="built to last 50 years."
        subtitle="Edge-glued and end-grain butcher block in walnut, hard maple, cherry, and oak — milled, sanded, sealed, and installed by the same Lincoln shop that's done this since 1999."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <div className="eyebrow">Why Wood</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">A counter that gets <em className="text-[var(--color-brass-deep)] not-italic">better</em> with use.</h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
            Engineered stone chips. Laminate scratches. A properly built and oiled butcher block top can be sanded, re-oiled, and brought back to new — for the entire lifetime of the kitchen it sits in. That's why we still recommend it for the islands our clients use the hardest.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Edge-grain or end-grain construction",
              "Food-safe mineral oil or hard wax finish",
              "Optional drip groove, undermount sink cutout, induction cooktop fit",
              "Knife-edge, eased, bevel, or live-edge profile",
              "Field-templated for a tight scribe to your walls",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-brass-deep)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow">Species We Stock</div>
          <h3 className="mt-3 font-display text-3xl font-semibold text-[var(--color-walnut)]">Four hardwoods. Pick yours.</h3>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {SPECIES.map((s) => (
              <div key={s.name} className="rounded-lg overflow-hidden border border-[var(--color-line)] bg-white">
                <div className={`aspect-[4/3] ${s.swatch} grain`} />
                <div className="p-4">
                  <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">{s.name}</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1 leading-snug">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--color-walnut)]">Butcher block, answered.</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { q: "Can I cut directly on it?", a: "Edge-grain tops we treat as prep surfaces — use a board. End-grain tops are designed to be cut on without damage." },
              { q: "Does it warp?", a: "Not if it's properly milled, sealed on all six sides, and let to acclimate. We do all three." },
              { q: "How thick?", a: "1-1/2\" is our standard. 2-1/4\" and 3\" available for islands or chef-grade prep tops." },
              { q: "Maintenance?", a: "Mineral oil every few months for the first year, then 2-3x a year. Sand and re-finish every 5-10 years to restore." },
              { q: "Sink cutouts?", a: "Yes — under-mount, drop-in, or apron-front. We seal cutouts with a moisture-resistant epoxy finish." },
              { q: "Lead time?", a: "Typically 3-5 weeks from approved drawings to install. We commit to the date in writing." },
            ].map((f) => (
              <div key={f.q}>
                <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">{f.q}</div>
                <p className="mt-2 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock sub="Send us a sketch with rough dimensions. We'll send a real quote — species, finish, lead time, total — within one business day." />
    </>
  );
}
