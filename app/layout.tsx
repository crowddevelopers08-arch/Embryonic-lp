import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Embryonic Fertility and IVF Centre Pune",
  icons: {
    icon: [
      { url: "/Fevicon-design.jpg.webp", sizes: "any" },
      { url: "/Fevicon-design.jpg.webp", sizes: "16x16", type: "image/png" },
      { url: "/Fevicon-design.jpg.webp", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/Fevicon-design.jpg.webp", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/Fevicon-design.jpg.webp", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/Fevicon-design.jpg.webp", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} scroll-smooth`}>
      <head>
        {/* Google Ads (gtag.js) — beforeInteractive so crawler detects it */}
        <Script
          id="google-ads"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17729942778"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17729942778');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W92Z5PSP');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xg3hntoi0y");
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2494248334322433');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white font-[family-name:var(--font-lexend)] text-[#2c1d27] antialiased">
        {/* Google Tag Manager(noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W92Z5PSP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2494248334322433&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}