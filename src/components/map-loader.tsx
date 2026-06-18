"use client";

import dynamic from "next/dynamic";

const ServiceMap = dynamic(() => import("./service-map").then((m) => m.ServiceMap), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl overflow-hidden border border-[var(--color-walnut-light)]/30 wood-bg grain h-[520px] flex items-center justify-center text-[var(--color-amber)]/60 text-sm">
      Loading service-area map…
    </div>
  ),
});

export function MapLoader() {
  return <ServiceMap />;
}
