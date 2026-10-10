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

      <main className="min-h-screen bg-ink-2 pt-28 pb-0">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-line">
          <p className="font-medium text-xs tracking-[0.28em] uppercase text-green mb-4">
            {t("wishlist.eyebrow")}
          </p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            {t("wishlist.headline")}
          </h1>
          <p className=" text-paper-dim leading-[1.8] max-w-xl">
            {t("wishlist.intro")}
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {wishlistItems.map((item) => {
              const name = i18n.language === "pt" ? item.namePt : item.nameEn;
              const note = i18n.language === "pt" ? item.notePt : item.noteEn;

              return (
                <div key={item.id} className="bg-ink-2 p-8 lg:p-10 flex flex-col gap-5 group hover:bg-ink-3 transition-colors duration-300">
                  {/* Style tag */}
                  <span className="text-[10px] tracking-[0.22em] uppercase text-green/70">
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
                    <div className="aspect-video border border-line/30 flex items-center justify-center bg-ink-3">
                      <span className="text-paper-mute/15 text-4xl" aria-hidden>
                        ✦
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h2
                    className="font-bold text-white leading-snug"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                  >
                    {name}
                  </h2>

                  {/* Anne's note */}
                  <p className=" text-paper-mute text-sm leading-relaxed italic flex-1">
                    "{note}"
                  </p>

                  {/* Discount */}
                  <div className="flex items-center justify-between pt-5 border-t border-line">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-paper-dim">
                      {t("wishlist.wishlistPrice")}
                    </p>
                    <span className="font-medium text-green bg-green/10 border border-green/25 px-3 py-1 text-sm">
                      −{item.discountPercent}%
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/book?ref=${encodeURIComponent(name)}`}
                    className="mt-2 inline-flex items-center justify-center gap-2 border border-green/40 text-green font-medium text-xs tracking-[0.18em] uppercase px-6 py-3 hover:bg-green hover:text-ink transition-all duration-200"
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
