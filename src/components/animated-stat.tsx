"use client";

import CountUp from "react-countup";

export function AnimatedStat({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2.2,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}) {
  return (
    <div>
      <div className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-amber)] tabular-nums">
        <CountUp end={end} suffix={suffix} prefix={prefix} duration={duration} enableScrollSpy scrollSpyOnce />
      </div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-oat)]/70 mt-1.5">{label}</div>
    </div>
  );
}
