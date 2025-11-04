import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mario Montano | Full-Stack Healthcare Software Engineer | EMR/EHR Developer",
  description:
    "Full-stack healthcare software engineer with 5+ years building HIPAA-compliant EMR/EHR systems. Specializing in TypeScript, Next.js, React, Node.js, and secure medical software development.",
  keywords: [
    "Full-Stack Healthcare Software Engineer",
    "EMR Developer",
    "EHR Developer",
    "HIPAA Compliant Software Engineer",
    "Healthcare Software Developer",
    "Medical Software Engineer",
    "TypeScript Developer",
    "Next.js Developer",
    "React Healthcare Developer",
    "Node.js Healthcare Engineer",
    "Healthcare iOS Developer",
    "Electronic Medical Records Developer",
    "Patient Management System Developer",
    "Healthcare Automation Engineer",
    "HIPAA Software Architect",
  ],
  authors: [{ name: "Mario Montano" }],
  creator: "Mario Montano",
  metadataBase: new URL("https://mariomon.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mariomon.dev",
    siteName: "Mario Montano Portfolio",
    title: "Mario Montano | Full-Stack Healthcare Software Engineer",
    description:
      "Full-stack healthcare software engineer with 5+ years building HIPAA-compliant EMR/EHR systems. Specializing in TypeScript, Next.js, React, Node.js, and secure medical software development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mario Montano - Full-Stack Healthcare Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Montano | Full-Stack Healthcare Software Engineer",
    description:
      "Full-stack healthcare software engineer with 5+ years building HIPAA-compliant EMR/EHR systems. Specializing in TypeScript, Next.js, React, Node.js, and secure medical software development.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mario Montano",
    jobTitle: "Full-Stack Healthcare Software Engineer",
    description:
      "Full-stack healthcare software engineer with 5+ years of experience building HIPAA-compliant EMR/EHR systems.",
    url: "https://mariomon.dev",
    sameAs: ["https://github.com/mariomon", "https://linkedin.com/in/mariomon"],
    knowsAbout: [
      "Healthcare Software Development",
      "EMR/EHR Systems",
      "HIPAA Compliance",
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Swift",
      "iOS Development",
      "Full-Stack Development",
      "Medical Software",
      "Healthcare IT",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Healthcare Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      skills:
        "Full-Stack Development, EMR/EHR Systems, HIPAA Compliance, TypeScript, React, Next.js, Node.js",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mario Montano Portfolio",
    description:
      "Portfolio of Mario Montano, a full-stack healthcare software engineer specializing in HIPAA-compliant EMR/EHR systems.",
    url: "https://mariomon.dev",
    author: {
      "@type": "Person",
      name: "Mario Montano",
    },
    inLanguage: "en-US",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-darkreader-mode="dynamic"
      data-darkreader-scheme="dark"
    >
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
