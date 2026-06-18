import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-[var(--color-walnut)] text-[var(--color-bone)] mt-32">
      <div className="brass-line" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="font-display text-2xl font-semibold">Premium Woods</div>
          <div className="eyebrow-light mt-1">Est. {BUSINESS.foundingYear}</div>
          <p className="mt-4 text-sm text-[var(--color-oat)] leading-relaxed">
            Family-owned custom counter and casework shop. {BUSINESS.yearsInBusiness}+ years building precise, on-time work for contractors and businesses across the Midwest.
          </p>
          <p className="mt-3 text-xs text-[var(--color-oat)]/60">{BUSINESS.license}</p>
        </div>

        <div>
          <div className="eyebrow-light">Countertops</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-oat)]">
            <li><Link href="/countertops/butcher-block/" className="hover:text-[var(--color-brass)]">Butcher Block</Link></li>
            <li><Link href="/countertops/live-edge/" className="hover:text-[var(--color-brass)]">Live Edge & Slab</Link></li>
            <li><Link href="/countertops/epoxy/" className="hover:text-[var(--color-brass)]">Epoxy Resin</Link></li>
            <li><Link href="/countertops/laminate/" className="hover:text-[var(--color-brass)]">Plastic Laminate</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow-light">Service Area</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-oat)]">
            <li><Link href="/locations/lincoln-ne/" className="hover:text-[var(--color-brass)]">Lincoln, NE</Link></li>
            <li><Link href="/locations/omaha-ne/" className="hover:text-[var(--color-brass)]">Omaha, NE</Link></li>
            <li><Link href="/locations/council-bluffs-ia/" className="hover:text-[var(--color-brass)]">Council Bluffs, IA</Link></li>
            <li><Link href="/commercial-casework/" className="hover:text-[var(--color-brass)]">Commercial Casework</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow-light">Contact</div>
          <ul className="mt-3 space-y-3 text-sm text-[var(--color-oat)]">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-[var(--color-brass)]" />
              <a href={BUSINESS.phoneHref} className="hover:text-[var(--color-brass)]">{BUSINESS.phone}</a>
            </li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-[var(--color-brass)]" />
              <a href={BUSINESS.emailHref} className="hover:text-[var(--color-brass)] break-all">{BUSINESS.email}</a>
            </li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[var(--color-brass)]" />
              <span>{BUSINESS.address.street}<br/>{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}</span>
            </li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-[var(--color-brass)]" />
              <span>{BUSINESS.hours.weekdays}<br/>{BUSINESS.hours.weekend}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-walnut-light)]/40">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between text-xs text-[var(--color-oat)]/60">
          <div>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</div>
          <div>Family-owned · BBB {BUSINESS.bbb.rating} · {BUSINESS.yearsInBusiness} years in business</div>
        </div>
      </div>
    </footer>
  );
}
