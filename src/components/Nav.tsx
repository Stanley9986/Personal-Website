import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About", index: "01" },
  { href: "#work", label: "Work", index: "02" },
  { href: "#contact", label: "Contact", index: "03" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="mono text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink"
        >
          {profile.name}
          <span className="ml-2 hidden text-muted sm:inline">
            / {profile.tagline}
          </span>
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent"
            >
              <span className="text-muted transition-colors group-hover:text-accent">
                {link.index}
              </span>{" "}
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
