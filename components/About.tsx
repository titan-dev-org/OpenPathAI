import { Rocket, Users, Code2, Globe } from "lucide-react";

const stats = [
  { icon: Code2, value: "6+", label: "Model Dirilis" },
  { icon: Users, value: "Baru", label: "Community" },
  { icon: Rocket, value: "Open", label: "Source" },
  { icon: Globe, value: "∞", label: "Gratis Dipakai" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Tentang Kami
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              OpenPathAI membangun AI terbuka untuk{" "}
              <span className="gradient-text">Indonesia & dunia</span>
            </h2>
            <p className="mt-6 text-neutral-400">
              OpenPathAI adalah startup AI open source yang berfokus pada
              pengembangan model bahasa, vision-language, image generation,
              dan computer vision yang dapat diakses siapa saja. Semua model
              kami dirilis secara publik di Hugging Face dengan lisensi
              terbuka.
            </p>
            <p className="mt-4 text-neutral-400">
              Misi kami sederhana: membuat AI canggih menjadi demokratis.
              Kami percaya inovasi terbaik lahir dari kolaborasi terbuka,
              bukan dari kotak hitam tertutup.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-surface p-6 transition hover:border-emerald-500/50"
                >
                  <Icon className="text-emerald-400" size={22} />
                  <p className="mt-4 text-3xl font-bold">{s.value}</p>
                  <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
