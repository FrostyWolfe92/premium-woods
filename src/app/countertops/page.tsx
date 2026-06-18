import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";

export const metadata: Metadata = {
  title: "Custom Countertops — Butcher Block, Live Edge, Epoxy, Laminate",
  description:
    "Custom wood, epoxy, and laminate countertops fabricated in Lincoln, NE. Butcher block, walnut, maple, live edge slab, river-pour epoxy, and commercial-grade plastic laminate. Free measure & quote across Nebraska, Iowa, and Kansas.",
  alternates: { canonical: "/countertops/" },
};

const TYPES = [
  {
    name: "Butcher Block",
    swatch: "swatch-walnut",
    href: "/countertops/butcher-block/",
    body: "Edge-grain and end-grain butcher block in walnut, hard maple, cherry, oak. Food-safe oil or hard wax finish. Built to last decades.",
    use: "Kitchen islands · Prep tops · Bakery work surfaces",
  },
  {
    name: "Live Edge & Slab",
    swatch: "swatch-liveedge",
    href: "/countertops/live-edge/",
    body: "Single-slab live edge tops with the natural bark line preserved. Bookmatched options for islands and bar tops.",
    use: "Bar tops · Conference tables · Statement islands",
  },
  {
    name: "Epoxy Resin",
    swatch: "swatch-epoxy",
    href: "/countertops/epoxy/",
    body: "Custom-poured epoxy counters and river tables. Crystal or tinted, embedded objects, metallic pigments. Heat-tolerant cure.",
    use: "Bars · River tables · Custom installations",
  },
  {
    name: "Plastic Laminate",
    swatch: "swatch-laminate",
    href: "/countertops/laminate/",
    body: "Commercial-grade plastic laminate counters. Wilsonart, Formica, Pionite, Nevamar. Post-form or square-edge. Fast turnaround.",
    use: "Offices · Retail · Healthcare · Education",
  },
];

export default function Countertops() {
  return (
    <>
      <PageHero
        eyebrow="Custom Countertops"
        title="Every material we work,"
        highlight="built to your spec."
        subtitle="Wood, epoxy, and commercial laminate — fabricated in our Lincoln shop, templated on-site, and delivered installed. From a single bar top to a full commercial casework package."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {TYPES.map((t) => (
            <Link key={t.name} href={t.href} className="group rounded-xl overflow-hidden border border-[var(--color-line)] bg-white hover:border-[var(--color-brass)] hover:shadow-xl transition">
              <div className={`aspect-[16/9] ${t.swatch} grain`} />
              <div className="p-7">
                <h2 className="font-display text-3xl font-semibold text-[var(--color-walnut)]">{t.name}</h2>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{t.body}</p>
                <div className="mt-4 text-xs uppercase tracking-wider text-[var(--color-brass-deep)]">{t.use}</div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brass-deep)]">
                  Materials & options <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABlock />
    </>
  );
}
