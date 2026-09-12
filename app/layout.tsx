import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OpenPathAI — Open Source AI Startup",
  description:
    "OpenPathAI merilis model AI open source (Vision-Language, LLM, Image Gen, YOLO Detection) untuk Bahasa Indonesia dan dunia di Hugging Face.",
  keywords: [
    "OpenPathAI",
    "AI",
    "open source",
    "hugging face",
    "machine learning",
    "vision language",
    "yolo",
  ],
  openGraph: {
    title: "OpenPathAI",
    description:
      "Model AI open source untuk semua — dirilis gratis di Hugging Face.",
    url: "https://huggingface.co/OpenPathAI",
    siteName: "OpenPathAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
