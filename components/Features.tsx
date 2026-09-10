import { Shield, Zap, HeartHandshake, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performa Tinggi",
    desc: "Model dioptimalkan untuk inference cepat bahkan di hardware konsumen.",
  },
  {
    icon: Shield,
    title: "Lisensi Terbuka",
    desc: "Apache 2.0 & MIT. Gunakan untuk komersial tanpa biaya tambahan.",
  },
  {
    icon: Cpu,
    title: "Multi-Platform",
    desc: "Kompatibel dengan PyTorch, TensorFlow, ONNX, dan llama.cpp.",
  },
  {
    icon: HeartHandshake,
    title: "Komunitas Aktif",
    desc: "Didukung developer di Discord dan Hugging Face.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Keunggulan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Kenapa memilih model kami?
          </h2>
          <p className="mt-4 text-neutral-400">
            Dibangun oleh peneliti dan engineer dengan fokus pada kualitas,
            kecepatan, dan keterbukaan.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-emerald-500/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-400 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
