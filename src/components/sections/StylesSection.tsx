import { Trans, useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";

export default function StylesSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="bg-ink">
      <div
        ref={ref}
        className={[
          "max-w-5xl mx-auto px-6 lg:px-16 py-24 lg:py-36 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        <p
          className="font-display font-semibold text-paper leading-[1.15]"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)", letterSpacing: "-0.01em" }}
        >
          <Trans i18nKey="styles.statement" components={{ hl: <span className="text-green" /> }} />
        </p>
        <p className="mt-8 text-paper-dim text-lg leading-relaxed max-w-xl">
          {t("styles.note")}
        </p>
      </div>
    </section>
  );
}
