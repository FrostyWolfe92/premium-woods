import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-paper)]/85 border-b border-[var(--color-line-soft)]">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Premium Woods LLC — Custom Casework, Lincoln NE"
            width={140}
            height={50}
            className="h-11 w-auto"
            loading="eager"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px] font-semibold tracking-wide text-[var(--color-ink)]">
          <Link href="/countertops/" className="hover:text-[var(--color-amber-deep)] transition">Countertops</Link>
          <Link href="/commercial-casework/" className="hover:text-[var(--color-amber-deep)] transition">Casework</Link>
          <Link href="/gallery/" className="hover:text-[var(--color-amber-deep)] transition">Gallery</Link>
          <Link href="/about/" className="hover:text-[var(--color-amber-deep)] transition">About</Link>
          <Link href="/contact/" className="hover:text-[var(--color-amber-deep)] transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-[var(--color-walnut)] hover:text-[var(--color-amber-deep)] transition"
          >
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
          <Link
            href="/contact/"
            className="btn-amber rounded-md px-4 py-2.5 text-[13px]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
