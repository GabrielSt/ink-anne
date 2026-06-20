import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";

const styles = [
  { key: "anime", icon: "✦" },
  { key: "color", icon: "◈" },
  { key: "fineline", icon: "⟡" },
  { key: "blackwork", icon: "◼" },
  { key: "minimalist", icon: "—" },
  { key: "floral", icon: "✿" },
] as const;

export default function StylesSection() {
  const { t } = useTranslation();
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
          {/* Eyebrow */}
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4 text-center">
            {t("styles.eyebrow")}
          </p>

          {/* Title */}
          <h2
            className="font-display font-black text-white text-center mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {t("styles.title")}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {styles.map(({ key, icon }, i) => (
              <div
                key={key}
                className="bg-void p-8 lg:p-10 group hover:bg-abyss transition-colors duration-300"
                style={{
                  transitionDelay: inView ? `${i * 60}ms` : "0ms",
                }}
              >
                <span
                  className="block font-label text-phosphor/50 text-xl mb-6 group-hover:text-phosphor transition-colors duration-300"
                  aria-hidden
                >
                  {icon}
                </span>
                <h3
                  className="font-display font-black text-white mb-3 leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                >
                  {t(`styles.${key}.label`)}
                </h3>
                <div className="w-8 h-px bg-fern mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="font-body font-light text-ink-tertiary text-sm leading-relaxed">
                  {t(`styles.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
