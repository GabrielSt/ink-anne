import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { wishlistItems } from "../../data/wishlistItems";

const previewItems = wishlistItems.slice(0, 3);

export default function WishlistTeaserSection() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-abyss overflow-hidden">
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
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4 text-center">
            {t("wishlistTeaser.eyebrow")}
          </p>
          <h2
            className="font-display font-black text-white text-center mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {t("wishlistTeaser.title")}
          </h2>
          <p className="font-body font-light text-ink-secondary leading-relaxed max-w-lg mx-auto text-center mb-14">
            {t("wishlistTeaser.desc")}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mb-12">
            {previewItems.map((item, i) => {
              const name = i18n.language === "pt" ? item.namePt : item.nameEn;
              const note = i18n.language === "pt" ? item.notePt : item.noteEn;

              return (
                <div
                  key={item.id}
                  className="bg-abyss p-8 flex flex-col gap-5 group hover:bg-shadow-surface transition-colors duration-300"
                  style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
                >
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-phosphor/70">
                    {item.style}
                  </span>

                  <h3
                    className="font-display font-bold text-white leading-snug"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                  >
                    {name}
                  </h3>

                  <p className="font-body font-light text-ink-tertiary text-sm leading-relaxed italic flex-1">
                    "{note}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <p className="font-label text-[10px] tracking-[0.15em] uppercase text-ink-secondary">
                      {t("wishlistTeaser.wishlistPrice")}
                    </p>
                    <div className="ml-auto">
                      <span className="font-label font-medium text-phosphor bg-phosphor/10 border border-phosphor/25 px-3 py-1 text-sm">
                        −{item.discountPercent}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/wishlist"
              className="inline-flex items-center gap-3 border border-border px-8 py-3 font-label font-medium text-xs tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary hover:border-ink-secondary transition-all duration-300"
            >
              {t("wishlistTeaser.cta")} →
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
