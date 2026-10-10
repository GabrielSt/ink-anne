import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { wishlistItems } from "../../data/wishlistItems";

const previewItems = wishlistItems.slice(0, 3);

export default function WishlistTeaserSection() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="bg-ink">
      <div
        ref={ref}
        className={[
          "max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <h2
            className="font-display font-semibold text-paper leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            {t("wishlistTeaser.title")}
          </h2>
          <p className="text-paper-dim leading-relaxed max-w-md text-lg">
            {t("wishlistTeaser.desc")}
          </p>
        </div>

        {/* List — reads like a page from her sketchbook, not a card grid */}
        <ol className="mb-14">
          {previewItems.map((item, i) => {
            const name = i18n.language === "pt" ? item.namePt : item.nameEn;
            const note = i18n.language === "pt" ? item.notePt : item.noteEn;

            return (
              <li
                key={item.id}
                className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_auto] gap-x-4 sm:gap-x-8 items-baseline border-t border-line py-8 last:border-b"
              >
                <span className="font-semibold text-paper-mute tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-paper leading-tight" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                    {name}
                  </h3>
                  <p className="text-sm text-paper-mute mt-1">{item.style}</p>
                  <p className="text-paper-dim leading-relaxed mt-3 max-w-2xl">{note}</p>
                </div>
                <span
                  className="font-semibold text-green tabular-nums"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  −{item.discountPercent}%
                </span>
              </li>
            );
          })}
        </ol>

        <Link
          to="/wishlist"
          className="inline-flex items-center rounded-full border-2 border-paper/30 text-paper font-semibold px-7 py-3 hover:border-paper transition-colors duration-200"
        >
          {t("wishlistTeaser.cta")}
        </Link>
      </div>
    </section>
  );
}
