import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="charcoal-bg grain text-[var(--color-bone)] mt-32 relative">
      <div className="amber-line" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <img
            src="/logo.png"
            alt="Premium Woods LLC"
            className="h-14 w-auto"
            style={{ filter: "invert(1) brightness(1.15)" }}
          />
          <p className="mt-5 text-[15px] text-[var(--color-oat)]/85 leading-relaxed max-w-sm">
            Family-owned custom counter & casework shop. {BUSINESS.yearsInBusiness}+ years of precise, on-time work for contractors and businesses across Nebraska, Western Iowa, and Northern Kansas.
          </p>
          <p className="mt-4 text-xs text-[var(--color-oat)]/55">{BUSINESS.license}</p>
        </div>

        <div className="md:col-span-2">
          <div className="eyebrow-light">Countertops</div>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-oat)]/85">
            <li><Link href="/countertops/butcher-block/" className="hover:text-[var(--color-amber)] transition">Butcher Block</Link></li>
            <li><Link href="/countertops/live-edge/" className="hover:text-[var(--color-amber)] transition">Live Edge & Slab</Link></li>
            <li><Link href="/countertops/epoxy/" className="hover:text-[var(--color-amber)] transition">Epoxy Resin</Link></li>
            <li><Link href="/countertops/laminate/" className="hover:text-[var(--color-amber)] transition">Plastic Laminate</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow-light">Service Area</div>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-oat)]/85">
            <li><Link href="/locations/lincoln-ne/" className="hover:text-[var(--color-amber)] transition">Lincoln, NE</Link></li>
            <li><Link href="/locations/omaha-ne/" className="hover:text-[var(--color-amber)] transition">Omaha, NE</Link></li>
            <li><Link href="/locations/council-bluffs-ia/" className="hover:text-[var(--color-amber)] transition">Council Bluffs, IA</Link></li>
            <li><Link href="/commercial-casework/" className="hover:text-[var(--color-amber)] transition">Commercial Casework</Link></li>
            <li><Link href="/gallery/" className="hover:text-[var(--color-amber)] transition">Project Gallery</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow-light">Contact</div>
          <ul className="mt-4 space-y-3.5 text-sm text-[var(--color-oat)]/85">
            <li className="flex items-start gap-2.5"><Phone className="w-4 h-4 mt-0.5 text-[var(--color-amber)] flex-shrink-0" />
              <a href={BUSINESS.phoneHref} className="hover:text-[var(--color-amber)] font-semibold">{BUSINESS.phone}</a>
            </li>
            <li className="flex items-start gap-2.5"><Mail className="w-4 h-4 mt-0.5 text-[var(--color-amber)] flex-shrink-0" />
              <a href={BUSINESS.emailHref} className="hover:text-[var(--color-amber)] break-all">{BUSINESS.email}</a>
            </li>
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-[var(--color-amber)] flex-shrink-0" />
              <span>{BUSINESS.address.street}<br/>{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}</span>
            </li>
            <li className="flex items-start gap-2.5"><Clock className="w-4 h-4 mt-0.5 text-[var(--color-amber)] flex-shrink-0" />
              <span>{BUSINESS.hours.weekdays}<br/><span className="opacity-60">{BUSINESS.hours.weekend}</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-walnut-light)]/25">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-[var(--color-oat)]/55">
          <div>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</div>
          <div>Family-owned · BBB {BUSINESS.bbb.rating} · {BUSINESS.yearsInBusiness} years in business</div>
        </div>
      </div>
    </footer>
  );
}
