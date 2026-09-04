import { Github, Linkedin, Mail } from "lucide-react";
import { links, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden aurora">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 pb-24 pt-36">
        <div
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground reveal"
          style={{ animationDelay: "0ms" }}
        >
          <span className="live-dot inline-block size-2 rounded-full bg-primary" aria-hidden />
          {profile.available}
        </div>

        <h1
          className="mt-8 max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl reveal"
          style={{ animationDelay: "90ms" }}
        >
          <span className="text-gradient">{profile.headline}</span>
        </h1>

        <p
          className="mt-4 font-mono text-sm text-primary reveal"
          style={{ animationDelay: "160ms" }}
        >
          {profile.role}
        </p>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground reveal"
          style={{ animationDelay: "230ms" }}
        >
          {profile.intro}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 reveal"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#projects"
            className="rounded-xl bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            See what I'm building
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border px-6 py-3 font-display text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-xl p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Github className="size-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
              className="rounded-xl p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div
          className="mt-14 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground reveal"
          style={{ animationDelay: "380ms" }}
        >
          <span className="rounded-full border border-border px-3 py-1">{profile.year}</span>
          <span className="rounded-full border border-border px-3 py-1">{profile.college}</span>
          <span className="rounded-full border border-border px-3 py-1">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
