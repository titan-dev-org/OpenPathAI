"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image:
      "https://cdn.phototourl.com/free/2026-09-12-c55773d7-ebd3-493b-b54d-8e56b9b51d92.png",
    title: "Introducing Orbit 3 VL Flash",
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const SWIPE_THRESHOLD = 60;

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
    resetAutoplay();
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    isHorizontalSwipe.current = null;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (isHorizontalSwipe.current === null) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (isHorizontalSwipe.current) {
      setDragOffset(dx);
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startXRef.current;
    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) next();
      else prev();
    }

    isHorizontalSwipe.current = null;
  };

  const onPointerCancel = () => {
    setIsDragging(false);
    setDragOffset(0);
    isHorizontalSwipe.current = null;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <section
      className="relative h-screen w-full select-none overflow-hidden"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? "none" : "transform 0.4s ease",
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={i === 0}
              className="pointer-events-none object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-12">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-neutral-300 backdrop-blur-sm">
          OpenPathAI · Open Source AI Startup
        </div>

        <h1
          key={`title-${current}`}
          className="mt-6 max-w-3xl animate-slide-up text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {slides[current].title}
        </h1>

        <p
          key={`sub-${current}`}
          className="mt-6 max-w-xl animate-fade-in text-base text-neutral-300 sm:text-lg"
        >
          {slides[current].subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={slides[current].href}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            {slides[current].cta} <ArrowRight size={16} />
          </a>
          <a
            href="https://huggingface.co/OpenPathAI"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Kunjungi Hugging Face
          </a>
        </div>

        <div className="mt-12 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-white"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          Geser dengan tangan / mouse untuk berpindah slide
        </p>
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
