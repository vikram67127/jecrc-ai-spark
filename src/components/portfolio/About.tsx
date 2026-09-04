import { Sparkles } from "lucide-react";
import { about } from "@/data/portfolio";
import { Section } from "./Section";

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Generative AI",
  "Automation",
  "Web Technologies",
  "AI-generated Video",
  "Graphic Design",
  "Video Editing & VFX",
  "Animation & 3D",
  "Hackathons",
  "Real-world Products",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="A beginner who takes building seriously"
      lead="Honest about where I am today, focused on where I'm going."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="glass flex items-start gap-3 rounded-2xl p-4 text-sm">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <span>
              I'm a <strong className="text-foreground">first-year student, not an expert</strong> —
              and I'm okay with that. This portfolio documents the process: what I'm learning,
              what I'm experimenting with, and what I manage to ship.
            </span>
          </p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Things I'm curious about
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {interests.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
