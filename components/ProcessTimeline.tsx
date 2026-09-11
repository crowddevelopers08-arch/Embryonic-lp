import Image from "next/image";

const STEPS = [
  {
    title: "Consultation & Tests",
    icon: "https://embryonicfertility.com/wp-content/uploads/2025/07/Consultation-Tests.webp",
    description:
      "We begin with an in-depth consultation and fertility tests to understand your specific challenges and plan your personalized treatment.",
  },
  {
    title: "Ovarian Stimulation & Egg Retrieval",
    icon: "https://embryonicfertility.com/wp-content/uploads/2025/07/Ovarian-Stimulation-Egg-Retrieval.webp",
    description:
      "Fertility medications help stimulate the ovaries. Once mature, eggs are collected through a safe, minimally invasive procedure.",
  },
  {
    title: "Fertilization in the Lab",
    icon: "https://embryonicfertility.com/wp-content/uploads/2025/07/Fertilization-in-the-Lab.webp",
    description:
      "Collected eggs are combined with sperm in our advanced lab. Once fertilized, the embryos are carefully monitored and selected.",
  },
  {
    title: "Embryo Transfer",
    icon: "https://embryonicfertility.com/wp-content/uploads/2025/07/Embryo-Transfer.webp",
    description:
      "A healthy embryo is gently transferred into the uterus. The procedure is quick, painless, and does not require anesthesia.",
  },
  {
    title: "Pregnancy Test & Follow-Up",
    icon: "https://embryonicfertility.com/wp-content/uploads/2025/07/Pregnancy-Test-Follow-Up.webp",
    description:
      "After about 12–14 days, we do a pregnancy test. If positive, we continue with prenatal care and support your journey every step of the way.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="mt-[40px] w-full bg-white py-[10px]">
      <div className="mx-auto w-[min(100%-32px,1350px)] text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl">
          How IVF Works At{" "}
          <span className="text-[#e8278d]">Embryonic Fertility IVF Centre</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#111111]/76">
          Starting your IVF journey can feel overwhelming, but we make it
          simple, transparent, and personalized at every step. Here&apos;s how
          our IVF process works:
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-center overflow-hidden rounded-2xl border border-[#e8278d]/30 bg-white text-center"
            >
              <div className="w-full bg-[#e8278d] py-3">
                <span className="text-sm font-extrabold tracking-[0.08em] text-white uppercase">
                  Step {i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center px-5 py-7">
                <div className="flex h-23 w-23 items-center justify-center rounded-full border border-[#e8278d]/35 bg-white">
                  <Image src={step.icon} alt={step.title} width={40} height={40} className="h-16 w-16" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#111111]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#111111]/76">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-[#e8278d] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(232,39,141,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#bd1d72]"
          >
            Book Your Free Fertility Assessment
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
