import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { MapPin } from "lucide-react";

export default function StudioSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-abyss overflow-hidden">
      <div className="w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div
          ref={ref}
          className={[
            "transition-all duration-700 ease-out flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {/* Icon + location */}
          <div className="flex items-center gap-3 shrink-0">
            <MapPin size={16} strokeWidth={1.5} className="text-phosphor" />
            <div>
              <p className="font-label font-medium text-[10px] tracking-[0.25em] uppercase text-phosphor mb-1">
                {t("studio.eyebrow")}
              </p>
              <p className="font-display font-bold text-white text-lg">
                {t("studio.title")}
              </p>
              <p className="font-label text-xs tracking-[0.15em] text-ink-tertiary mt-0.5">
                {t("studio.location")}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-border shrink-0" />

          {/* Description */}
          <p className="font-body font-light text-ink-secondary leading-relaxed text-sm lg:text-base max-w-xl">
            {t("studio.desc")}
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
