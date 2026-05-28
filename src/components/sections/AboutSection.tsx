import { useTranslation } from "react-i18next";
import annePhoto from "../../assets/ink.anne.png";

const INSTAGRAM_URL = "https://www.instagram.com/ink.anne";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-abyss overflow-hidden">
      {/* ── Ghost "ANNE" watermark ──────────────────────────────────── */}
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-display font-black select-none pointer-events-none leading-none text-white/2.5 whitespace-nowrap"
        style={{ fontSize: "clamp(8rem, 28vw, 22rem)" }}
      >
        ANNE
      </span>

      {/* ── Top border rule ─────────────────────────────────────────── */}
      <div className="w-full h-px bg-border" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        {/* ── Section eyebrow ─────────────────────────────────────────── */}
        <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-20 text-center">
          {t("about.eyebrow")}
        </p>

        {/* ── Two-column grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* ── Photo column ──────────────────────────────────────────── */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div
              className="relative w-72 sm:w-80 lg:w-full max-w-sm"
              style={{ aspectRatio: "3 / 4" }}
            >
              {/*
               * Photo with white-background treatment:
               * ① The image is displayed normally with object-contain.
               * ② A radial vignette overlay (dark at edges, transparent
               *   in the centre) covers the white background around the
               *   subject while keeping the person fully visible.
               * ③ A subtle green accent line runs along the left edge
               *   as a brand accent.
               *
               * To activate: uncomment the <img> and remove the placeholder.
               */}

              {/* ── Placeholder (remove once anne.jpg is added) ──────── */}

              {/* ── Photo ────────────────────────────────────────────── */}
              <img
                src={annePhoto}
                alt="Anne Nogueira — Tattoo Artist"
                className="w-full h-full object-contain"
                style={{ filter: "contrast(1.06) brightness(0.97)" }}
              />

              {/* ── Radial vignette — erases white edges ─────────────── */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 68% 72% at 50% 42%, transparent 32%, rgba(13,15,14,0.55) 56%, rgba(13,15,14,0.97) 76%)",
                }}
              />

              {/* ── Green left accent line ────────────────────────────── */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-linear-to-b from-transparent via-phosphor to-transparent" />
            </div>
          </div>

          {/* ── Text column ───────────────────────────────────────────── */}
          <div className="order-1 lg:order-2">
            {/* "A N N E" spaced display title */}
            <h2
              className="font-display font-black text-white leading-none mb-10 whitespace-nowrap"
              style={{
                fontSize: "clamp(2rem, 5vw, 6.5rem)",
                letterSpacing: "0.35em",
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
