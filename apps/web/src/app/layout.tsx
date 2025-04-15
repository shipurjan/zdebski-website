import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Cyprian Zdebski | Frontend Developer & Photographer",
  description:
    "Personal website of Cyprian Zdebski, featuring thoughts, photography, and projects in web development and automation.",
  keywords: [
    "Cyprian Zdebski",
    "frontend development",
    "photography",
    "Japanese",
    "automation",
  ],
  creator: "Cyprian Zdebski",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zdebski.me",
    title: "Cyprian Zdebski | Frontend Developer & Photographer",
    description:
      "Personal website of Cyprian Zdebski, featuring thoughts, photography, and projects in web development and automation.",
    siteName: "zdebski.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
