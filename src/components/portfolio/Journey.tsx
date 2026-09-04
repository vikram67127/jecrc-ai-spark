import { journey, type JourneyStage } from "@/data/portfolio";
import { Section } from "./Section";

const stateStyle: Record<JourneyStage["state"], { dot: string; text: string; label: string }> = {
  done: { dot: "bg-primary", text: "text-foreground", label: "Done" },
  current: { dot: "bg-primary live-dot", text: "text-primary", label: "Now" },
  next: { dot: "bg-accent", text: "text-accent", label: "Up next" },
  future: { dot: "bg-muted-foreground/40", text: "text-muted-foreground", label: "Ahead" },
};

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="05 · Learning Journey"
      title="The roadmap I'm walking"
      lead="An honest timeline — glowing stages are where I actually am, not where I wish I was."
    >
      <ol className="relative space-y-0 border-l border-border pl-6 sm:pl-8">
        {journey.map((s, i) => {
          const st = stateStyle[s.state];
          return (
            <li key={s.label} className="relative pb-8 last:pb-0">
              <span
                className={`absolute -left-[31px] top-1.5 size-3.5 rounded-full ring-4 ring-background sm:-left-[39px] ${st.dot}`}
                aria-hidden
              />
              <div className="glass flex flex-col gap-1 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className={`font-display font-semibold ${st.text}`}>
                    <span className="mr-2 font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{s.detail}</p>
                </div>
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {st.label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
