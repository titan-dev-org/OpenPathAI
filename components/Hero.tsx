"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
    title: "Open Source AI untuk Semua",
    subtitle:
      "OpenPathAI merilis model AI canggih secara gratis di Hugging Face untuk mempercepat inovasi.",
    cta: "Jelajahi Model",
    href: "/models",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    title: "Multimodal dan Vision",
    subtitle:
      "Dari Vision-Language hingga YOLO detection — kami membangun AI untuk kebutuhan nyata.",
    cta: "Lihat Model",
    href: "/models",
  },
  {
    image:
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1600&q=80",
    title: "Built for Developers",
    subtitle:
      "Model siap pakai, dokumentasi lengkap, komunitas terbuka. Gratis untuk riset dan komersial.",
    cta: "Mulai Sekarang",
    href: "https://huggingface.co/OpenPathAI",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-12">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-neutral-300 backdrop-blur-sm">
          <Sparkles size={14} className="text-emerald-400" />
          OpenPathAI · Open Source AI Startup
        </div>

        <h1
          key={`title-${current}`}
          className="mt-6 max-w-3xl animate-slide-up text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {slide.title.split(" ").map((w, i) => {
            const words = slide.title.split(" ");
            return (
              <span key={i}>
                {i === words.length - 1 ? (
                  <span className="gradient-text">{w}</span>
                ) : (
                  w
                )}{" "}
              </span>
            );
          })}
        </h1>

        <p
          key={`sub-${current}`}
          className="mt-6 max-w-xl animate-fade-in text-base text-neutral-300 sm:text-lg"
        >
          {slide.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={slide.href}
            className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 glow"
          >
            {slide.cta}
          </a>
          <a
            href="https://huggingface.co/OpenPathAI"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Kunjungi Hugging Face
          </a>
        </div>

        <div className="mt-12 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-emerald-500"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-neutral-400 hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
      }
