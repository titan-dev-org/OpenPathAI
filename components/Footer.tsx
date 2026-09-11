import Link from "next/link";
import { HF_ORG_URL, GITHUB_URL } from "@/lib/models";

const TWITTER_URL = "https://twitter.com/OpenPathAI";
const THREADS_URL = "https://www.threads.com/@op.ai.id";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ThreadsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
    </svg>
  );
}

function HuggingFaceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.1 0 2.13.2 3.09.55-.14.63-.68 1.09-1.33 1.09-.16 0-.31-.03-.45-.08-.36.63-.51 1.37-.43 2.11-1 .68-1.53 1.84-1.39 3.06.13 1.11.87 2.03 1.9 2.41.71 1.39 2.11 2.38 3.78 2.5-.06.05-.12.1-.18.15a5.96 5.96 0 0 1-4.99 2.71c-.24 0-.47-.02-.7-.05.36-.85.4-1.82.12-2.71a4.522 4.522 0 0 1-2.82-2.82c-.89-.28-1.86-.24-2.71.12A7.98 7.98 0 0 1 4 12c0-4.41 3.59-8 8-8zm-3.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.5 3.5c-.9 0-1.75-.3-2.43-.83.27-.63.83-1.06 1.5-1.06.19 0 .37.03.53.1.3-.35.75-.57 1.25-.57s.95.22 1.25.57c.16-.07.34-.1.53-.1.67 0 1.23.43 1.5 1.06A4 4 0 0 1 12 15z" />
    </svg>
  );
}

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
                <Link href="/coming-soon" className="hover:text-white">
                  API
                </Link>
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
                <Link href="/coming-soon" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-white">
                  License
                </Link>
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
              href={TWITTER_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="rounded-md p-2 text-neutral-500 transition hover:bg-surface hover:text-white"
            >
              <XIcon size={16} />
            </a>
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Threads"
              className="rounded-md p-2 text-neutral-500 transition hover:bg-surface hover:text-white"
            >
              <ThreadsIcon size={16} />
            </a>
            <a
              href={HF_ORG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Hugging Face"
              className="rounded-md p-2 text-neutral-500 transition hover:bg-surface hover:text-white"
            >
              <HuggingFaceIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
      }
