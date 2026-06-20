import { useTranslation } from "react-i18next";
import annePhoto from "../../assets/ink.anne3.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/ink.anne";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-abyss overflow-hidden">
      {/* ── Top border rule ─────────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        {/* ── Section eyebrow ─────────────────────────────────────────── */}
        <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-20 text-center">
          {t("about.eyebrow")}
        </p>

        {/* ── Two-column grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          {/* ── Photo column ──────────────────────────────────────────── */}
          <div className="order-2 lg:order-1 min-h-[500px] lg:min-h-0">
            <img
              src={annePhoto}
              alt="Anne Nogueira — Tattoo Artist at SALL Studio Porto"
              className="w-full h-full object-cover object-center"
              style={{ maxHeight: "680px" }}
            />
          </div>

          {/* ── Text column ───────────────────────────────────────────── */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {/* Name display title */}
            <h2
              className="font-display font-black text-white leading-none mb-10"
              style={{
                fontSize: "clamp(2rem, 5vw, 6.5rem)",
                letterSpacing: "0.12em",
              }}
            >
              {t("about.title")}
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-5 mb-10">
              <p className="font-body font-light text-ink-secondary leading-[1.8] text-base lg:text-lg">
                {t("about.bio1")}
              </p>
              <p className="font-body font-light text-ink-secondary leading-[1.8] text-base lg:text-lg">
                {t("about.bio2")}
              </p>
              <p className="font-body font-light text-ink-secondary leading-[1.8] text-base lg:text-lg">
                {t("about.bio3")}
              </p>
              <p className="font-body font-light text-ink-secondary leading-[1.8] text-base lg:text-lg">
                {t("about.bio4")}
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-fern mb-8" />

            {/* Instagram link */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-label font-medium text-sm tracking-widest text-phosphor group-hover:text-glow transition-colors duration-300">
                {t("about.handle")}
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
      </div>

      {/* ── Bottom border rule ───────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />
    </section>
  );
}
