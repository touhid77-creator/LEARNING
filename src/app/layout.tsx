import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { siteConfig } from "@/lib/site-config";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — 24×7 Taxi & Tour Service in Udupi, Karnataka`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Udupi taxi",
    "Udupi tour operator",
    "Mangalore airport taxi",
    "Udupi to airport taxi",
    "Manipal airport taxi",
    "Udupi sightseeing cab",
    "Udupi temple tour taxi",
    "Malpe beach taxi",
    "Kollur Mookambika taxi from Udupi",
  ],
  openGraph: {
    title: `${siteConfig.name} — 24×7 Taxi & Tour Service in Udupi, Karnataka`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — 24×7 Taxi & Tour Service in Udupi, Karnataka`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2029",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: siteConfig.name,
  image: `${siteConfig.url}/opengraph-image`,
  telephone: siteConfig.phoneIntl,
  email: siteConfig.email,
  areaServed: "Udupi, Karnataka, India",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 00:00-23:59",
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
