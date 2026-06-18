import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { SITE, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Premium Woods LLC | Custom Counters, Casework & Millwork — Lincoln, NE",
    template: "%s | Premium Woods LLC",
  },
  description:
    `Custom butcher block, live edge, epoxy, and plastic-laminate countertops + commercial casework. Family-owned in Lincoln, NE since 1999. CNC precision, on-time delivery included. Serving Nebraska, Western Iowa & Northern Kansas. Call ${BUSINESS.phone}.`,
  keywords: [
    "custom countertops Lincoln NE",
    "custom countertops Omaha NE",
    "butcher block countertops Omaha",
    "butcher block countertops Lincoln NE",
    "walnut countertops Nebraska",
    "live edge countertops Omaha",
    "epoxy countertops Lincoln NE",
    "plastic laminate countertops Nebraska",
    "commercial casework Nebraska",
    "commercial casework Omaha",
    "custom millwork Lincoln NE",
    "CNC millwork Nebraska",
    "kitchen island fabrication Omaha",
    "bar top fabricator Lincoln NE",
    "reception desk millwork Omaha",
    "countertop fabricator Council Bluffs IA",
    "custom wood counters Western Iowa",
    "commercial cabinet shop Nebraska",
    "family owned cabinet shop Lincoln",
    "Premium Woods LLC",
  ],
  openGraph: {
    title: "Premium Woods LLC | Custom Counters & Commercial Casework",
    description:
      "Family-owned custom counter & casework shop in Lincoln, NE. 27 years of CNC-precise work delivered on time across Nebraska, Iowa, and Kansas.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Premium Woods — Custom Counters & Casework, Lincoln NE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Woods LLC | Custom Counters, Lincoln NE",
    description: "Custom butcher block, live edge, epoxy & laminate counters. Family-owned since 1999.",
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessSchema />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
