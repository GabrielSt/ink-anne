import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { wishlistItems } from "../data/wishlistItems";

export default function Wishlist() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("wishlist.pageTitle");
  }, [t]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-abyss pt-28 pb-0">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-border">
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4">
            {t("wishlist.eyebrow")}
          </p>
          <h1
            className="font-display font-black text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            {t("wishlist.headline")}
          </h1>
          <p className="font-body font-light text-ink-secondary leading-[1.8] max-w-xl">
            {t("wishlist.intro")}
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {wishlistItems.map((item) => {
              const name = i18n.language === "pt" ? item.namePt : item.nameEn;
              const note = i18n.language === "pt" ? item.notePt : item.noteEn;

              return (
                <div key={item.id} className="bg-abyss p-8 lg:p-10 flex flex-col gap-5 group hover:bg-shadow-surface transition-colors duration-300">
                  {/* Style tag */}
                  <span className="font-label text-[10px] tracking-[0.22em] uppercase text-phosphor/70">
                    {item.style}
                  </span>

                  {/* Image placeholder */}
                  {item.image ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={`${name} — tattoo wishlist Anne Nogueira Porto`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video border border-border/30 flex items-center justify-center bg-shadow-surface">
                      <span className="font-display text-ink-tertiary/15 text-4xl" aria-hidden>
                        ✦
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h2
                    className="font-display font-bold text-white leading-snug"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                  >
                    {name}
                  </h2>

                  {/* Anne's note */}
                  <p className="font-body font-light text-ink-tertiary text-sm leading-relaxed italic flex-1">
                    "{note}"
                  </p>

                  {/* Discount */}
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <p className="font-label text-[10px] tracking-[0.15em] uppercase text-ink-secondary">
                      {t("wishlist.wishlistPrice")}
                    </p>
                    <span className="font-label font-medium text-phosphor bg-phosphor/10 border border-phosphor/25 px-3 py-1 text-sm">
                      −{item.discountPercent}%
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/book?ref=${encodeURIComponent(name)}`}
                    className="mt-2 inline-flex items-center justify-center gap-2 border border-phosphor/40 text-phosphor font-label font-medium text-xs tracking-[0.18em] uppercase px-6 py-3 hover:bg-phosphor hover:text-void transition-all duration-200"
                  >
                    {t("wishlist.cta")} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
