const FAQS = [
  {
    q: "When should we consult a fertility specialist?",
    a: "You should consider consulting a fertility specialist if you have been trying to conceive for more than 1 year, or for more than 6 months if the woman is above 35.",
  },
  {
    q: "Is IVF the only option for infertility?",
    a: "No. IVF is not required for every couple. Some couples may benefit from fertility assessment, ovulation tracking, IUI, lifestyle guidance, or other treatments depending on the diagnosis.",
  },
  {
    q: "Why is fertility assessment important before IVF?",
    a: "A fertility assessment helps understand the possible reason behind delayed pregnancy, including female factors, male factors, hormonal issues, ovulation concerns, or embryo-related factors.",
  },
  {
    q: "What tests are usually done before fertility treatment?",
    a: "Common tests may include ultrasound scan, AMH test, hormonal evaluation, ovulation tracking, semen analysis, and a detailed medical history review for both partners.",
  },
  {
    q: "Can PCOS or PCOD affect pregnancy?",
    a: "Yes. PCOS or PCOD can affect ovulation and cycle regularity, which may delay pregnancy. With proper evaluation, the doctor can suggest the right fertility approach.",
  },
  {
    q: "Can male infertility be treated?",
    a: "Many male fertility concerns can be evaluated and managed depending on semen analysis and the underlying cause. In some cases, advanced treatments like ICSI may be advised.",
  },
  {
    q: "What if our previous IVF cycle failed?",
    a: "A failed IVF cycle should be reviewed carefully. The doctor may assess egg quality, sperm quality, embryo development, uterus health, and previous treatment protocols before planning the next step.",
  },
  {
    q: "Does age affect fertility treatment success?",
    a: "Yes. Age can affect egg quality, ovarian reserve, and overall fertility potential, especially after 35. Early fertility assessment can help with better treatment planning.",
  },
  {
    q: "What is the cost of IVF treatment at Embryonic Fertility & IVF Center?",
    a: "IVF packages may start from ₹80,000–₹1,20,000, depending on the treatment plan, medicines, investigations, and any advanced procedures required.",
  },
  {
    q: "Is 0% EMI available for IVF treatment?",
    a: "Yes, 0% EMI options may be available for eligible couples. The clinic team can explain the payment options during consultation.",
  },
  {
    q: "How long does IVF treatment usually take?",
    a: "A typical IVF cycle may take a few weeks, but the timeline can vary based on the patient's condition, scan monitoring, treatment protocol, and embryo transfer plan.",
  },
  {
    q: "How do we book a free fertility assessment?",
    a: "You can fill out the form on this page or speak to the fertility team to book your free fertility assessment, consultation, or fertility camp registration.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-white py-[30px]">
      <div className="mx-auto w-[min(100%-32px,1350px)] text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#e8278d]/40" />
          <span className="text-[11px] font-bold tracking-[0.14em] text-[#e8278d] uppercase">
            FAQ&apos;s
          </span>
          <span className="h-px w-8 bg-[#e8278d]/40" />
        </div>
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-[#2c1d27] sm:text-4xl">
          Questions Couples Commonly Ask Before Starting{" "}
          <span className="text-[#e8278d]">Fertility Treatment</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left lg:grid-cols-2">
          {FAQS.map((faq, i) => (
            <details
              key={faq.q}
              open={i === 0}
              className="group rounded-2xl border border-[#f1d9e5] bg-white px-5 py-4 open:border-[#efb8d3] open:bg-[#fde7f2]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#2c1d27] sm:text-base">
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-9 flex-none items-center justify-center rounded-full bg-[#fde7f2] text-xs font-extrabold text-[#e8278d]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[#e8278d]/40 text-[#e8278d] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pl-12 text-sm leading-relaxed text-[#2c1d27]/70">
                {faq.a}
              </p>
            </details>
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
