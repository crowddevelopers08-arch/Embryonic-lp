import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Embryonic Fertility and IVF Centre Pune",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-[family-name:var(--font-lexend)] text-[#2c1d27] antialiased">
        {children}
      </body>
    </html>
  );
}
