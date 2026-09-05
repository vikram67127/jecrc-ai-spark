import { ArrowUpRight, Github, Linkedin, Mail, Instagram, FileText } from "lucide-react";
import { links, profile } from "@/data/portfolio";
import { Section } from "./Section";

export function Contact() {
  const cards = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com / placeholder",
      href: links.github,
      note: "Repositories & experiments",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vishal-kumar-modi",
      href: links.linkedin,
      note: "Connect with me",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@suk.oon22222",
      href: links.instagram,
      note: "AI video reels",
    },
    {
      icon: Mail,
      label: "Email",
      value: links.email,
      href: `mailto:${links.email}`,
      note: "Fastest way to reach me",
    },
    links.resume
      ? {
          icon: FileText,
          label: "Resume",
          value: "Download resume",
          href: links.resume,
          note: "PDF, always up to date",
        }
      : {
          icon: FileText,
          label: "Resume",
          value: "Coming soon",
          href: "",
          note: "Will be added once ready",
        },
  ];

  return (
    <Section
      id="contact"
      eyebrow="07 · Contact"
      title="Let's build something"
      lead={`Currently: ${profile.year} at ${profile.college}. Reach out for hackathons, collaborations, or just to talk AI.`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => {
          const inner = (
            <>
              <c.icon className="size-5 text-primary" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 truncate font-display font-semibold">{c.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{c.note}</p>
              </div>
              {c.href && (
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </>
          );
          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-ring"
            >
              {inner}
            </a>
          ) : (
            <div key={c.label} className="glass flex items-start gap-4 rounded-2xl p-5 opacity-70">
              {inner}
            </div>
          );
        })}
      </div>
      <footer className="mt-16 border-t border-border/60 pt-8 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & built by {profile.name} · {new Date().getFullYear()} · Learning in public
        </p>
      </footer>
    </Section>
  );
}
