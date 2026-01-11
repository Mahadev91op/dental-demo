import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Import Script for JSON-LD

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO METADATA ---
export const metadata = {
  metadataBase: new URL('https://dental-demo-phi.vercel.app/'), // Apna asli domain yahan dalein
  title: {
    default: "City Dental Clinic | Best Dentist in Mumbai",
    template: "%s | City Dental Clinic"
  },
  description: "Advanced Painless Dentistry in Mumbai. Services: Implants, Root Canal, Veneers, Braces & Kids Dental. Book Appointment Online.",
  keywords: ["Dentist Mumbai", "Dental Clinic", "Root Canal", "Teeth Whitening", "Dental Implants", "Painless Dentistry", "City Dental"],
  authors: [{ name: "Dr. A. Sharma" }],
  creator: "DevSamp",
  publisher: "City Dental Clinic",
  openGraph: {
    title: "City Dental Clinic - Your Smile, Our Priority",
    description: "Book your appointment for painless dental treatments. 15+ Years Experience.",
    url: 'https://citydental-demo.vercel.app',
    siteName: 'City Dental Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "City Dental Clinic | Painless Dentistry",
    description: "Advanced dental care: Implants, Veneers & more.",
    creator: '@citydental',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- JSON-LD SCHEMA (Google Rich Snippets ke liye) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "City Dental Clinic",
  "image": "https://citydental-demo.vercel.app/og-image.jpg", // Apni image ka link
  "description": "Premium dental clinic providing painless treatments like Implants, Root Canals, and Cosmetic Dentistry.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop 24, City Center, Main Road",
    "addressLocality": "Mumbai",
    "addressRegion": "MH",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0760,
    "longitude": 72.8777
  },
  "url": "https://citydental-demo.vercel.app",
  "telephone": "+919876543210",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$$"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Structured Data Script */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}