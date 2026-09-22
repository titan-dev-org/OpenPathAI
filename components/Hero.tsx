"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        {/* Judul besar */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build with our open-weight AI models,{" "}
          <span className="inline-flex items-baseline gap-1 align-baseline">
            <span className="text-white">Orbit</span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2 py-0.5 align-middle text-sm font-medium text-neutral-300">
              VL
            </span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2 py-0.5 align-middle text-sm font-medium text-neutral-300">
              3
            </span>
          </span>{" "}
          and{" "}
          <span className="inline-flex items-baseline gap-1 align-baseline">
            <span className="text-white">Orbit</span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2 py-0.5 align-middle text-sm font-medium text-neutral-300">
              8B
            </span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2 py-0.5 align-middle text-sm font-medium text-neutral-300">
              Thinking
            </span>
          </span>{" "}
          today.
        </h1>

        {/* Tombol CTA */}
        <div className="mt-10 flex flex-col gap-3">
          <Link
            href="/models"
            className="group flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Get started — Models, Docs, and more
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <a
            href="https://huggingface.co/OpenPathAI"
            target="_blank"
            rel="noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-6 py-4 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Use on Hugging Face
            <ArrowUpRight size={16} />
          </a>

          <Link
            href="/coming-soon"
            className="group flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-6 py-4 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Use on OpenPathAI API
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Preview image / card di bawah */}
        <div className="mt-16 overflow-hidden rounded-xl border border-white/10 bg-surface">
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="ml-3 text-xs text-neutral-500">
              openpathai — terminal
            </span>
          </div>

          <div className="relative aspect-[16/10] w-full bg-black">
            <Image
              src="https://cdn.phototourl.com/free/2026-09-12-c55773d7-ebd3-493b-b54d-8e56b9b51d92.png"
              alt="OpenPathAI preview"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay terminal-style di atas gambar */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 font-mono text-xs text-neutral-300 sm:text-sm">
              <div className="flex items-center gap-2 text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>openpathai — model.py</span>
              </div>
              <pre className="mt-3 leading-relaxed whitespace-pre-wrap break-words">
{`$ python -c "from openpathai import Orbit"
> Loading Orbit-3-VL-Flash (4B · FP32)...
> Domain: Hukum Indonesia ✓
> Ready. Type your prompt below ↓`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
