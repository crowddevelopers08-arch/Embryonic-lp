const ITEMS = [
  {
    label: "Transparent Pricing",
    icon: (
      <>
        <path d="M40 16a24 24 0 1 1-22 15" />
        <path d="M12 14v14h14" />
        <line x1="28" y1="38" x2="52" y2="38" />
        <line x1="28" y1="48" x2="46" y2="48" />
      </>
    ),
  },
  {
    label: "Personalised Treatment Plans",
    icon: (
      <>
        <rect x="20" y="14" width="40" height="52" rx="4" />
        <line x1="28" y1="28" x2="52" y2="28" />
        <line x1="28" y1="38" x2="52" y2="38" />
        <line x1="28" y1="48" x2="44" y2="48" />
      </>
    ),
  },
  {
    label: "In-House Embryology Team",
    icon: (
      <>
        <path d="M32 14v18l-14 26a4 4 0 0 0 4 6h36a4 4 0 0 0 4-6L48 32V14" />
        <line x1="28" y1="14" x2="52" y2="14" />
      </>
    ),
  },
  {
    label: "Advanced IVF Technology",
    icon: (
      <>
        <rect x="16" y="18" width="48" height="32" rx="4" />
        <circle cx="40" cy="34" r="6" />
        <line x1="30" y1="58" x2="50" y2="58" />
        <line x1="40" y1="50" x2="40" y2="58" />
      </>
    ),
  },
  {
    label: "Guidance Before IVF",
    icon: (
      <>
        <circle cx="40" cy="40" r="26" />
        <path d="M32 32a8 8 0 1 1 12 7c-3 2-4 4-4 7" />
        <circle cx="40" cy="54" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Affordability Support",
    icon: (
      <>
        <path d="M14 16h6l6 30a4 4 0 0 0 4 3h22a4 4 0 0 0 4-3l4-18H26" />
        <circle cx="32" cy="60" r="3.5" />
        <circle cx="52" cy="60" r="3.5" />
      </>
    ),
  },
  {
    label: "Couple-Focused Care",
    icon: (
      <>
        <circle cx="30" cy="26" r="9" />
        <circle cx="50" cy="26" r="9" />
        <path d="M14 62c0-11 8-20 16-20h0" />
        <path d="M66 62c0-11-8-20-16-20h0" />
        <path d="M30 42c4 0 6 3 10 3s6-3 10-3" />
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-[30px]">
      <div className="mx-auto w-[min(100%-32px,1350px)] text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#e8278d]/40" />
          <span className="text-[11px] font-bold tracking-[0.14em] text-[#e8278d] uppercase">
            Why Choose Us
          </span>
          <span className="h-px w-8 bg-[#e8278d]/40" />
        </div>
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-[#2c1d27] sm:text-4xl">
          Why Patients Choose{" "}
          <span className="text-[#e8278d]">Embryonic Fertility &amp; IVF Center</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#f1d9e5] px-3 py-6 text-center transition-colors hover:border-[#efb8d3]"
            >
              <svg
                viewBox="0 0 80 80"
                className="h-12 w-12 text-[#e8278d]"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
              <p className="text-sm font-bold text-[#2c1d27]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
