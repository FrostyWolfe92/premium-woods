import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";

export const metadata: Metadata = {
  title: "Gallery — Recent Counter & Casework Projects",
  description:
    "A look at recent Premium Woods builds — walnut islands, live edge bars, epoxy pours, commercial casework. Projects across Lincoln, Omaha, Council Bluffs and the surrounding region.",
  alternates: { canonical: "/gallery/" },
};

const PROJECTS = [
  { title: "12-ft Walnut Island Top", loc: "West Omaha, NE", type: "Butcher Block", swatch: "swatch-walnut", note: "Edge-glued, hand-rubbed oil finish" },
  { title: "Live Edge Bar Top", loc: "Haymarket, Lincoln NE", type: "Live Edge Slab", swatch: "swatch-liveedge", note: "Single-slab white oak, satin poly" },
  { title: "Maple Bakery Prep Counter", loc: "Council Bluffs, IA", type: "End-Grain Maple", swatch: "swatch-maple", note: "End-grain, food-safe wax" },
  { title: "Epoxy River Conference Table", loc: "Downtown Lincoln NE", type: "Epoxy + Walnut", swatch: "swatch-epoxy", note: "Tinted blue river, 10ft" },
  { title: "Healthcare Exam Casework", loc: "Lincoln, NE", type: "Plastic Laminate", swatch: "swatch-laminate", note: "Wilsonart, 14 exam rooms" },
  { title: "Cherry Library Built-Ins", loc: "Papillion, NE", type: "Custom Millwork", swatch: "swatch-cherry", note: "Floor-to-ceiling, hand-finished" },
  { title: "Office Reception Desk", loc: "Omaha, NE", type: "Walnut + Laminate", swatch: "swatch-walnut", note: "Curved face, ADA transaction" },
  { title: "School Lab Tops", loc: "Lincoln Public Schools", type: "Laminate Casework", swatch: "swatch-laminate", note: "16 classrooms, summer install" },
  { title: "Red Oak Kitchen", loc: "Bellevue, NE", type: "Butcher Block", swatch: "swatch-oak", note: "Full perimeter + island" },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="A few recent ones."
        highlight="There are a thousand more."
        subtitle="Twenty-seven years of work doesn't fit on a page. Here's a snapshot from the last few quarters — across residential, commercial, and the in-between."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-xl transition">
              <div className={`aspect-[4/3] ${p.swatch} grain group-hover:scale-105 transition-transform duration-500`} />
              <div className="p-5">
                <div className="eyebrow">{p.type}</div>
                <div className="mt-2 font-display text-xl font-semibold text-[var(--color-walnut)] leading-snug">{p.title}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{p.loc}</div>
                <div className="mt-3 text-xs text-[var(--color-muted)] italic">{p.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-muted)]">Photos of your project are added with your permission once installed.</p>
          <Link href="/contact/" className="mt-5 btn-brass rounded-md px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
            Be Next on the Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
