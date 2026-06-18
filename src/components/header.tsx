import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bone)]/90 border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm wood-bg grain relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-brass)] font-display font-bold text-lg">
              P
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">Premium Woods</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-brass-deep)] -mt-0.5">
              Lincoln, NE · Est. 1999
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-ink)]">
          <Link href="/countertops/" className="hover:text-[var(--color-brass-deep)] transition">Countertops</Link>
          <Link href="/commercial-casework/" className="hover:text-[var(--color-brass-deep)] transition">Casework</Link>
          <Link href="/gallery/" className="hover:text-[var(--color-brass-deep)] transition">Gallery</Link>
          <Link href="/about/" className="hover:text-[var(--color-brass-deep)] transition">About</Link>
          <Link href="/contact/" className="hover:text-[var(--color-brass-deep)] transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[var(--color-walnut)] hover:text-[var(--color-brass-deep)] transition"
          >
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
          <Link
            href="/contact/"
            className="btn-brass rounded-md px-4 py-2 text-sm"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
