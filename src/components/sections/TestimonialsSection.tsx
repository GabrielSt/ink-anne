import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { testimonials } from "../../data/testimonials";

// Testimonials as message bubbles — the way clients actually talk to Anne.
export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView();

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-ink-2">
      <div
        ref={ref}
        className={[
          "max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        <h2
          className="font-display font-semibold text-paper leading-none mb-14"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.01em" }}
        >
          {t("testimonials.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {testimonials.map((item) => {
            const quote = i18n.language === "pt" ? item.quotePt : item.quoteEn;
            return (
              <figure key={item.id} className="flex flex-col gap-4">
                <blockquote className="bg-ink-3 text-paper leading-relaxed rounded-3xl rounded-bl-md px-6 py-5">
                  {quote}
                </blockquote>
                <figcaption className="pl-2 text-sm">
                  <span className="font-semibold text-paper">{item.client}</span>
                  <span className="text-paper-mute"> · {item.style}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
