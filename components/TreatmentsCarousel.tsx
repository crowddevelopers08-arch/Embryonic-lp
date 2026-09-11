"use client";

import { useRef, useState } from "react";

const TREATMENTS = [
  {
    number: "01",
    tag: "IVF",
    title: "In-Vitro Fertilization",
    explanation:
      "Eggs and sperm are fertilized in the lab, and the developed embryo is transferred into the uterus.",
    help: "Couples with blocked tubes, low AMH, age-related infertility, failed IUI, male factor infertility, or unexplained infertility.",
  },
  {
    number: "02",
    tag: "IUI",
    title: "Intra-Uterine Insemination",
    explanation:
      "Processed sperm is placed directly into the uterus around ovulation to support natural fertilization.",
    help: "Couples with mild male infertility, ovulation issues, or unexplained infertility.",
  },
  {
    number: "03",
    tag: "ICSI",
    title: "Intra-Cytoplasmic Sperm Injection",
    explanation:
      "A single sperm is directly injected into an egg during IVF to support fertilization.",
    help: "Couples with low sperm count, poor sperm motility, poor sperm shape, or previous fertilization failure.",
  },
  {
    number: "04",
    tag: "IMSI / PICSI",
    title: "IMSI & PICSI",
    explanation:
      "Advanced sperm selection techniques used to choose better-quality sperm for IVF or ICSI.",
    help: "Couples with male infertility, poor sperm quality, failed IVF/ICSI cycles, or poor embryo development.",
  },
  {
    number: "05",
    tag: "FET",
    title: "Frozen Embryo Transfer",
    explanation:
      "A previously frozen embryo is thawed and transferred into the uterus in a planned cycle.",
    help: "Couples with frozen embryos, delayed transfer plans, or those preparing the uterus before embryo transfer.",
  },
  {
    number: "06",
    tag: "Day 5 / 6",
    title: "Blastocyst Embryo Transfer",
    explanation:
      "An embryo grown to day 5 or day 6 is transferred after advanced lab monitoring.",
    help: "Couples undergoing IVF where extended embryo culture may support better transfer planning.",
  },
  {
    number: "07",
    tag: "LAH",
    title: "Laser-Assisted Hatching",
    explanation:
      "A laser is used to create a small opening in the embryo's outer layer before transfer when advised.",
    help: "Couples with previous IVF failure, advanced maternal age, frozen embryo transfer, or thicker embryo shell concerns.",
  },
  {
    number: "08",
    tag: "PGT-A",
    title: "Genetic Testing",
    explanation:
      "Embryos are screened for chromosomal health before transfer in selected IVF cases.",
    help: "Couples with advanced maternal age, recurrent pregnancy loss, repeated IVF failure, or genetic screening needs.",
  },
];

export default function TreatmentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.33, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  }

  return (
    <section className="mt-10 w-full bg-[#fff8fc] py-[30px]">
      <div className="mx-auto w-[min(100%-32px,1350px)]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-[#2c1d27] sm:text-4xl">
            Advanced Fertility Treatments at{" "}
            <span className="text-[#e8278d]">Embryonic IVF</span>
          </h2>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous treatments"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d9e5] bg-white text-[#e8278d] transition-colors hover:border-[#efb8d3] hover:bg-[#fde7f2]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next treatments"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d9e5] bg-white text-[#e8278d] transition-colors hover:border-[#efb8d3] hover:bg-[#fde7f2]"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar grid auto-cols-[86%] grid-flow-col gap-3.5 overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] sm:auto-cols-[48%] lg:auto-cols-[31.5%]"
        >
          {TREATMENTS.map((t, i) => (
            <div
              key={t.number}
              className={`relative flex flex-col rounded-3xl border border-[#f1d9e5] p-6 [scroll-snap-align:start] sm:p-7 ${
                i % 2 === 0 ? "bg-white" : "bg-[#fffaf5]"
              }`}
            >
              <span className="absolute top-0 left-6 h-[3px] w-16 rounded-full bg-[#e8278d]" />
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fde7f2] text-sm font-extrabold text-[#e8278d]">
                  {t.number}
                </span>
                <span className="rounded-full border border-[#efb8d3] px-3 py-1 text-xs font-bold text-[#e8278d]">
                  {t.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2c1d27]">{t.title}</h3>
              <div className="mt-3 border-t border-[#f1d9e5] pt-3">
                <p className="text-[11px] font-bold tracking-wide text-[#9b8490] uppercase">
                  Explanation
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#74636d]">{t.explanation}</p>
              </div>
              <div className="mt-4 border-t border-[#f1d9e5] pt-4">
                <p className="text-[11px] font-bold tracking-wide text-[#9b8490] uppercase">
                  Who It May Help
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#74636d]">{t.help}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-[#f1d9e5]">
          <div
            className="h-full rounded-full bg-[#e8278d] transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-[#e8278d] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(232,39,141,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#bd1d72]"
          >
            Book Your Free Consultation
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
