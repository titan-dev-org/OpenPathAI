"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HF_ORG_URL } from "@/lib/models";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/models", label: "Models" },
    { href: "/#about", label: "About" },
    { href: "/#features", label: "Features" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-black/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 lg:px-12">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          OpenPathAI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={HF_ORG_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 sm:block"
          >
            Hugging Face
          </a>
          <button
            className="rounded-md p-2 text-neutral-400 hover:bg-surface hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-black md:hidden">
          <nav className="flex flex-col p-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-surface hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={HF_ORG_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black"
            >
              Hugging Face
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
