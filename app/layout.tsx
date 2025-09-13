import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ORIGIN_URL } from "@/utils/helpers";

const fontSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Summarizerly : AI Powered PDF's Summarization",
  description: "Save hours of reading time. Transform lengthy PDF;s into clear, accurate summaries in seconds.",
  icons: {
    icon: '/icon.png'
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${fontSans.variable} ${inter.variable} font-sans antialiased`}
      >
      <div className="relative flex min-h-screen flex-col">
        <Header/>
         <main className="flex-1">{children}</main>
        <Footer/>
      </div>  
      <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
