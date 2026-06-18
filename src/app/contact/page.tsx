import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BUSINESS } from "@/lib/business";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Get a Quote — Premium Woods LLC",
  description:
    `Get a quote on custom countertops or commercial casework. Call ${BUSINESS.phone} or email ${BUSINESS.email}. Lincoln, NE shop serving Nebraska, Western Iowa, and Northern Kansas.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Send the details. We'll send"
        highlight="a real quote in 24 hours."
        subtitle="Drawings, sketches, photos, dimensions on a napkin — whatever you've got. We'll come back with species or material recommendations, lead time, and a real number."
        showCta={false}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <form
            className="rounded-xl border border-[var(--color-line)] bg-white p-7 shadow-sm space-y-5"
            action={`mailto:${BUSINESS.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Name</label>
                <input required type="text" name="name" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Company (optional)</label>
                <input type="text" name="company" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Email</label>
                <input required type="email" name="email" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Phone</label>
                <input type="tel" name="phone" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Project Type</label>
              <select name="project" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]">
                <option>Butcher block countertop</option>
                <option>Live edge / slab top</option>
                <option>Epoxy resin top</option>
                <option>Plastic laminate counter</option>
                <option>Commercial casework</option>
                <option>Custom millwork — other</option>
                <option>Not sure — help me choose</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">City / Region</label>
                <input type="text" name="location" placeholder="e.g. Omaha, NE" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Target Date (optional)</label>
                <input type="text" name="date" placeholder="e.g. End of Q3" className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brass-deep)]">Project Details</label>
              <textarea required name="details" rows={5} placeholder="Dimensions, material preference, edge profile, finish, any other context. The more you can share, the better the quote." className="mt-1.5 w-full rounded-md border border-[var(--color-line)] px-4 py-2.5 focus:outline-none focus:border-[var(--color-brass)] bg-[var(--color-bone)]" />
            </div>

            <button type="submit" className="btn-brass rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
              Send Quote Request <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-[var(--color-muted)]">
              Your email client will open with the details ready to send. Prefer to talk? Call <a className="text-[var(--color-brass-deep)] font-semibold" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
            </p>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl bg-[var(--color-walnut)] text-[var(--color-bone)] p-7 grain">
            <div className="eyebrow-light">The Shop</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">Premium Woods LLC</h3>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-brass)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70">Phone</div>
                  <a href={BUSINESS.phoneHref} className="text-lg font-semibold hover:text-[var(--color-brass)]">{BUSINESS.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-brass)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70">Email</div>
                  <a href={BUSINESS.emailHref} className="text-sm hover:text-[var(--color-brass)] break-all">{BUSINESS.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-brass)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70">Shop</div>
                  <div>{BUSINESS.address.street}<br/>{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-brass)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70">Hours</div>
                  <div>{BUSINESS.hours.weekdays}<br/><span className="text-[var(--color-oat)]/70">{BUSINESS.hours.weekend}</span></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
            <div className="eyebrow">For Contractors & Designers</div>
            <p className="mt-3 text-[var(--color-ink)] text-sm leading-relaxed">
              Send plans, RFIs, and addenda directly to estimating. No portals, no submission forms — just email or call. We'll respond same-day during business hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
