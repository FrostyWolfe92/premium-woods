import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Countertops & Casework — Council Bluffs, IA",
  description:
    "Custom counters and commercial casework delivered to Council Bluffs and Western Iowa. Family-owned Lincoln NE shop, weekly Iowa runs, BBB A+ rated since 1999.",
  alternates: { canonical: "/locations/council-bluffs-ia/" },
};

export default function CouncilBluffsPage() {
  return (
    <>
      <PageHero
        eyebrow="Council Bluffs, Iowa"
        title="Across the river."
        highlight="Same shop, same crew."
        subtitle="Council Bluffs and Western Iowa ride on our Omaha delivery route. Same lead times, same direct install crew, same on-time commitment as any Nebraska job."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow">Western Iowa Service</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            One bridge away from your kitchen.
          </h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
            Council Bluffs, Carter Lake, Glenwood, Missouri Valley, Sioux City — when our truck heads to Omaha, it's heading to you too. No long-haul delivery surcharge for jobs along the I-29 corridor.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Council Bluffs, Carter Lake, Glenwood, Missouri Valley",
              "Sioux City and Northwest Iowa corridor",
              "Direct delivery on existing Omaha-Iowa route",
              "Iowa licensed contractor cooperation on commercial projects",
              "Familiar with Western Iowa residential and commercial GCs",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-brass-deep)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
            <div className="eyebrow">Iowa Cities We Serve</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Council Bluffs", "Carter Lake", "Glenwood", "Missouri Valley", "Sioux City", "Onawa", "Denison", "Harlan", "Atlantic", "Red Oak"].map((c) => (
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
