"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 16, suffix: "+", label: "Years" },
  { target: 15000, suffix: "+", label: "Successful Pregnancies" },
  { target: 10, suffix: "", label: "Specialities" },
  { target: 4.9, suffix: "/5", label: "Google Ratings", decimals: 1, star: true },
];

function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-IN");
}

function StatCard({
  target,
  suffix,
  label,
  decimals = 0,
  star = false,
}: (typeof STATS)[number] & { decimals?: number; star?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = useCountUp(target, decimals, active);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border border-[#f1d9e5]/70 bg-white px-4 py-6 text-center shadow-[0_14px_34px_rgba(16,44,38,0.06)] sm:px-6 sm:py-7"
    >
      <span className="absolute top-0 left-1/2 h-1 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8278d]" />
      <div className="text-2xl font-extrabold text-[#102c26] sm:text-3xl lg:text-4xl">
        {display}
        <span className="text-[#e8278d]">{suffix}</span>
      </div>
      <div className="mt-1.5 text-xs font-semibold text-[#102c26]/60 sm:text-sm">
        {label} {star && <span className="text-[#e8278d]">★</span>}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="w-full bg-white py-[30px]">
      <div className="mx-auto flex w-[min(100%-32px,1350px)] flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="text-left">
          <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.08em] text-[#e8278d] uppercase before:h-1.5 before:w-1.5 before:flex-none before:rounded-full before:bg-[#e8278d]">
            Trusted Fertility Care
          </span>
          <h2 className="max-w-xs text-3xl leading-tight font-extrabold tracking-tight text-[#102c26] sm:max-w-sm sm:text-4xl">
            Proven Success in Fertility Care
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:w-auto lg:min-w-[640px]">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
