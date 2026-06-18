import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Edge & Slab Countertops — Statement Bar Tops & Islands",
  description:
    "Single-slab live edge countertops, bar tops, and conference tables. Natural edge preserved, epoxy-stabilized voids, custom finish. Fabricated in Lincoln, NE for clients across Nebraska, Iowa, and Kansas.",
  alternates: { canonical: "/countertops/live-edge/" },
};

export default function LiveEdge() {
  return (
    <>
      <PageHero
        eyebrow="Live Edge & Slab Tops"
        title="One slab. One story."
        highlight="One install."
        subtitle="We source single-slab walnut, oak, ash, and maple from regional mills, stabilize voids with tinted epoxy, and hand-finish to bring the grain forward. No two are alike — that's the point."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="eyebrow">What You Get</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            A piece that earns the <em className="text-[var(--color-amber-deep)] not-italic">conversation.</em>
          </h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
            Live edge isn't a finish — it's a sourcing problem. The wrong slab makes the wrong piece. We walk regional sawyers' yards for ours, and we'll send you photos of the actual slab before we mill it.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Walnut, white oak, ash, hard maple, hackberry, locust",
              "Natural live edge, bark removed and sanded smooth",
              "Knot and check voids filled with clear or tinted epoxy",
              "Bookmatched, slipmatched, or single-slab",
              "Hand-rubbed oil, hard wax, or satin polyurethane",
              "Floor-mount or cantilevered base options",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-amber-deep)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden border border-[var(--color-line)] bg-white shadow-lg">
            <div className="aspect-square swatch-liveedge grain" />
            <div className="p-6 bg-[var(--color-cream)]">
              <div className="eyebrow">Typical Use</div>
              <ul className="mt-3 space-y-2 text-[var(--color-ink)]">
                <li>· Restaurant & brewery bar tops</li>
                <li>· Statement kitchen islands</li>
                <li>· Executive conference tables</li>
                <li>· Reception desks</li>
                <li>· Custom retail fixtures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABlock sub="Tell us the rough dimensions and species you're after. We'll send slab photos to choose from before fabrication begins." />
    </>
  );
}
