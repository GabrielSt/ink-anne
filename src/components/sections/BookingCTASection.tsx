import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";

export default function BookingCTASection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-void overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(78,158,104,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div
          ref={ref}
          className={[
            "transition-all duration-700 ease-out text-center",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-6">
            {t("booking.eyebrow")}
          </p>

          <h2
            className="font-display font-black text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {t("booking.title")}
          </h2>

          <p className="font-body font-light text-ink-secondary leading-relaxed max-w-md mx-auto mb-12">
            {t("booking.desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-phosphor text-void font-label font-medium text-xs tracking-[0.18em] uppercase px-10 py-4 hover:bg-glow transition-colors duration-200"
            >
              {t("booking.cta")} →
            </Link>
            <Link
              to="/gift"
              className="inline-flex items-center gap-2 border border-border text-ink-secondary font-label font-medium text-xs tracking-[0.18em] uppercase px-8 py-4 hover:border-ink-secondary hover:text-ink-primary transition-all duration-300"
            >
              {t("booking.giftCta")}
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
