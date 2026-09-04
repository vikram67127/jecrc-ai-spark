import { skillGroups, type SkillGroup } from "@/data/portfolio";
import { Section } from "./Section";

const levelStyle: Record<SkillGroup["items"][number]["level"], string> = {
  Learning: "border-primary/40 text-primary",
  Practising: "border-accent/40 text-accent",
  Exploring: "border-border text-muted-foreground",
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Currently learning"
      lead="No inflated skill bars — just an honest map of what I'm working on right now."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((g) => (
          <article
            key={g.title}
            className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-ring"
          >
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{g.note}</p>
            <ul className="mt-5 space-y-3">
              {g.items.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-3">
                  <span className="text-sm">{s.name}</span>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${levelStyle[s.level]}`}
                  >
                    {s.level}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        Legend: <span className="text-primary">learning</span> = actively studying ·{" "}
        <span className="text-accent">practising</span> = building with it ·{" "}
        <span className="text-muted-foreground">exploring</span> = just started poking around
      </p>
    </Section>
  );
}
