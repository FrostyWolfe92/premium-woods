import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { IMG } from "@/lib/images";
import { Stagger, StaggerItem, FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Gallery — Recent Counter & Casework Projects",
  description:
    "A look at recent Premium Woods builds — walnut islands, live edge bars, epoxy pours, commercial casework. Projects across Lincoln, Omaha, Council Bluffs and the surrounding region.",
  alternates: { canonical: "/gallery/" },
};

const PROJECTS = [
  { img: IMG.gallery[0], title: "12-ft Walnut Conference Table", loc: "Downtown Lincoln NE", type: "Live Edge Walnut", note: "Bookmatched slab, satin polyurethane finish" },
  { img: IMG.gallery[1], title: "Walnut Kitchen Island Top",     loc: "West Omaha, NE",       type: "Edge-Grain Butcher Block", note: "Hand-rubbed oil finish, undermount cutout" },
  { img: IMG.gallery[2], title: "Brass + Wood Bar Counter",      loc: "Haymarket, Lincoln NE",type: "Custom Wood + Brass",   note: "Single-pour, brass fixture detail" },
  { img: IMG.gallery[3], title: "Cherry Library Built-Ins",      loc: "Papillion, NE",        type: "Custom Millwork",       note: "Floor-to-ceiling, hand-finished cherry" },
  { img: IMG.gallery[4], title: "Maple Bakery Prep Counter",     loc: "Council Bluffs, IA",   type: "End-Grain Maple",       note: "End-grain, food-safe wax finish" },
  { img: IMG.gallery[5], title: "Workshop Tools — In Process",   loc: "Lincoln Shop",         type: "Behind the Scenes",     note: "Tooling for a Lincoln casework job" },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="A few recent ones."
        highlight="There are a thousand more."
        subtitle="Twenty-seven years of work doesn't fit on a page. Here's a snapshot from the last few quarters — across residential, commercial, and the in-between."
        bgImage={IMG.gallery[0]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" gap={0.06}>
          {PROJECTS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group rounded-xl overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-2xl hover:border-[var(--color-amber)] transition h-full">
                <div className="img-frame aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="eyebrow">{p.type}</div>
                  <div className="mt-2 font-display text-xl font-semibold text-[var(--color-walnut)] leading-snug text-balance">{p.title}</div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">{p.loc}</div>
                  <div className="mt-3 text-xs text-[var(--color-muted-light)] italic">{p.note}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp>
          <div className="mt-14 text-center">
            <p className="text-[var(--color-muted)]">Photos of your project are added with your permission once installed.</p>
            <Link href="/contact/" className="mt-5 btn-amber rounded-md px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              Be Next on the Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </section>

      <CTABlock />
    </>
  );
}
