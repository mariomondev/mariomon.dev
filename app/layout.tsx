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
    "Mario Montano | Senior Full-Stack Engineer | TypeScript, React, Next.js",
  description:
    "Senior full-stack engineer with 8+ years of experience building scalable web applications. Specialized expertise in healthcare/EMR systems, HIPAA compliance, and end-to-end product development using TypeScript, React, Next.js, and Node.js.",
  keywords: [
    "Senior Full-Stack Engineer",
    "Full-Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "Full-Stack Software Engineer",
    "Web Application Developer",
    "Healthcare Software Engineer",
    "EMR Developer",
    "EHR Developer",
    "HIPAA Compliant Software Engineer",
    "Medical Software Engineer",
    "iOS Developer",
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
    title: "Mario Montano | Senior Full-Stack Engineer",
    description:
      "Senior full-stack engineer with 8+ years of experience building scalable web applications. Specialized expertise in healthcare/EMR systems, HIPAA compliance, and end-to-end product development using TypeScript, React, Next.js, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mario Montano - Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Montano | Senior Full-Stack Engineer",
    description:
      "Senior full-stack engineer with 8+ years of experience building scalable web applications. Specialized expertise in healthcare/EMR systems, HIPAA compliance, and end-to-end product development using TypeScript, React, Next.js, and Node.js.",
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
    jobTitle: "Senior Full-Stack Engineer",
    description:
      "Senior full-stack engineer with 8+ years of experience building scalable web applications, with specialized expertise in healthcare/EMR systems and HIPAA compliance.",
    url: "https://mariomon.dev",
    sameAs: [
      "https://github.com/mariomondev",
      "https://linkedin.com/in/mariomondev",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Web Application Development",
      "Healthcare Software Development",
      "EMR/EHR Systems",
      "HIPAA Compliance",
      "Swift",
      "iOS Development",
      "API Development",
      "Automation",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Full-Stack Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      skills:
        "Full-Stack Development, TypeScript, React, Next.js, Node.js, PostgreSQL, Healthcare Systems, EMR/EHR, HIPAA Compliance",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mario Montano Portfolio",
    description:
      "Portfolio of Mario Montano, a senior full-stack engineer with specialized expertise in building scalable web applications and healthcare systems.",
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
