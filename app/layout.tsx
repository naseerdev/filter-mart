import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/common/header";
import Footer from "./ui/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FilterMart - Over 1,137,729 Cross References On Thousands of Products",
  description: "Leading provider of industrial and residential filters with comprehensive cross-reference database. Find quality filters for HVAC, industrial applications, and more.",
  keywords: "filters, HVAC filters, industrial filters, residential filters, filter cross-reference, OEM filters",
  authors: [{ name: "FilterMart" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "FilterMart - Filter Solutions for Every Need",
    description: "Over 1,137,729 cross references on thousands of products. Your trusted partner for filters.",
    type: "website",
    url: "https://filtermart.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        <main className="bg-white min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
