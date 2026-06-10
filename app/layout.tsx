import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.deveshkumar.workers.dev"),

  title: {
    default: "Devesh Kumar | Frontend Architect",
    template: "%s | Devesh Kumar",
  },

  description:
    "Frontend Architect and Technical Lead with 9+ years of experience building Banking, Mortgage and Fintech platforms using React, Next.js, TypeScript, Accessibility and Micro Frontend Architecture.",

  keywords: [
    "Devesh Kumar",
    "Frontend Architect",
    "Technical Lead",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Micro Frontend",
    "Frontend Engineering",
    "Banking Applications",
    "Fintech Applications",
    "Accessibility",
    "WCAG",
    "React",
    "Next.js",
  ],

  authors: [
    {
      name: "Devesh Kumar",
      url: "https://portfolio.deveshkumar.workers.dev",
    },
  ],

  creator: "Devesh Kumar",

  openGraph: {
    title: "Devesh Kumar | Frontend Architect",
    description:
      "Frontend Architect and Technical Lead with 9+ years of experience building Banking, Mortgage and Fintech platforms.",
    url: "https://portfolio.deveshkumar.workers.dev",
    siteName: "Devesh Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/devesh.png",
        width: 1200,
        height: 630,
        alt: "Devesh Kumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Devesh Kumar | Frontend Architect",
    description:
      "Frontend Architect and Technical Lead with 9+ years of experience.",
    images: ["/images/devesh.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://portfolio.deveshkumar.workers.dev",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}</body>
    </html>
  );
}
