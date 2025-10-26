// src/app/layout.tsx
"use client";
import type { Metadata } from "next";
import "./globals.css";
import { theme } from "@/config/theme";

export const metadata: Metadata = {
  title: "Daffodil International College — Baburhat",
  description:
    "Daffodil International College offers industry-aligned programs and modern facilities to shape future leaders.",
  keywords: [
    "education",
    "college",
    "Daffodil International College",
    "Baburhat",
    "admissions",
    "HSC",
    "Science",
    "Business Studies",
    "Computer Science Engineering",
    "modern facilities",
    "quality education",
    "student life",
    "campus",
    "programs",
    "courses",
    "CSE",
    "NU",
    "Daffodil Family",
    "chandpur",
    "professional courses",
    "cheap tuition fees",
    "scholarships",
    "affordable education",
  ],
  authors: [{ name: "Mahmudul Hasan Sadi" }, { name: "Mahin Binta Matin" }],
  creator: "Mahmudul Hasan Sadi, Mahin Binta Matin",
  publisher: "Daffodil International College",
  openGraph: {
    title: "Daffodil International College — Baburhat",
    description:
      "Quality education with industry-aligned programs and modern facilities",
    url: "https://dic.edu.bd",
    siteName: "Daffodil International College",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daffodil International College — Baburhat",
    description: "Quality education with industry-aligned programs",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  metadataBase: new URL("https://dic.edu.bd"),
  alternates: {
    canonical: "https://dic.edu.bd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/Inter-VariableFont_slnt,wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ fontFamily: theme.fontFamily }}>
        {children}

        {/* JSON-LD Schema for College */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: "Daffodil International College",
              url: "https://dic.edu.bd",
              logo: "https://dic.edu.bd/favicon/android-chrome-192x192.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+8801713493091",
                  contactType: "customer service",
                  email: "info.bh@dic.edu.bd",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
