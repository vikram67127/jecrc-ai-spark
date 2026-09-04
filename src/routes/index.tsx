import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Hackathons } from "@/components/portfolio/Hackathons";
import { Journey } from "@/components/portfolio/Journey";
import { Goals } from "@/components/portfolio/Goals";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal Kumar Modi — AI/ML Student & Builder" },
      {
        name: "description",
        content:
          "Portfolio of Vishal Kumar Modi, first-year B.Tech student at JECRC University Jaipur, learning AI/ML, Data Science and building real-world projects.",
      },
      { property: "og:title", content: "Vishal Kumar Modi — AI/ML Student & Builder" },
      {
        property: "og:description",
        content:
          "Learning AI. Building Ideas. Creating the Future. Portfolio of a first-year B.Tech student exploring AI/ML and Data Science.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--9b66d191-0782-4d3d-83bc-2684b69ea3df.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vishal Kumar Modi",
          description:
            "First-year B.Tech student at JECRC University Jaipur learning AI/ML, Data Science and modern technology.",
          alumniOf: "JECRC University, Jaipur",
          knowsAbout: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python", "Generative AI"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Journey />
        <Goals />
        <Contact />
      </main>
    </div>
  );
}
