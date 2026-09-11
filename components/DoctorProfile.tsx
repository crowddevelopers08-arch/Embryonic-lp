import Image from "next/image";

const AWARDS = [
  "Embryology Excellence Award",
  "Young Achievers Award in Embryology",
  "Research presented at international conferences (Istanbul, Turkey)",
  "Member of prestigious societies: ESHRE, IFS, ISAR, ACE",
];

export default function DoctorProfile() {
  return (
    <section className="mt-[30px] w-full bg-white py-[30px]">
      <div className="mx-auto w-[min(100%-32px,1350px)]">
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#e8278d]/40" />
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#e8278d] uppercase">
              About The Doctor
            </span>
            <span className="h-px w-8 bg-[#e8278d]/40" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#2c1d27] sm:text-4xl">
            Meet Your <span className="text-[#e8278d]">Fertility Expert</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 rounded-[32px] border border-[#fde7f2] bg-[#fff8fc] p-6 sm:p-10 lg:grid-cols-[0.4fr_1fr] lg:p-14">
          <div className="relative mx-auto w-full max-w-[380px]">
            <span className="absolute top-0 left-0 z-10 h-full w-1.5 rounded-l-2xl bg-[#e8278d]" />
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(121,62,93,0.12)]">
              <Image
                src="https://embryonicfertility.com/wp-content/uploads/2025/07/Untitled-design-7-1.webp"
                alt="Dr. Nikhil Gosavi"
                width={420}
                height={520}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold tracking-wide text-[#2c1d27] sm:text-2xl">
              DR. NIKHIL GOSAVI
            </h3>
            <span className="mt-3 inline-block rounded-full border border-[#e8278d]/35 px-4 py-1.5 text-xs font-bold text-[#e8278d]">
              IVF &amp; Embryology Specialist
            </span>

            <p className="mt-5 text-sm leading-relaxed text-[#6f5f68] sm:text-base">
              Dr. Nikhil Gosavi brings strong expertise in fertility treatment,
              IVF planning, embryology, embryo development, IVF
              troubleshooting, and advanced reproductive techniques. His
              approach is rooted in careful diagnosis, transparent
              counselling, and personalised treatment planning. For couples,
              this means every step is explained clearly — from fertility
              assessment and reports to treatment options, embryo
              development, and transfer planning. At Embryonic Fertility &amp;
              IVF Center, Dr. Nikhil Gosavi and the team focus on helping
              couples understand their fertility condition before
              recommending IVF or advanced treatment.
            </p>

            <div className="mt-6 rounded-2xl border border-[#fde7f2] bg-white p-5">
              <p className="text-sm font-bold text-[#2c1d27]">
                Awards &amp; Achievements:
              </p>
              <ul className="mt-3 space-y-2">
                {AWARDS.map((award) => (
                  <li key={award} className="flex items-start gap-2.5 text-sm text-[#6f5f68]">
                    <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#fde7f2] text-[10px] text-[#e8278d]">
                      ✓
                    </span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-[#e8278d] bg-white p-5 text-sm leading-relaxed font-medium text-[#2c1d27] sm:text-base">
              &ldquo;I&apos;m committed to providing transparent, affordable,
              and compassionate fertility care that puts you first, every
              step of the way.&rdquo;
            </blockquote>

            <a
              href="#book"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#e8278d] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(232,39,141,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#bd1d72]"
            >
              Book Your Free Fertility Assessment
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
