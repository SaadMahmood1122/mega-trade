import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mega Trade",
  description: "Your one-stop destination for fresh, organic produce and premium groceries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-0 pt-16 py-8 flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
