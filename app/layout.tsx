import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "KODEX — Technology & Innovation",
  description:
    "We design and build digital experiences, software and intelligent systems that help businesses solve problems and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
