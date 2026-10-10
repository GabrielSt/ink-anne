import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X, Menu } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/ink.anne";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  // Remember which page the menu was opened on, so navigating closes it
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  const isHome = location.pathname === "/";
  const menuOpen = menuOpenAt === location.pathname;

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 10);
      // Hide as soon as the user scrolls down; come back on any scroll up
      setHidden(currentY > 10 && currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleLang = () => i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  const closeMenu = () => setMenuOpenAt(null);

  // While sliding away the bar stays transparent, so the background never
  // flashes in just before it hides; it only turns solid when it comes back
  const solid = (!isHome || !atTop) && !hidden;

  const links = [
    { to: "/flash", label: t("nav.flash") },
    { to: "/pokedex", label: t("nav.pokedex") },
    { to: "/wishlist", label: t("nav.wishlist") },
    { to: "/gift", label: t("nav.gift") },
  ];

  const langToggle = (
    <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm font-semibold" type="button">
      <span className={i18n.language === "pt" ? "text-paper" : "text-paper-mute hover:text-paper-dim"}>PT</span>
      <span className="text-paper-mute">/</span>
      <span className={i18n.language === "en" ? "text-paper" : "text-paper-mute hover:text-paper-dim"}>EN</span>
    </button>
  );

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,border-color] duration-300 ease-out border-b",
          solid ? "bg-ink/75 backdrop-blur-md border-line/60" : "bg-transparent border-transparent",
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-6 h-16 px-6 lg:px-10 max-w-7xl mx-auto">
          {/* ── Name ── */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="font-display font-semibold text-xl text-paper whitespace-nowrap"
          >
            Anne Nogueira
          </Link>

          {/* ── Centre nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={[
                  "font-semibold text-[15px] transition-colors duration-200",
                  location.pathname === link.to ? "text-paper" : "text-paper-dim hover:text-paper",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right ── */}
          <div className="hidden lg:flex items-center gap-6">
            {langToggle}
            <Link
              to="/book"
              className="inline-flex items-center rounded-full bg-green text-ink font-semibold text-sm px-5 py-2.5 hover:bg-green-light transition-colors duration-200"
            >
              {t("nav.book")}
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpenAt(location.pathname)}
            className="lg:hidden -mr-2 p-2"
            aria-label={t("nav.open")}
            aria-expanded={menuOpen}
            type="button"
          >
            <Menu size={22} strokeWidth={1.75} className="text-paper" />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu (frosted glass) ── */}
      <div
        className={[
          "fixed inset-0 z-60 lg:hidden flex flex-col bg-ink/70 backdrop-blur-2xl transition-opacity duration-300 ease-out",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-16 px-6">
          <Link to="/" onClick={closeMenu} className="font-display font-semibold text-xl text-paper">
            Anne Nogueira
          </Link>
          <button onClick={closeMenu} className="-mr-2 p-2" aria-label={t("nav.close")} type="button">
            <X size={22} strokeWidth={1.75} className="text-paper" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-6 pt-6">
          {links.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={[
                "py-4 border-b border-paper/10 text-xl font-semibold transition-all duration-400 ease-out",
                location.pathname === link.to ? "text-green" : "text-paper",
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
              ].join(" ")}
              style={{ transitionDelay: menuOpen ? `${60 + i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-5 px-6 pb-10">
          <Link
            to="/book"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full bg-green text-ink font-semibold text-lg py-4 hover:bg-green-light transition-colors duration-200"
          >
            {t("nav.book")}
          </Link>
          <div className="flex items-center justify-between">
            {langToggle}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-paper-dim hover:text-green transition-colors duration-200"
            >
              @ink.anne ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
