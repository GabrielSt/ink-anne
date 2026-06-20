import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { flashDesigns } from "../../data/flashDesigns";

// Show the first 4 flash designs as preview
const previewFlashes = flashDesigns.slice(0, 4);

const styleColors: Record<string, string> = {
  anime: "Anime",
  color: "Cor",
  fineline: "Fine Line",
  blackwork: "Blackwork",
  minimalist: "Minimalista",
  floral: "Floral",
};

export default function FlashTeaserSection() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-void overflow-hidden">
      <div className="w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div
          ref={ref}
          className={[
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4">
                {t("flashTeaser.eyebrow")}
              </p>
              <h2
                className="font-display font-black text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                {t("flashTeaser.title")}
              </h2>
            </div>
          </div>

          <p className="font-body font-light text-ink-secondary leading-relaxed max-w-lg mb-12">
            {t("flashTeaser.desc")}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-12">
            {previewFlashes.map((flash, i) => {
              const name = i18n.language === "pt" ? flash.namePt : flash.nameEn;
              const styleLabel = styleColors[flash.style] ?? flash.style;
              const isAvailable = flash.status === "available";

              return (
                <div
                  key={flash.id}
                  className="bg-void p-6 flex flex-col gap-4"
                  style={{ transitionDelay: inView ? `${i * 60}ms` : "0ms" }}
                >
                  {/* Image placeholder */}
                  <div className="aspect-square bg-shadow-surface border border-border/30 flex items-center justify-center">
                    {flash.image ? (
                      <img
                        src={flash.image}
                        alt={`${name} — flash tattoo by Anne Nogueira SALL Studio Porto`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-display text-ink-tertiary/20 text-4xl" aria-hidden>
                        ✦
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-display font-bold text-white text-sm leading-snug mb-1">
                        {name}
                      </p>
                      <p className="font-label text-[11px] tracking-widest text-ink-tertiary">
                        {styleLabel}
                      </p>
                    </div>
                    <span
                      className={[
                        "font-label text-[10px] font-medium tracking-[0.15em] uppercase px-2 py-0.5 shrink-0",
                        isAvailable
                          ? "bg-phosphor/10 border border-phosphor/30 text-phosphor"
                          : "bg-void border border-border text-ink-tertiary",
                      ].join(" ")}
                    >
                      {isAvailable ? t("flashTeaser.available") : t("flashTeaser.taken")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/flash"
            className="inline-flex items-center gap-3 border border-border px-8 py-3 font-label font-medium text-xs tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary hover:border-ink-secondary transition-all duration-300"
          >
            {t("flashTeaser.cta")} →
          </Link>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
