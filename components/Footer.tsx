import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { HF_ORG_URL, GITHUB_URL } from "@/lib/models";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              OpenPathAI
            </Link>
            <p className="mt-4 text-sm text-neutral-500">
              Open source AI startup. Membangun AI yang dapat diakses semua
              orang.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Produk</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/models" className="hover:text-white">
                  Models
                </Link>
              </li>
              <li>
                <a
                  href={HF_ORG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Hugging Face
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Perusahaan</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} OpenPathAI. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-neutral-500 hover:bg-surface hover:text-white"
            >
              <Github size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-neutral-500 hover:bg-surface hover:text-white"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-neutral-500 hover:bg-surface hover:text-white"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
