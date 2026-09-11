import { Shield, Zap, Cpu, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Inference Cepat",
    desc: "Model dioptimalkan untuk latensi rendah pada perangkat konsumen maupun server produksi.",
  },
  {
    icon: Shield,
    title: "Lisensi Terbuka",
    desc: "Dirilis dengan lisensi MIT dan Apache 2.0. Bebas digunakan untuk riset maupun komersial.",
  },
  {
    icon: Cpu,
    title: "Kompatibel Luas",
    desc: "Mendukung PyTorch, ONNX, TensorRT, dan llama.cpp untuk deployment fleksibel.",
  },
  {
    icon: HeartHandshake,
    title: "Dokumentasi Lengkap",
    desc: "Setiap model dilengkapi kartu model, contoh kode, dan panduan penggunaan.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Keunggulan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Dibangun untuk produksi
          </h2>
          <p className="mt-4 text-neutral-400">
            Setiap model dirancang dengan fokus pada kualitas, kecepatan, dan
            keterbukaan — siap dipakai dari prototipe hingga skala produksi.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-white/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-white transition group-hover:bg-white group-hover:text-black">
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
