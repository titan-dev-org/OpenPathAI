"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { HF_ORG_URL, GITHUB_URL } from "@/lib/models";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/models", label: "Models" },
    { href: "/#about", label: "About" },
    { href: "/#features", label: "Features" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="hidden rounded-md p-2 text-neutral-400 hover:bg-surface hover:text-white lg:block"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 font-bold text-white">
              O
            </div>
            <span className="text-lg font-semibold tracking-tight">
              OpenPath<span className="text-emerald-400">AI</span>
            </span>
          </Link>
        </div>

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
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md p-2 text-neutral-400 hover:bg-surface hover:text-white sm:block"
          >
            <Github size={18} />
          </a>
          <a
            href={HF_ORG_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 sm:block"
          >
            Hugging Face
          </a>
          <button
            className="rounded-md p-2 text-neutral-400 hover:bg-surface hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
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
              className="mt-2 rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Hugging Face
            </a>
          </nav>
        </div>
      )}
    </header>
  );
                                              }
