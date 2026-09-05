/**
 * EDIT THIS FILE TO UPDATE YOUR PORTFOLIO.
 * Everything shown on the site comes from here.
 * Items marked TODO are placeholders — replace them with real info.
 */

export const profile = {
  name: "Vishal Kumar Modi",
  headline: "Learning AI. Building Ideas. Creating the Future.",
  role: "AI/ML Enthusiast · Builder · Lifelong Learner",
  intro:
    "I'm Vishal Kumar Modi, a first-year B.Tech student exploring AI/ML, Data Science and emerging technologies. I'm currently learning the fundamentals, experimenting with AI tools, making AI video reels on Instagram, participating in hackathons and turning ideas into real projects.",
  college: "JECRC University, Jaipur",
  year: "First-year B.Tech student",
  location: "Jaipur, India",
  available: "Open to hackathons, collaborations and internships",
};

export const links = {
  github: "https://github.com/", // TODO: add your GitHub profile URL
  linkedin:
    "https://www.linkedin.com/in/vishal-kumar-modi-a35247389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "your.email@example.com", // TODO: add your email
  resume: "", // TODO: add a link to your resume (leave empty to show "coming soon")
  twitter: "", // optional
  instagram: "https://instagram.com/suk.oon22222", // AI video reels
};

export const about = [
  "I'm at the very beginning of my technical journey, starting from the fundamentals and improving a little every day. Rather than only reading theory, I like to build small things, break them, and understand why they work.",
  "My interests sit at the intersection of AI/ML, Data Science and creative technology — I also enjoy experimenting with AI-generated video, graphic design, video editing, VFX, animation and 3D.",
  "My long-term goal is to become an industry-ready AI/ML Engineer / Data Scientist who ships practical products that solve real problems.",
];

export type SkillGroup = {
  title: string;
  note: string;
  items: { name: string; level: "Exploring" | "Learning" | "Practising" }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Foundations",
    note: "Where most of my time goes right now",
    items: [
      { name: "Python", level: "Learning" },
      { name: "C Programming (college curriculum)", level: "Learning" },
      { name: "Problem Solving", level: "Practising" },
      { name: "Mathematics for AI/ML", level: "Learning" },
    ],
  },
  {
    title: "AI / ML & Data",
    note: "Fundamentals first, projects alongside",
    items: [
      { name: "AI/ML Fundamentals", level: "Learning" },
      { name: "Data Science Fundamentals", level: "Learning" },
      { name: "Generative AI Tools", level: "Practising" },
      { name: "Automation Ideas", level: "Exploring" },
    ],
  },
  {
    title: "Tools & Web",
    note: "The everyday builder toolkit",
    items: [
      { name: "Git & GitHub", level: "Learning" },
      { name: "Web Technologies", level: "Exploring" },
      { name: "Design / Video / VFX / 3D", level: "Practising" },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string; // e.g. "/images/project-one.jpg"
  status: "Idea" | "Building" | "Completed";
};

/**
 * Add your projects here. Delete the placeholder entries once you have real ones.
 */
export const projects: Project[] = [
  {
    name: "Project slot — coming soon",
    description:
      "Placeholder. My first AI/ML mini-project will live here once it's ready.",
    tech: ["Python"],
    status: "Idea",
  },
  {
    name: "Project slot — coming soon",
    description:
      "Placeholder. A data-focused project idea I'm planning to build.",
    tech: ["Python", "Data"],
    status: "Idea",
  },
  {
    name: "Project slot — coming soon",
    description: "Placeholder. Space reserved for a hackathon build.",
    tech: ["TBD"],
    status: "Idea",
  },
];

export type Achievement = {
  title: string;
  detail: string;
  date: string;
};

/** No fake entries — add real hackathons/achievements here as they happen. */
export const achievements: Achievement[] = [];

export type JourneyStage = {
  label: string;
  detail: string;
  state: "done" | "current" | "next" | "future";
};

export const journey: JourneyStage[] = [
  { label: "Fundamentals", detail: "Getting comfortable with how computers and code think", state: "current" },
  { label: "Python", detail: "Syntax, logic, small scripts and daily practice", state: "current" },
  { label: "Mathematics", detail: "Linear algebra, statistics and calculus for ML", state: "next" },
  { label: "Data", detail: "Cleaning, exploring and visualising real datasets", state: "next" },
  { label: "AI / ML", detail: "Core algorithms, models and how they actually learn", state: "future" },
  { label: "Projects", detail: "Turning what I learn into things people can use", state: "future" },
  { label: "Hackathons", detail: "Building under pressure with teams", state: "future" },
  { label: "Internships", detail: "Learning inside a real engineering team", state: "future" },
  { label: "Industry", detail: "Becoming an industry-ready AI/ML Engineer", state: "future" },
];

export const goals = [
  "Become strong in AI/ML and Data Science",
  "Build meaningful real-world projects",
  "Participate in hackathons",
  "Get internships during college",
  "Become job-ready for high-quality AI/ML roles",
  "Build a strong public portfolio and GitHub presence",
];
