// Site content lives here — edit this, not the components.

export const profile = {
  name: "Stanley Yang",
  tagline: "Full-Stack Developer",
  intro:
    "Computer Science graduate building full-stack web applications. I care about clean code, intuitive design, and shipping products that solve real problems.",
  about: [
    "Hi, I'm Stanley — a Computer Science graduate from UMass Amherst and a full-stack developer based just outside Boston.",
    "I build full-stack web apps end to end, from designing PostgreSQL schemas and Express/Node APIs to crafting polished React frontends. I'm currently working on UseItUp, and recently shipped FiveCollegeConnect, a platform connecting Five College students for tutoring, collaboration, and research.",
    "Outside of building, I spent over two years as a peer tutor at the Learning Resource Center, leading 200+ sessions across eight courses — I genuinely enjoy breaking down hard concepts and helping people learn.",
    "Away from the keyboard, I'm usually playing board games - Splendor and Avalon are my favorites.",
  ],
  location: "Malden, MA",
  resumeUrl: null as string | null,
};

export const status: string | null = "Available for new opportunities";

// Spec-sheet rows in the About section.
export const facts: { label: string; value: string }[] = [
  { label: "Education", value: "B.S. Computer Science, UMass Amherst" },
  { label: "Class", value: "2026" },
  { label: "GPA", value: "3.955 / 4.0" },
  { label: "Honors", value: "Dean's List — 8 semesters" },
  { label: "Based in", value: "Malden, MA" },
  { label: "Languages", value: "English · Mandarin" },
];

export const contact = {
  email: "yangstanley2022@gmail.com",
  github: "https://github.com/Stanley9986",
  linkedin: "https://linkedin.com/in/stanley-yang-13ab34340/",
};

export const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  featured?: boolean;
};

// Top of the list shows first.
export const projects: Project[] = [
  {
    title: "UseItUp",
    description:
      "My current project. (Add a one-line description of what UseItUp does here.)",
    tags: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/Stanley9986/UseItUp",
    demo: null,
    featured: true,
  },
  {
    title: "FiveCollegeConnect",
    description:
      "A full-stack platform for Five College students to find tutoring, technical help, project collaborators, research opportunities, and skill-based work. Features token-based email verification via Mailjet, user profiles, listings, and applications, backed by a structured PostgreSQL database.",
    tags: ["React", "Express", "Node.js", "PostgreSQL", "Vercel"],
    github: "https://github.com/llasic7558/520_Group_Proj/",
    demo: "https://fivecollegeconnect.vercel.app/",
    featured: true,
  },
  {
    title: "Stargazer",
    description:
      "A web app that generates custom star maps for selected constellations, with weather lookup, aurora forecasts, a red night mode, address autocomplete, and sortable celestial-event pages.",
    tags: ["React", "TypeScript", "shadcn/ui"],
    github: "https://github.com/Stanley9986/stargazer",
    demo: "https://stargazer320.vercel.app/",
  },
  {
    title: "Rapid Point Reaching Controller",
    description:
      "A hybrid controller combining inverse kinematics and gravity-biased joint-space PD for a 6-DoF robotic arm. A Newton-Raphson IK solver with dynamic gain adaptation plus a heap-based uniform-cost search achieved a 100% success rate and a 1.38s mean reach time in competition.",
    tags: ["Python", "Robotics", "Inverse Kinematics"],
    github: "https://github.com/Stanley9986/rapid-reaching-controller",
    demo: null,
  },
];
