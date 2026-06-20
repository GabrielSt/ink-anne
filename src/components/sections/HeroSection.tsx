import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import heroVideo from "../../assets/hero-video.mov";

export default function HeroSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-svh overflow-hidden bg-void">
      {/* ── Full-screen B&W video ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(100%) contrast(1.08)" }}
      >
        <source src={heroVideo} type="video/mp4" />
        <source src={heroVideo} type="video/quicktime" />
      </video>

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to bottom, rgba(4,7,18,0.45) 0%, rgba(4,7,18,0.72) 60%, rgba(4,7,18,0.88) 100%)",
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, rgba(4,7,18,0.3) 100%)",
          ].join(", "),
        }}
      />

      {/* ── Text content — parallax offset ── */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none"
        style={{ transform: `translateY(${scrollY * 0.28}px)` }}
      >
        {/* Eyebrow */}
        <p
          className="font-label font-medium text-xs tracking-[0.22em] uppercase text-phosphor mb-6 opacity-0"
          style={{ animation: "fadeInUp 0.8s 0.3s ease forwards" }}
        >
          {t("hero.eyebrow")}
        </p>

        {/* Name */}
        <h1
          className="font-display font-black text-white leading-none mb-8 opacity-0"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 8rem)",
            letterSpacing: "-0.03em",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            animation: "fadeInUp 0.9s 0.55s ease forwards",
          }}
        >
          {t("hero.name")}
        </h1>

        {/* Description */}
        <p
          className="font-body font-light text-white/70 max-w-sm leading-relaxed opacity-0"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
            whiteSpace: "pre-line",
            animation: "fadeInUp 0.9s 0.8s ease forwards",
          }}
        >
          {t("hero.description")}
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={handleScrollDown}
        aria-label={t("hero.scroll")}
        className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
        style={{
          transform: "translateX(-50%)",
          animation: "scroll-bounce 2.2s 1.6s ease-in-out infinite",
        }}
      >
        <span className="font-label font-medium text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-phosphor transition-colors duration-300">
          {t("hero.scroll")}
        </span>
        <ChevronDown size={18} strokeWidth={1.5} className="text-white/40 group-hover:text-phosphor transition-colors duration-300" />
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
