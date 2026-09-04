import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Section } from "./Section";

export function Hackathons() {
  return (
    <Section
      id="hackathons"
      eyebrow="04 · Hackathons & Achievements"
      title="Where I compete and grow"
    >
      {achievements.length === 0 ? (
        <div className="glass rounded-2xl p-8 text-center">
          <Trophy className="mx-auto size-8 text-primary" aria-hidden />
          <h3 className="mt-4 font-display text-xl font-semibold">This space is waiting for its first entry</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            I haven't taken part in a hackathon yet — that's a near-term goal. When I do, the
            results (win or learn) get documented here, honestly.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {achievements.map((a, i) => (
            <li key={i} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold">{a.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{a.date}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
