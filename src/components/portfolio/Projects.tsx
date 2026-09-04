import { ArrowUpRight, Github, Image as ImageIcon } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Section } from "./Section";

const statusStyle: Record<Project["status"], string> = {
  Idea: "border-border text-muted-foreground",
  Building: "border-accent/40 text-accent",
  Completed: "border-primary/40 text-primary",
};

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="glass group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:glow-ring">
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.name} preview`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="grid aspect-video w-full place-items-center bg-secondary/40">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="size-8" aria-hidden />
            <span className="font-mono text-xs">project image placeholder</span>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">{p.name}</h3>
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyle[p.status]}`}
          >
            {p.status}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-foreground/80">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
          {p.github ? (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-4" /> Code
            </a>
          ) : (
            <span className="font-mono text-xs text-muted-foreground/60">code — soon</span>
          )}
          {p.demo ? (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowUpRight className="size-4" /> Live demo
            </a>
          ) : (
            <span className="font-mono text-xs text-muted-foreground/60">demo — soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Things I'm building"
      lead="Slots reserved and ready — real projects land here as I finish them."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.name}-${i}`} p={p} />
        ))}
      </div>
    </Section>
  );
}
