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
    <footer className="bg-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" aria-label="Ink Anne — Home">
              <img src={logo} alt="Anne Nogueira" className="h-8 w-auto object-contain" />
            </Link>
            <p className=" text-paper-mute text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 text-paper-mute">
              <MapPin size={13} strokeWidth={1.5} />
              <span className="text-sm">{t("footer.studioLine")}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-sm text-paper-mute mb-5">
              {t("footer.pages")}
            </p>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-semibold text-paper-dim hover:text-green transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-sm text-paper-mute mb-5">
              Instagram
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
            >
              <span className="font-semibold text-green group-hover:text-green-light transition-colors duration-300">
                @ink.anne
              </span>
              <span
                className="text-green group-hover:text-green-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-sm"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px bg-line mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper-mute">
            © {new Date().getFullYear()} Anne Nogueira. {t("footer.rights")}.
          </p>
          <p className="text-xs text-paper-mute">
            Porto, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
