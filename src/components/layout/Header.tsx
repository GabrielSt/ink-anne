import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X, Menu } from "lucide-react";
import logo from "../../assets/logo4.png";
import pokedexLogo from "../../assets/pokedex_logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/ink.anne";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleLang = () => i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");

  const showScrolledStyle = !isHome || !atTop;

  const leftLinks = [
    { to: "/flash", label: t("nav.flash"), pokedex: false },
    { to: "/pokedex", label: "POKÉDEX", pokedex: true },
    { to: "/wishlist", label: t("nav.wishlist"), pokedex: false },
  ];

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          showScrolledStyle
            ? "py-3 bg-void/95 backdrop-blur-md border-b border-border"
            : "py-4 bg-transparent border-transparent",
        ].join(" ")}
      >
        <div className="relative flex items-center justify-center h-full px-6 max-w-7xl mx-auto">

          {/* ── Left nav ── */}
          <nav
            className={[
              "absolute left-6 hidden lg:flex items-center gap-7 transition-all duration-300",
              showScrolledStyle ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            {leftLinks.map((link) =>
              link.pokedex ? (
                <Link key={link.to} to={link.to} className="group opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <img
                    src={pokedexLogo}
                    alt="Pokédex"
                    className="h-7 w-auto object-contain"
                    style={{ filter: "brightness(1.05) drop-shadow(0 0 6px rgba(185,28,28,0.5))" }}
                  />
                </Link>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-label font-medium text-sm tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Logo ── */}
          <Link to="/" aria-label="Ink Anne — Home">
            <img
              src={logo}
              alt="Anne Nogueira"
              className={[
                "w-auto object-contain select-none transition-all duration-500 ease-in-out",
                isHome && atTop ? "h-56" : "h-10",
              ].join(" ")}
              draggable={false}
            />
          </Link>

          {/* ── Right nav ── */}
          <div
            className={[
              "absolute right-6 hidden lg:flex items-center gap-5 transition-all duration-300",
              showScrolledStyle ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <Link
              to="/gift"
              className="font-label font-medium text-xs tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-200"
            >
              {t("nav.gift")}
            </Link>

            {/* Language toggle */}
            <button onClick={toggleLang} className="flex items-center gap-1 font-label font-medium text-[11px] tracking-widest">
              <span className={i18n.language === "pt" ? "text-ink-primary" : "text-ink-tertiary hover:text-ink-secondary"}>PT</span>
              <span className="text-ink-tertiary">/</span>
              <span className={i18n.language === "en" ? "text-ink-primary" : "text-ink-tertiary hover:text-ink-secondary"}>EN</span>
            </button>

            {/* Book CTA — slightly more distinctive than generic square */}
            <Link
              to="/book"
              className="relative inline-flex items-center gap-2 bg-phosphor text-void font-label font-medium text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 hover:bg-glow transition-colors duration-200 group"
            >
              {t("nav.book")}
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen(true)}
            className={[
              "absolute right-6 lg:hidden p-2 transition-all duration-300",
              showScrolledStyle ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
            aria-label="Open menu"
            type="button"
          >
            <Menu size={20} strokeWidth={1.5} className="text-ink-primary" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={[
          "fixed inset-0 z-[60] lg:hidden transition-all duration-400 ease-in-out",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        <div
          className={[
            "absolute right-0 top-0 bottom-0 w-72 bg-abyss border-l border-border flex flex-col px-8 py-10 transition-transform duration-400 ease-in-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 p-2" aria-label={t("nav.close")}>
            <X size={18} strokeWidth={1.5} className="text-ink-secondary" />
          </button>

          <img src={logo} alt="Ink Anne" className="h-8 w-auto object-contain mb-12" />

          <nav className="flex flex-col gap-6">
            {leftLinks.map((link) =>
              link.pokedex ? (
                <Link key={link.to} to={link.to} className="inline-flex items-center opacity-85 hover:opacity-100 transition-opacity duration-200">
                  <img
                    src={pokedexLogo}
                    alt="Pokédex"
                    className="h-6 w-auto object-contain"
                    style={{ filter: "brightness(1.05) drop-shadow(0 0 6px rgba(185,28,28,0.5))" }}
                  />
                </Link>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-label font-medium text-sm tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/gift" className="font-label font-medium text-sm tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-200">
              {t("nav.gift")}
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <button onClick={toggleLang} className="flex items-center gap-2 font-label font-medium text-xs tracking-widest self-start">
              <span className={i18n.language === "pt" ? "text-phosphor" : "text-ink-tertiary"}>PT</span>
              <span className="text-ink-tertiary">/</span>
              <span className={i18n.language === "en" ? "text-phosphor" : "text-ink-tertiary"}>EN</span>
            </button>
            <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-phosphor text-void font-label font-medium text-xs tracking-[0.14em] uppercase px-4 py-3 hover:bg-glow transition-colors duration-200">
              {t("nav.book")} →
            </Link>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-label text-xs tracking-widest text-ink-tertiary hover:text-phosphor transition-colors duration-200">
              @ink.anne ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
