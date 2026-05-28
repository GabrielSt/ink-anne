import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo4.png";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < 10;
      const scrollingUp = currentY < lastScrollY.current;

      setAtTop(isAtTop);
      setVisible(isAtTop || scrollingUp);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500 ease-in-out",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        atTop
          ? "py-4 bg-transparent border-transparent"
          : "py-3 bg-void/92 backdrop-blur-md border-b border-border",
      ].join(" ")}
    >
      <div className="relative flex items-center justify-center h-full px-6 max-w-360 mx-auto">
        {/* ── Left nav slot (future) ── */}
        <nav className="absolute left-6 hidden lg:flex items-center gap-8">
          {/* Navigation links will appear here */}
        </nav>

        {/* ── Logo centered ── */}
        <a href="/" aria-label="Ink Anne — Home">
          <img
            src={logo}
            alt="Anne Nogueira"
            className={[
              "w-auto object-contain select-none",
              "transition-all duration-500 ease-in-out",
              atTop ? "h-56" : "h-10",
            ].join(" ")}
            draggable={false}
          />
        </a>

        {/* ── Right slot (future: lang toggle + CTA) ── */}
        <div className="absolute right-6 hidden lg:flex items-center gap-6">
          {/* Language toggle and CTA will appear here */}
        </div>

        {/* ── Mobile: hamburger slot (future) ── */}
        <button
          className="absolute right-6 lg:hidden flex flex-col gap-1.25 p-2 opacity-0 pointer-events-none"
          aria-label="Open menu"
          aria-expanded={false}
          type="button"
        >
          <span className="block w-6 h-px bg-ink-primary transition-all duration-300" />
          <span className="block w-6 h-px bg-ink-primary transition-all duration-300" />
          <span className="block w-4 h-px bg-ink-primary transition-all duration-300" />
        </button>
      </div>
    </header>
  );
}
