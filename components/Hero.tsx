import Image from "next/image";
import ConsultationForm from "./ConsultationForm";

const AVATARS = [1, 2, 3, 4, 5];

export default function Hero() {
  return (
    <section
      id="book"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#fffefe_0%,#fff7fb_58%,#ffffff_100%)] py-9 sm:py-14 lg:py-14"
    >
      <div
        className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,39,141,0.1),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 left-[56%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,39,141,0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-[min(100%-32px,1350px)] grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:grid-cols-[1.08fr_0.68fr_0.94fr]">
        <div className="min-w-0 max-w-[570px]">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8278d]/22 bg-[#e8278d]/8 px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-[#e8278d] uppercase before:h-2 before:w-2 before:rounded-full before:bg-[#e8278d] before:shadow-[0_0_0_5px_rgba(232,39,141,0.14)]">
            Embryonic Fertility &amp; IVF Center
          </span>

          <h1 className="max-w-[570px] text-[42px] leading-[1.02] font-extrabold tracking-[-0.03em] text-[#102c26] sm:text-[56px] lg:text-[64px] xl:text-[74px]">
            Where hope meets expert{" "}
            <span className="text-[#e8278d]">fertility care</span>
          </h1>

          <p className="mt-5 max-w-[545px] text-base leading-[1.68] font-medium text-[#102c26]/76 sm:text-lg">
            IVF guidance designed around your journey, with clear counselling,
            personalised treatment planning, and advanced fertility support.
          </p>

          <div className="mt-7 flex items-center gap-3.5">
            <div className="flex items-center pl-0.5">
              {AVATARS.map((n) => (
                <Image
                  key={n}
                  src={`/images/hero/avatar-${n}.png`}
                  alt=""
                  width={44}
                  height={44}
                  className="-ml-2.5 h-11 w-11 flex-none rounded-full border-0 bg-white object-cover shadow-[0_10px_22px_rgba(16,44,38,0.14)] first:ml-0"
                />
              ))}
            </div>
            <p className="text-[13.5px] leading-[1.45] font-semibold text-[#102c26]/76">
              <strong className="block text-[15px] font-extrabold text-[#102c26]">
                15,000+ successful pregnancies
              </strong>
              Guided by 16+ years of fertility care experience.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 items-end justify-center">
          <div className="relative flex h-[385px] w-full max-w-[350px] items-end justify-center overflow-hidden rounded-[999px_999px_20px_20px] border border-[#e8278d]/14 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.96),transparent_38%),linear-gradient(180deg,rgba(232,39,141,0.07),rgba(232,39,141,0.16))] px-2 pt-4.5 shadow-[0_24px_70px_rgba(28,56,53,0.11)] lg:h-[486px] lg:max-w-[330px]">
            <span
              className="absolute top-6 right-4 h-16 w-16 rounded-full bg-[#e8278d]/15"
              aria-hidden
            />
            <Image
              src="/images/hero/hero-patient.png"
              alt="Happy patient at Embryonic Fertility & IVF Centre"
              width={520}
              height={640}
              priority
              className="relative z-10 h-auto max-h-full w-[115%] max-w-none object-contain"
            />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-2 xl:col-span-1">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
