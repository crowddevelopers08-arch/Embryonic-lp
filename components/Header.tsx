import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex w-[min(100%-32px,1350px)] items-center justify-between gap-4 py-6">
        <Image
          src="/images/brand/logo-header.png"
          alt="Embryonic Fertility & IVF Centre"
          width={494}
          height={162}
          priority
          className="h-auto w-[190px] sm:w-[240px]"
        />
        <a
          href="tel:+918818812016"
          aria-label="Call +91 8818812016"
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#e8278d] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#bd1d72] min-[375px]:px-5 sm:text-base"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-none"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="min-[375px]:hidden">Call</span>
          <span className="hidden min-[375px]:inline">+91 8818812016</span>
        </a>
      </div>
    </header>
  );
}
