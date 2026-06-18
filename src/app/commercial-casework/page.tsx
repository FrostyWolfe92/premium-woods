import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { CheckCircle2, Building2, Stethoscope, GraduationCap, Store, Briefcase, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Casework & Cabinetry — Nebraska, Iowa, Kansas",
  description:
    "Commercial casework for offices, healthcare, education, retail, and government. AWI Premium grade available. Reception desks, breakrooms, exam casework, retail fixtures. Fabricated in Lincoln, NE — delivered installed across the Midwest.",
  alternates: { canonical: "/commercial-casework/" },
};

const SECTORS = [
  { icon: Briefcase, name: "Offices & Coworking", body: "Reception desks, workstation millwork, executive offices, breakrooms, conference rooms." },
  { icon: Stethoscope, name: "Healthcare", body: "Exam room casework, nurse stations, pharmacy fixtures, ADA-compliant reception transactions." },
  { icon: GraduationCap, name: "Education", body: "Lab tops, classroom casework, library fixtures, administrative offices. K-12 and higher ed." },
  { icon: Store, name: "Retail", body: "Cash wraps, display fixtures, back-of-house casework, custom branded millwork." },
  { icon: Building2, name: "Multifamily", body: "Amenity space casework, leasing office fitouts, clubhouse bars, mailroom millwork." },
  { icon: Landmark, name: "Municipal & Public", body: "Public counters, courtroom millwork, public-safety casework. Bid-spec ready." },
];

export default function CommercialCasework() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Casework"
        title="Casework that meets spec,"
        highlight="hits dates, and lasts."
        subtitle="Reception desks, exam rooms, breakrooms, classrooms, retail fixtures, ADA millwork — built to AWI standards in our Lincoln shop and delivered installed across Nebraska, Iowa, and Kansas."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="eyebrow">Sectors We Serve</div>
            <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
              Six industries. <em className="text-[var(--color-amber-deep)] not-italic">One shop floor.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[var(--color-muted)] leading-relaxed">
              We've been a quiet commercial casework supplier for Midwest GCs since 1999. Most of our work goes into projects you've driven past without noticing — exactly how a good casework shop should operate.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s) => (
            <div key={s.name} className="rounded-xl border border-[var(--color-line)] bg-white p-6 hover:border-[var(--color-amber)] transition">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-walnut)] text-[var(--color-amber)] flex items-center justify-center">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="mt-4 font-display text-xl font-semibold text-[var(--color-walnut)]">{s.name}</div>
              <div className="mt-2 text-[var(--color-muted)] text-sm leading-relaxed">{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-walnut)] text-[var(--color-bone)] grain">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="eyebrow-light">For GCs & Designers</div>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
              The casework sub <em className="text-[var(--color-amber)] not-italic">your schedule needs.</em>
            </h2>
            <p className="mt-5 text-[var(--color-oat)] text-lg leading-relaxed">
              We work directly off your specs and drawings, hold our quoted dates, and don't bring drama to your job-site. If the architect's drawings have a problem, we'll RFI it — not eat the cost and miss the milestone.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "AWI Premium and Custom grade available",
              "Plastic-laminate, wood-veneer, and solid-wood faces",
              "Field-verified dimensions before fabrication",
              "Direct shop delivery and install — one trade, one POC",
              "BIM-compatible drawing exchange",
              "Bonded and insured for commercial bid work",
              "Lincoln, NE-based — short haul to most Midwest job-sites",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-amber)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-oat)]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline={<>Send the drawings. We&apos;ll send a <span className="text-[var(--color-amber)]">real bid.</span></>}
        sub="Plans, addenda, RFIs welcome. Direct line to estimating, no portal hoops."
      />
    </>
  );
}
