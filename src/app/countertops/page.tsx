import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { IMG } from "@/lib/images";
import { Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Custom Countertops — Butcher Block, Live Edge, Epoxy, Laminate",
  description:
    "Custom wood, epoxy, and laminate countertops fabricated in Lincoln, NE. Butcher block, walnut, maple, live edge slab, river-pour epoxy, and commercial-grade plastic laminate. Free measure & quote across Nebraska, Iowa, and Kansas.",
  alternates: { canonical: "/countertops/" },
};

const TYPES = [
  {
    name: "Butcher Block",
    img: IMG.kitchenIsland,
    href: "/countertops/butcher-block/",
    body: "Edge-grain and end-grain butcher block in walnut, hard maple, cherry, oak. Food-safe oil or hard wax finish. Built to last decades.",
    use: "Kitchen islands · Prep tops · Bakery work surfaces",
  },
  {
    name: "Live Edge & Slab",
    img: IMG.liveEdge,
    href: "/countertops/live-edge/",
    body: "Single-slab live edge tops with the natural bark line preserved. Bookmatched options for islands and bar tops.",
    use: "Bar tops · Conference tables · Statement islands",
  },
  {
    name: "Epoxy Resin",
    img: IMG.saw,
    href: "/countertops/epoxy/",
    body: "Custom-poured epoxy counters and river tables. Crystal or tinted, embedded objects, metallic pigments. Heat-tolerant cure.",
    use: "Bars · River tables · Custom installations",
  },
  {
    name: "Plastic Laminate",
    img: IMG.brassKitchen,
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
        bgImage={IMG.hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Stagger className="grid md:grid-cols-2 gap-6" gap={0.07}>
          {TYPES.map((t) => (
            <StaggerItem key={t.name}>
              <Link href={t.href} className="group block rounded-xl overflow-hidden border border-[var(--color-line)] bg-white hover:border-[var(--color-amber)] hover:shadow-2xl transition h-full">
                <div className="img-frame aspect-[16/9]">
                  <img src={t.img} alt={t.name} loading="lazy" />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-3xl font-semibold text-[var(--color-walnut)]">{t.name}</h2>
                  <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{t.body}</p>
                  <div className="mt-4 text-xs uppercase tracking-wider text-[var(--color-amber-deep)] font-semibold">{t.use}</div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-amber-deep)]">
                    Materials & options <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTABlock />
    </>
  );
}
