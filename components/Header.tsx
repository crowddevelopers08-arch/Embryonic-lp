import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex w-[min(100%-32px,1350px)] items-center justify-between gap-4 py-6">
        <Image
          src="https://embryonicfertilityivf.com/wp-content/uploads/2026/06/image-removebg-preview-15.png"
          alt="Embryonic Fertility & IVF Centre"
          width={494}
          height={162}
          priority
          className="h-auto w-[190px] sm:w-[240px]"
        />
        <a
          href="tel:+918818812016"
          className="whitespace-nowrap rounded-full bg-[#e8278d] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#bd1d72] sm:text-base"
        >
          +91 8818812016
        </a>
      </div>
    </header>
  );
}
