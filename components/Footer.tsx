import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-[min(100%-32px,1350px)] py-10 text-center">
        <Image
          src="/images/brand/logo-footer.png"
          alt="Embryonic Fertility & IVF Centre"
          width={494}
          height={162}
          className="mx-auto h-auto w-[200px] sm:w-[230px]"
        />

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            href="tel:+918818812016"
            className="flex items-center gap-2 text-sm font-semibold text-[#2c1d27] transition-colors hover:text-[#e8278d]"
          >
            <span className="text-[#e8278d]">📞</span>
            +91 8818812016
          </a>
          <span className="hidden text-[#2c1d27]/30 sm:inline">|</span>
          <a
            href="tel:+918818812017"
            className="flex items-center gap-2 text-sm font-semibold text-[#2c1d27] transition-colors hover:text-[#e8278d]"
          >
            <span className="text-[#e8278d]">📞</span>
            +91 8818812017
          </a>
        </div>

        <div className="mx-auto mt-8 h-[400px] w-full max-w-[950px] overflow-hidden rounded- border border-[#f1d9e5]">
          <iframe
            title="Embryonic Fertility and IVF Centre location"
            src="https://www.google.com/maps?q=Embryonic+Fertility+and+IVF+Centre+Pune&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-[#f1d9e5] py-6">
        <p className="text-center text-xs font-medium text-[#2c1d27]/60">
          © Copyright Embryonic Fertility &amp; IVF Centre . All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
