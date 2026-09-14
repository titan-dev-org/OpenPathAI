import { ExternalLink } from "lucide-react";
import type { AIModel } from "@/lib/models";

export default function ModelCard({ model }: { model: AIModel }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.15)]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-border p-6">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-white">
            {model.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
            {model.task}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-border bg-black px-3 py-1 text-xs font-medium text-neutral-300">
          {model.params}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-neutral-400">
          {model.description}
        </p>

        {(model.precision !== "—" || model.domain) && (
          <div className="mt-5 grid grid-cols-2 gap-2">
            {model.precision !== "—" && (
              <div className="rounded-lg border border-border bg-black/50 px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                  Presisi
                </p>
                <p className="mt-0.5 text-xs font-medium text-neutral-200">
                  {model.precision}
                </p>
              </div>
            )}
            {model.domain && (
              <div className="rounded-lg border border-border bg-black/50 px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                  Domain
                </p>
                <p className="mt-0.5 truncate text-xs font-medium text-neutral-200">
                  {model.domain}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {model.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-black px-2.5 py-0.5 text-[11px] text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <a
          href={model.hfUrl}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Lihat di Hugging Face <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
          }
