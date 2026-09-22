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
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build with our open-weight AI models,{" "}
          <span className="inline-flex items-center gap-1.5 align-middle">
            <span className="text-white">Orbit</span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2.5 py-0.5 text-base font-medium text-neutral-300 sm:text-lg lg:text-xl">
              VL
            </span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2.5 py-0.5 text-base font-medium text-neutral-300 sm:text-lg lg:text-xl">
              3
            </span>
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center gap-1.5 align-middle">
            <span className="text-white">Orbit</span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2.5 py-0.5 text-base font-medium text-neutral-300 sm:text-lg lg:text-xl">
              8B
            </span>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-2.5 py-0.5 text-base font-medium uppercase text-neutral-300 sm:text-lg lg:text-xl">
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

        {/* Terminal window */}
        <div className="mt-16 overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b] font-mono shadow-[0_0_60px_-20px_rgba(255,255,255,0.15)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#141414] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-neutral-500">
              openpathai — bash — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="relative">
            {/* Background image */}
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="https://cdn.phototourl.com/free/2026-09-12-c55773d7-ebd3-493b-b54d-8e56b9b51d92.png"
                alt="OpenPathAI preview"
                fill
                priority
                className="object-cover opacity-40"
              />
            </div>

            {/* Terminal content overlay */}
            <div className="absolute inset-0 bg-black/70 p-5 text-[12px] leading-relaxed text-neutral-300 sm:p-6 sm:text-[13px]">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-emerald-400">➜</span>
                <span className="text-sky-400">~/openpathai</span>
                <span className="text-neutral-500">git:(</span>
                <span className="text-red-400">main</span>
                <span className="text-neutral-500">)</span>
                <span className="text-white">python -c</span>
                <span className="text-yellow-300">
                  "from openpathai import Orbit"
                </span>
              </div>

              <div className="mt-3 space-y-1 text-neutral-400">
                <p>
                  <span className="text-neutral-600">[00:00:01]</span>{" "}
                  <span className="text-sky-400">info</span>&nbsp;&nbsp;Loading{" "}
                  <span className="text-white">Orbit-3-VL-Flash</span> ...
                </p>
                <p>
                  <span className="text-neutral-600">[00:00:02]</span>{" "}
                  <span className="text-sky-400">info</span>&nbsp;&nbsp;Params:{" "}
                  <span className="text-white">4B</span> · Precision:{" "}
                  <span className="text-white">FP32</span>
                </p>
                <p>
                  <span className="text-neutral-600">[00:00:03]</span>{" "}
                  <span className="text-sky-400">info</span>&nbsp;&nbsp;Domain:{" "}
                  <span className="text-white">Hukum Indonesia</span>
                </p>
                <p>
                  <span className="text-neutral-600">[00:00:04]</span>{" "}
                  <span className="text-emerald-400">ready</span>&nbsp;Model
                  loaded successfully ✓
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-sky-400">~/openpathai</span>
                <span className="text-neutral-500">git:(</span>
                <span className="text-red-400">main</span>
                <span className="text-neutral-500">)</span>
                <span className="text-white">▊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
            }
