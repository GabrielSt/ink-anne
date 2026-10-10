import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ReservationModal from "../components/ui/ReservationModal";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { flashDesigns, type FlashDesign, type FlashStyle } from "../data/flashDesigns";

type Filter = "all" | "available" | "taken";

export default function Flash() {
  useScrollToTop();
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedFlash, setSelectedFlash] = useState<FlashDesign | null>(null);

  useEffect(() => {
    document.title = t("flash.pageTitle");
  }, [t]);

  const filtered = flashDesigns.filter((f) => {
    if (filter === "all") return true;
    return f.status === filter;
  });

  const styleLabel = (style: FlashStyle) => t(`flash.styleLabels.${style}`);

  const filterButtons: { key: Filter; label: string }[] = [
    { key: "all", label: t("flash.filterAll") },
    { key: "available", label: t("flash.filterAvailable") },
    { key: "taken", label: t("flash.filterTaken") },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-ink pt-28 pb-0">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-line">
          <p className="font-medium text-xs tracking-[0.28em] uppercase text-green mb-4">
            {t("flash.eyebrow")}
          </p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            {t("flash.headline")}
          </h1>
          <p className=" text-paper-dim leading-relaxed max-w-lg">
            {t("flash.desc")}
          </p>
        </div>

        {/* Filter bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex items-center gap-3 border-b border-line">
          {filterButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={[
                "font-medium text-[11px] tracking-[0.18em] uppercase px-4 py-2 transition-all duration-200",
                filter === key
                  ? "bg-green text-ink"
                  : "border border-line text-paper-mute hover:text-paper hover:border-paper-dim",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-line">
            {filtered.map((flash) => {
              const name = i18n.language === "pt" ? flash.namePt : flash.nameEn;
              const isAvailable = flash.status === "available";

              return (
                <div key={flash.id} className="bg-ink p-6 flex flex-col gap-4 group">
                  {/* Image */}
                  <div className="aspect-square bg-ink-3 border border-line/30 flex items-center justify-center overflow-hidden">
                    {flash.image ? (
                      <img
                        src={flash.image}
                        alt={`${name} — flash tattoo by Anne Nogueira, Porto`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-paper-mute/15 text-5xl" aria-hidden>
                        ✦
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-white text-sm leading-snug mb-1">
                        {name}
                      </p>
                      <p className="text-[11px] tracking-widest text-paper-mute">
                        {styleLabel(flash.style)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={[
                          "text-[10px] font-medium tracking-[0.15em] uppercase px-2 py-0.5",
                          isAvailable
                            ? "bg-green/10 border border-green/30 text-green"
                            : "bg-ink border border-line text-paper-mute",
                        ].join(" ")}
                      >
                        {isAvailable ? t("flash.available") : t("flash.taken")}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  {isAvailable && (
                    <button
                      onClick={() => setSelectedFlash(flash)}
                      className="mt-auto border border-green/40 text-green font-medium text-[11px] tracking-[0.18em] uppercase py-2.5 hover:bg-green hover:text-ink transition-all duration-200"
                    >
                      {t("flash.book")}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <ReservationModal
        isOpen={selectedFlash !== null}
        onClose={() => setSelectedFlash(null)}
        itemLabel={t("flash.modal.piece")}
        itemName={
          selectedFlash
            ? i18n.language === "pt"
              ? selectedFlash.namePt
              : selectedFlash.nameEn
            : ""
        }
        translationNs="flash"
      />
    </>
  );
}
