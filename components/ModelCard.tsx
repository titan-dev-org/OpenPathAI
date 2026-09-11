import { ExternalLink } from "lucide-react";
import type { AIModel } from "@/lib/models";

export default function ModelCard({ model }: { model: AIModel }) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-white/40">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold">{model.name}</h3>
          <p className="mt-0.5 text-xs text-neutral-500">{model.task}</p>
        </div>
        <span className="shrink-0 rounded-md border border-border bg-black px-2 py-1 text-xs text-neutral-400">
          {model.params}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm text-neutral-400">
        {model.description}
      </p>

      {(model.precision !== "—" || model.domain) && (
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {model.precision !== "—" && (
            <span className="rounded-md border border-border bg-black px-2 py-1 text-neutral-400">
              Presisi: {model.precision}
            </span>
          )}
          {model.domain && (
            <span className="rounded-md border border-border bg-black px-2 py-1 text-neutral-400">
              Domain: {model.domain}
            </span>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {model.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-black px-2.5 py-0.5 text-[11px] text-neutral-400"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={model.hfUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
      >
        Lihat di Hugging Face <ExternalLink size={14} />
      </a>
    </div>
  );
                        }
