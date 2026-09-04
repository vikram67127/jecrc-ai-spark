import { Target } from "lucide-react";
import { goals } from "@/data/portfolio";
import { Section } from "./Section";

export function Goals() {
  return (
    <Section
      id="goals"
      eyebrow="06 · Future Goals"
      title="Where all of this is headed"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((g, i) => (
          <div
            key={i}
            className="glass group flex items-start gap-3 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-ring"
          >
            <Target className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed">{g}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
