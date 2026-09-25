import Image from "next/image";

const techs = [
  { name: "NVIDIA", logo: "/logos/nvida.png" },
  { name: "Transformers", logo: "/logos/transformers.svg" },
  { name: "PyTorch", logo: "/logos/pytorch.png" },
  { name: "Hugging Face", logo: "/logos/hf.svg" },
  { name: "CUDA", logo: "/logos/cuda.png" },
  { name: "ONNX", logo: "/logos/onnx.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "Kubernetes", logo: "/logos/kubernetes.png" },
];

export default function TechStack() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Teknologi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Teknologi yang kami gunakan
          </h2>
          <p className="mt-4 text-neutral-400">
            Kami membangun dan melatih model dengan ekosistem open source
            terbaik di industri.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {techs.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-8 transition hover:-translate-y-1 hover:border-white/40"
            >
              <div className="relative flex h-16 w-full items-center justify-center">
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={140}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-neutral-400 transition group-hover:text-white">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
