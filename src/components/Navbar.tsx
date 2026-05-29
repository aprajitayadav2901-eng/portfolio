import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      sections.forEach((s, i) => {
        if (s && s instanceof HTMLElement && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(links[i].href);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all ${
          scrolled ? "glass mx-4 md:mx-auto" : ""
        }`}
        style={scrolled ? { padding: "0.75rem 1.5rem" } : undefined}
      >
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-gradient">APRAJITA</span>
          <span className="h-2 w-2 rounded-full bg-[var(--neon-blue)] animate-pulse" />
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  active === l.href
                    ? "text-[var(--neon-blue)] bg-[oklch(0.72_0.22_250/0.1)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass mx-4 mt-2 rounded-2xl p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-[oklch(0.72_0.22_250/0.1)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
