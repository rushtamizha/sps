import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
const SITE_URL = "https://www.chennaitopondicherryonewaytaxi.com/";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pondicherry Taxi Service | One Way & Round Trip Drop Taxi Bala",
    template: "%s | Chennai Pondicherry Taxi Bala",
  },
  description:
    "Book reliable, transparent Pondicherry taxi service.one-way drop taxi & round trips between Pondicherry, Chennai Airport Clean cars, verified drivers, 24/7 booking.",
  keywords: [
    "Pondicherry taxi",
    "Pondicherry to Chennai taxi",
    "Chennai to Pondicherry taxi",
    "one way taxi Pondicherry",
    "Chennai airport drop taxi",
    "Pondy to Chennai cab service",
    "drop taxi Bala Pondicherry",
    "Innova Crysta rental Pondicherry",
    "outstation taxi Tamil Nadu",
    "Pondicherry to Bangalore taxi",
    "Pondicherry to Kerala cab",
  ],
  authors: [{ name: "Chennai - Pondi Taxi Bala" }],
  category: "Transportation",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Pondicherry Taxi Service | One Way & Round Trip Drop Taxi Bala",
    description:
      "South India's trusted intercity taxi service. Flat-rate one-way and round-trip fares across Tamil Nadu, Karnataka & Kerala with clean, well-maintained cars.",
    siteName: "Chennai - Pondi Taxi Bala",
    images: [
      {
        url: "/taxi-hero.png",
        width: 1200,
        height: 630,
        alt: "Pondicherry drop taxi fleet - Chennai Pondi Taxi Bala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pondicherry Taxi Service | Drop Taxi Bala",
    description:
      "One-way & round-trip taxi between Pondicherry, Chennai Airport, Bangalore & Kerala. Transparent pricing, 24/7 support.",
    images: ["/taxi-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0b1329",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  // Combined LocalBusiness + TaxiService + FAQ schema.
  // Keep the numbers (phone, price, rating, reviewCount) truthful and current —
  // inaccurate structured data can get flagged by Google and hurt trust, not help it.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Chennai - Pondi Taxi Bala",
    description:
      "Intercity drop taxi service specializing in one-way and round-trip transfers between Pondicherry, Chennai Airport, and major cities across South India.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/taxi-hero.png`,
    telephone: "+91-8825555154",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pondicherry",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.9416,
      longitude: 79.8083,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Pondicherry" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "AdministrativeArea", name: "Chennai" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    // Only include ratings you can actually back up (e.g. from Google Business Profile).
    // A fabricated aggregateRating is a common cause of manual penalties.
  };

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="IN-PY" />
        <meta name="geo.placename" content="Pondicherry" />
        <meta name="geo.position" content="11.9416;79.8083" />
        <meta name="ICBM" content="11.9416, 79.8083" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-C8B26BCX6P" />
      </body>
    </html>
  );
}