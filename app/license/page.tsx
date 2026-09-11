import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "License — OpenPathAI",
  description: "Informasi lisensi model dan konten OpenPathAI.",
};

const licenses = [
  {
    name: "MIT License",
    scope: "Website & utilitas internal",
    desc: "Bebas digunakan, dimodifikasi, dan didistribusikan dengan syarat menyertakan salinan lisensi dan hak cipta.",
  },
  {
    name: "Apache License 2.0",
    scope: "Model AI (Orbit series & YOLO)",
    desc: "Izinkan penggunaan komersial dengan syarat menyertakan notice, perubahan dokumentasi, dan klausul paten.",
  },
  {
    name: "Model Card License",
    scope: "Dataset & bobot model",
    desc: "Setiap model memiliki lisensi spesifik yang tercantum pada kartu model di Hugging Face. Silakan cek sebelum digunakan.",
  },
];

export default function LicensePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">License</h1>
      <p className="mt-3 text-sm text-neutral-500">
        Terakhir diperbarui: {new Date().getFullYear()}
      </p>

      <p className="mt-8 text-sm leading-relaxed text-neutral-400">
        OpenPathAI berkomitmen pada prinsip open source. Berikut ringkasan
        lisensi yang berlaku untuk situs, kode, dan model yang kami rilis.
      </p>

      <div className="mt-10 space-y-4">
        {licenses.map((l) => (
          <div
            key={l.name}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-white">{l.name}</h2>
              <span className="text-xs text-neutral-500">{l.scope}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {l.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-surface p-6">
        <h3 className="text-sm font-semibold text-white">
          Detail Lisensi Per Model
        </h3>
        <p className="mt-2 text-sm text-neutral-400">
          Untuk informasi lisensi lengkap tiap model, silakan kunjungi kartu
          model di Hugging Face.
        </p>
        <a
          href="https://huggingface.co/OpenPathAI"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Lihat di Hugging Face <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
