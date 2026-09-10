"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Boxes,
  BookOpen,
  Github,
  MessageCircle,
  Settings,
} from "lucide-react";
import { HF_ORG_URL, GITHUB_URL } from "@/lib/models";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/models", label: "Models", icon: Boxes },
  { href: "/#about", label: "About", icon: BookOpen },
  { href: "/#features", label: "Features", icon: BookOpen },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-background transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-4">
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Menu
          </p>
          <nav className="flex flex-col gap-1">
            {items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-emerald-600/10 text-emerald-400"
                      : "text-neutral-400 hover:bg-surface hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-1 border-t border-border pt-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-surface hover:text-white"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={HF_ORG_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-surface hover:text-white"
            >
              <MessageCircle size={16} /> Hugging Face
            </a>
            <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-surface hover:text-white">
              <Settings size={16} /> Settings
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
