import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HF_ORG_URL } from "@/lib/models";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />

      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-10 text-center lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Siap mencoba model kami?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              Semua model tersedia gratis di Hugging Face. Cukup beberapa
              baris kode untuk memulai.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/models"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                Lihat Semua Model <ArrowRight size={16} />
              </Link>
              <a
                href={HF_ORG_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-surface"
              >
                Kunjungi Hugging Face
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
