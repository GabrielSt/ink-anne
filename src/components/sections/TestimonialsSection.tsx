import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
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
          {/* Header */}
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4 text-center">
            {t("testimonials.eyebrow")}
          </p>
          <h2
            className="font-display font-black text-white text-center mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {t("testimonials.title")}
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {testimonials.map((item, i) => {
              const quote = i18n.language === "pt" ? item.quotePt : item.quoteEn;
              return (
                <div
                  key={item.id}
                  className="bg-void p-8 lg:p-10 flex flex-col gap-6"
                  style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
                >
                  {/* Green left rule */}
                  <div className="flex gap-5">
                    <div className="w-px bg-linear-to-b from-phosphor to-phosphor/10 shrink-0 self-stretch" />
                    <blockquote className="font-body font-light text-ink-secondary leading-[1.8] text-base italic">
                      "{quote}"
                    </blockquote>
                  </div>

                  {/* Attribution */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div>
                      <p className="font-label font-medium text-sm text-ink-primary">
                        {item.client}
                      </p>
                      <p className="font-label text-[11px] tracking-[0.15em] text-phosphor/70 mt-0.5">
                        {item.style}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
