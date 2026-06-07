import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import {
  contact,
  facts,
  profile,
  projects,
  skills,
  status,
} from "@/lib/data";

const SHELL = "mx-auto w-full max-w-[1180px] px-5 sm:px-8";

export default function Home() {
  return (
    <div id="top" className="relative z-10">
      <Nav />
      <main className={`${SHELL} border-x border-line`}>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Hero

function Hero() {
  return (
    <section className="relative border-b border-line py-20 sm:py-28">
      <p className="kicker rise" style={{ animationDelay: "0ms" }}>
        Portfolio — Index 2026
      </p>

      <h1
        className="rise font-display mt-6 text-[clamp(3.4rem,13vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.03em] text-ink"
        style={{ animationDelay: "80ms" }}
      >
        Stanley
        <br />
        <span className="italic text-accent">Yang</span>
        <span className="text-accent">.</span>
      </h1>

      <div
        className="accent-rule mt-8 h-[3px] w-40 bg-accent"
        aria-hidden
      />

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <p
          className="rise max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          style={{ animationDelay: "260ms" }}
        >
          {profile.intro}
        </p>

        <div
          className="rise space-y-3 md:justify-self-end md:text-right"
          style={{ animationDelay: "360ms" }}
        >
          <p className="mono text-[0.72rem] uppercase tracking-[0.18em] text-muted">
            {profile.tagline}
          </p>
          {status && (
            <p className="mono inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// About

function SectionTag({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="mono text-[0.72rem] tracking-[0.18em] text-accent">
        § {index}
      </span>
      <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line py-20 sm:py-24">
      <SectionTag index="01" title="About" />

      <div className="grid gap-14 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {profile.about.map((p, i) => (
            <Reveal key={i} index={i} as="div">
              <p
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug tracking-tight text-ink sm:text-[1.7rem]"
                    : "text-base leading-relaxed text-ink-soft sm:text-lg"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal index={3} className="pt-4">
            <h3 className="kicker mb-4">Stack &amp; Tools</h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="mono text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal index={1}>
          <div className="border-t border-ink/70 pt-5">
            <h3 className="kicker mb-6">Specification</h3>
            <dl className="space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="leader">
                  <dt className="mono text-[0.78rem] uppercase tracking-[0.1em] text-muted">
                    {f.label}
                  </dt>
                  <span className="leader__dots" aria-hidden />
                  <dd className="text-right text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Work

function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-b border-line py-20 sm:py-24">
      <SectionTag index="02" title="Selected Work" />

      <ol className="border-t border-line">
        {projects.map((project, i) => {
          const primary = project.demo ?? project.github;
          return (
            <Reveal as="li" key={project.title} index={i} className="block">
              <article className="proj group relative border-b border-line">
                <span
                  className="proj__bar absolute left-0 top-0 h-full w-[3px] bg-accent"
                  aria-hidden
                />
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-7 sm:gap-8 sm:py-9">
                  <span className="proj__idx mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    {primary ? (
                      <a
                        href={primary}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj__title font-display block text-3xl font-medium tracking-tight text-ink sm:text-5xl"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="proj__title font-display block text-3xl font-medium tracking-tight text-ink sm:text-5xl">
                        {project.title}
                      </span>
                    )}
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                      {project.tags.map((t) => (
                        <li key={t} className="mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {primary && (
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-ink transition-colors hover:text-accent"
                    >
                      <ArrowUpRightIcon className="h-7 w-7 sm:h-9 sm:w-9" />
                    </a>
                  )}
                </div>

                <div className="proj__desc">
                  <div className="grid gap-6 pb-8 pl-9 sm:grid-cols-[1fr_auto] sm:pl-12">
                    <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <div className="flex items-start gap-5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ulink mono inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.12em] text-ink"
                        >
                          <GitHubIcon className="h-4 w-4" /> Source
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ulink mono inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.12em] text-ink"
                        >
                          <ArrowUpRightIcon className="h-4 w-4" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}

// Contact

function Contact() {
  const socials = [
    contact.github && { href: contact.github, label: "GitHub", Icon: GitHubIcon },
    contact.linkedin && { href: contact.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof GitHubIcon }[];

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-28">
      <SectionTag index="03" title="Get in Touch" />

      <Reveal>
        <p className="kicker">Let&apos;s build something</p>
        <h2 className="font-display mt-4 text-[clamp(2.6rem,9vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-ink">
          Say <span className="italic text-accent">hello</span>.
        </h2>
      </Reveal>

      <Reveal index={1} className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            I&apos;m always open to new opportunities and good conversations.
            The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="ulink font-display mt-6 inline-flex items-center gap-3 text-2xl text-ink sm:text-3xl"
          >
            <MailIcon className="h-6 w-6 text-accent" />
            {contact.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="ulink mono inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.14em] text-ink"
            >
              <Icon className="h-4 w-4 text-accent" /> {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

// Footer

function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className={`${SHELL} flex flex-col gap-2 border-x border-line py-7 sm:flex-row sm:items-center sm:justify-between`}>
        <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          © {new Date().getFullYear()} {profile.name} — Malden, MA
        </p>
        <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          Set in Fraunces &amp; JetBrains Mono
        </p>
      </div>
    </footer>
  );
}
