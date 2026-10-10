import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { flashDesigns } from "../../data/flashDesigns";
import Sparkle from "../ui/Sparkle";

// Show the first 4 flash designs as preview
const previewFlashes = flashDesigns.slice(0, 4);

// Each sticker sits slightly crooked, like it was stuck on by hand
const TILTS = ["-2deg", "1.5deg", "-1deg", "2.5deg"];

export default function FlashTeaserSection() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="bg-ink-2">
      <div
        ref={ref}
        className={[
          "max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2
            className="font-display font-semibold text-paper leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            {t("flashTeaser.title")}
          </h2>
          <p className="text-paper-dim leading-relaxed max-w-md text-lg">
            {t("flashTeaser.desc")}
          </p>
        </div>

        {/* Stickers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-10 mb-16">
          {previewFlashes.map((flash, i) => {
            const name = i18n.language === "pt" ? flash.namePt : flash.nameEn;
            const isAvailable = flash.status === "available";

            return (
              <div key={flash.id} className="flex flex-col gap-4">
                <div
                  className={[
                    "sticker aspect-square bg-paper flex items-center justify-center",
                    isAvailable ? "" : "opacity-40 grayscale",
                  ].join(" ")}
                  style={{ "--tilt": TILTS[i % TILTS.length] } as CSSProperties}
                >
                  {flash.image ? (
                    <img
                      src={flash.image}
                      alt={`${name} — flash tattoo by Anne Nogueira, Porto`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <Sparkle size={40} className="text-ink" />
                  )}
                </div>

                <div>
                  <p className={["font-semibold text-paper leading-snug", isAvailable ? "" : "line-through text-paper-mute"].join(" ")}>
                    {name}
                  </p>
                  <p className="text-sm text-paper-mute mt-1 flex items-center gap-2">
                    {isAvailable && <span className="w-2 h-2 rounded-full bg-green" aria-hidden />}
                    {t(`flash.styleLabels.${flash.style}`)} · {isAvailable ? t("flashTeaser.available") : t("flashTeaser.taken")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/flash"
          className="inline-flex items-center rounded-full bg-paper text-ink font-semibold px-7 py-3 hover:bg-green transition-colors duration-200"
        >
          {t("flashTeaser.cta")}
        </Link>
      </div>
    </section>
  );
}
