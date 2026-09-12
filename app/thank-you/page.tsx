import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You | Embryonic Fertility & IVF Centre",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff7fb]">
      {/* Google Ads Conversion Tracking - Submit Lead | New LP IVF */}
      <Script id="google-ads-conversion-ivf" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17729942778/tErjCNa8mMQcEPrppYZC'
          });
        `}
      </Script>

      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg rounded-[28px] border border-[#e8278d]/10 bg-white px-6 py-12 text-center shadow-[0_24px_70px_rgba(70,20,48,0.08)] sm:px-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8278d]/10 text-[#e8278d]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
              <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#102c26]">Thank you!</h1>
          <p className="mt-4 text-base leading-7 text-[#2c1d27]/75">
            Thank you for choosing Embryonic Fertility &amp; IVF Centre.
            Our team will contact you shortly to guide your next steps.
          </p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-[#e8278d] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#bd1d72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8278d]">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}