import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Epoxy Resin Countertops & River Tables — Custom Pours",
  description:
    "Custom-poured epoxy countertops, river tables, and bar tops. Tinted resins, embedded inclusions, metallic pigments, heat-tolerant cure. Fabricated in Lincoln, NE — installed across Nebraska, Iowa, and Kansas.",
  alternates: { canonical: "/countertops/epoxy/" },
};

export default function Epoxy() {
  return (
    <>
      <PageHero
        eyebrow="Epoxy Resin Tops"
        title="Custom-poured tops with"
        highlight="depth you can see into."
        subtitle="Crystal-clear or pigmented epoxy poured over wood, embedded objects, or as a standalone river. Cured hard, sanded glass-smooth, and installed by us."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow">Build Options</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            One process. <em className="text-[var(--color-amber-deep)] not-italic">Endless variations.</em>
          </h2>
          <div className="mt-7 space-y-3">
            {[
              "River tables — twin live edge slabs with epoxy channel",
              "Full-pour tops — counter built as a single epoxy slab",
              "Embedded objects — coins, bottle caps, branded inclusions, geode slices",
              "Metallic pigments — copper, gold, pearl, dichroic shifts",
              "Wood + epoxy hybrid — sealed butcher block with tinted void fills",
              "Heat-tolerant clear coat option for bar service",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-amber-deep)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-ink)]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow">What To Know</div>
          <h3 className="mt-3 font-display text-3xl font-semibold text-[var(--color-walnut)]">Honest expectations.</h3>
          <div className="mt-6 space-y-5 text-[var(--color-muted)]">
            <div>
              <div className="font-semibold text-[var(--color-walnut)]">Heat tolerance.</div>
              <p className="mt-1">Standard epoxy softens above ~135°F. We can spec a heat-tolerant top-coat for bar tops with hot service. Don't set a screaming pan on it.</p>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-walnut)]">Cure time.</div>
              <p className="mt-1">Pour to install: 4-6 weeks. Cure is what makes it strong — we don't rush it.</p>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-walnut)]">Touch-up.</div>
              <p className="mt-1">Light scratches buff out. Deep gouges can be re-poured and re-sanded in place by our crew.</p>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-walnut)]">UV behavior.</div>
              <p className="mt-1">Direct sun yellows untreated epoxy over years. UV-stable formulations available for sunlit installs.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock sub="Send us a Pinterest board, a sketch, or a sentence. We'll build to whatever's in your head." />
    </>
  );
}
