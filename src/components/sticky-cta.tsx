import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 charcoal-bg grain border-t border-[var(--color-amber)]/30 px-4 py-3 flex gap-2">
      <a
        href={BUSINESS.phoneHref}
        className="btn-ghost rounded-md px-4 py-2.5 text-sm flex-1 flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
      <Link
        href="/contact/"
        className="btn-amber rounded-md px-4 py-2.5 text-sm flex-[1.4] flex items-center justify-center"
      >
        Get a Quote
      </Link>
    </div>
  );
}
