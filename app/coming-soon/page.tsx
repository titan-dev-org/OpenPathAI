import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata = {
  title: "Coming Soon — OpenPathAI",
  description: "Fitur ini sedang dalam pengembangan.",
};

export default function ComingSoonPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface">
          <Clock size={22} className="text-white" />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Coming Soon
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Halaman ini sedang disiapkan
        </h1>
        <p className="mt-4 text-neutral-400">
          Kami sedang mengerjakan fitur ini. Silakan kembali lagi nanti atau
          jelajahi model kami yang sudah tersedia di Hugging Face.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            <ArrowLeft size={16} /> Kembali ke Home
          </Link>
          <a
            href="https://huggingface.co/OpenPathAI"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-black px-6 py-3 text-sm font-medium hover:bg-surface"
          >
            Kunjungi Hugging Face
          </a>
        </div>
      </div>
    </section>
  );
            }
