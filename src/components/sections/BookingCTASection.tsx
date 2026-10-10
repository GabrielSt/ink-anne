import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import logo from "../../assets/logo4.png";

export default function BookingCTASection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section className="bg-ink">
      <div
        ref={ref}
        className={[
          "max-w-3xl mx-auto px-6 py-28 lg:py-40 text-center flex flex-col items-center transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        <img src={logo} alt="" aria-hidden className="h-32 lg:h-40 w-auto mb-12 select-none" draggable={false} />

        <h2
          className="font-display font-semibold text-paper leading-none mb-6"
          style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", letterSpacing: "-0.01em" }}
        >
          {t("booking.title")}
        </h2>

        <p className="text-paper-dim text-lg leading-relaxed mb-12">
          {t("booking.desc")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/book"
            className="inline-flex items-center rounded-full bg-green text-ink font-semibold text-lg px-9 py-4 hover:bg-green-light transition-colors duration-200"
          >
            {t("booking.cta")}
          </Link>
          <Link
            to="/gift"
            className="inline-flex items-center rounded-full border-2 border-paper/30 text-paper font-semibold px-7 py-3.5 hover:border-paper transition-colors duration-200"
          >
            {t("booking.giftCta")}
          </Link>
        </div>

        <p className="flex items-start gap-2 text-sm text-paper-mute max-w-sm text-left">
          <MapPin size={16} strokeWidth={2} className="shrink-0 mt-0.5 text-green" />
          {t("booking.place")}
        </p>
      </div>
    </section>
  );
}
