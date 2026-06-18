import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTABlock } from "@/components/cta-block";
import { BUSINESS } from "@/lib/business";
import { Award, Building2, Users, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Family-Owned Counter & Casework Shop in Lincoln, NE",
  description:
    `Premium Woods LLC has been a family-owned custom counter and commercial casework shop in Lincoln, Nebraska since 1999. Robert Long, founder. BBB A+ rated. ${BUSINESS.yearsInBusiness} years of CNC-precise work delivered on time.`,
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={`Family-Owned · Est. ${BUSINESS.foundingYear}`}
        title={`${BUSINESS.yearsInBusiness} years of building it`}
        highlight="the same way."
        subtitle={`Robert Long started Premium Woods in Lincoln, Nebraska in ${BUSINESS.foundingYear}. The same family still runs the shop. The same phone still rings at the same desk. The same commitment — on-time, accurate, delivered — still goes out the door on every job.`}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="eyebrow">The Story</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--color-walnut)]">
            A shop, not a brand.
          </h2>
          <div className="mt-6 space-y-5 text-[var(--color-muted)] text-lg leading-relaxed">
            <p>
              When Robert Long founded Premium Woods in 1999, the goal was simple: make custom counters and commercial casework that contractors, designers, and homeowners could actually count on. No call center. No sub-contracted install crew. No mystery about who was doing the work.
            </p>
            <p>
              Twenty-seven years later, that hasn't changed. Same family, same shop on Cornhusker Highway, same team finishing the wood. We've added CNC machines and modernized the office, but the build philosophy is the same one Rob started with: measure twice, deliver once, on the day we said.
            </p>
            <p>
              We're not the biggest cabinet shop in Lincoln. We don't want to be. We want to be the one your GC calls when the schedule's tight and the spec is custom — because we'll quote it honestly, build it right, and bring it in on the day.
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-line)] bg-[var(--color-cream)] p-7">
            <div className="eyebrow">Shop Card</div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--color-walnut)]">Premium Woods LLC</h3>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between border-b border-[var(--color-line)] pb-2">
                <dt className="text-[var(--color-muted)]">Founder</dt>
                <dd className="font-medium text-[var(--color-walnut)]">{BUSINESS.founder}</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-line)] pb-2">
                <dt className="text-[var(--color-muted)]">Established</dt>
                <dd className="font-medium text-[var(--color-walnut)]">May {BUSINESS.foundingYear}</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-line)] pb-2">
                <dt className="text-[var(--color-muted)]">Shop Location</dt>
                <dd className="font-medium text-[var(--color-walnut)] text-right">{BUSINESS.address.street}<br/>{BUSINESS.address.city}, {BUSINESS.address.region}</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-line)] pb-2">
                <dt className="text-[var(--color-muted)]">License</dt>
                <dd className="font-medium text-[var(--color-walnut)]">{BUSINESS.license}</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-line)] pb-2">
                <dt className="text-[var(--color-muted)]">BBB Rating</dt>
                <dd className="font-medium text-[var(--color-walnut)]">{BUSINESS.bbb.rating}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--color-muted)]">Service Area</dt>
                <dd className="font-medium text-[var(--color-walnut)]">NE / W. IA / N. KS</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "BBB A+ Rated" },
              { icon: Users, label: "Family-Owned" },
              { icon: Building2, label: "AWI-Grade Casework" },
              { icon: Truck, label: "We Deliver" },
            ].map((b) => (
              <div key={b.label} className="rounded-lg border border-[var(--color-line)] bg-white p-4 flex items-center gap-3">
                <b.icon className="w-5 h-5 text-[var(--color-amber-deep)]" />
                <div className="text-sm font-medium text-[var(--color-walnut)]">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
