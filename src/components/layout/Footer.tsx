import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import logo from "../../assets/logo4.png";

const INSTAGRAM_URL = "https://www.instagram.com/ink.anne";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { to: "/flash", label: t("nav.flash") },
    { to: "/pokedex", label: "Pokédex" },
    { to: "/wishlist", label: t("nav.wishlist") },
    { to: "/gift", label: t("nav.gift") },
    { to: "/book", label: t("nav.book") },
  ];

  return (
    <footer className="bg-void border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" aria-label="Ink Anne — Home">
              <img src={logo} alt="Anne Nogueira" className="h-8 w-auto object-contain" />
            </Link>
            <p className="font-body font-light text-ink-tertiary text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 text-ink-tertiary">
              <MapPin size={13} strokeWidth={1.5} />
              <span className="font-label text-xs tracking-[0.15em]">{t("footer.studioLine")}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-label font-medium text-[10px] tracking-[0.25em] uppercase text-ink-tertiary mb-5">
              Páginas
            </p>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-label font-medium text-xs tracking-[0.15em] uppercase text-ink-secondary hover:text-phosphor transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-label font-medium text-[10px] tracking-[0.25em] uppercase text-ink-tertiary mb-5">
              Instagram
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
            >
              <span className="font-label font-medium text-sm tracking-widest text-phosphor group-hover:text-glow transition-colors duration-300">
                @ink.anne
              </span>
              <span
                className="text-phosphor group-hover:text-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-sm"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px bg-border mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label text-[11px] tracking-[0.15em] text-ink-tertiary">
            © {new Date().getFullYear()} Anne Nogueira. {t("footer.rights")}.
          </p>
          <p className="font-label text-[11px] tracking-[0.12em] text-ink-tertiary">
            Porto, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
