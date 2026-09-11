import ModelCard from "@/components/ModelCard";
import { models } from "@/lib/models";

export const metadata = {
  title: "Models — OpenPathAI",
  description:
    "Daftar model AI open source OpenPathAI: Orbit 3 VL Flash, Orbit 3 8B Llama Thinking, Orbit 1.2 Image, dan YOLO Detection.",
};

export default function ModelsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Katalog
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Model AI Kami
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Semua model dirilis secara open source di Hugging Face dengan
            arsitektur dan domain pelatihan yang beragam.
          </p>
        </div>
        <div className="text-sm text-neutral-500">
          {models.length} model tersedia
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((m) => (
          <ModelCard key={m.id} model={m} />
        ))}
      </div>
    </section>
  );
}
