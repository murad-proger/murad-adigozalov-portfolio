import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { WhatsappButton } from "../components/whatsapp-button";
import { Toaster } from "../components/ui/sonner";
import { profile } from "../content/profile";
import { siteDescription, siteUrl } from "../lib/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Murad Adigozalov — Senior Frontend Engineer",
    template: "%s · Murad Adigozalov",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Murad Adigozalov — Portfolio",
    title: "Murad Adigozalov — Senior Frontend Engineer",
    description: siteDescription,
    images: [
      {
        url: "/images/Head_shot_professional.jpg",
        width: 1254,
        height: 1254,
        alt: "Murad Adigozalov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Adigozalov — Senior Frontend Engineer",
    description: siteDescription,
    images: ["/images/Head_shot_professional.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Murad Adigozalov",
  url: siteUrl,
  jobTitle: "Senior Frontend Engineer",
  email: `mailto:${profile.email}`,
  sameAs: [profile.githubUrl, profile.linkedinUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} motion-safe:scroll-smooth`}
    >
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappButton />
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}
