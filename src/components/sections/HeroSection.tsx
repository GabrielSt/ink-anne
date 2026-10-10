import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import heroVideo from "../../assets/hero.mp4";
import heroPoster from "../../assets/hero-poster.jpg";
import logo from "../../assets/logo4.png";

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
    <section className="relative w-full h-svh overflow-hidden bg-ink">
      {/* ── Full-screen B&W video (portrait source, already greyscale) ──
          objectPosition sits a little above centre so her head isn't cropped on wide screens */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroPoster}
        tabIndex={-1}
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 40%", filter: "contrast(1.08)" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to bottom, rgba(11,12,11,0.45) 0%, rgba(11,12,11,0.72) 60%, rgba(11,12,11,0.88) 100%)",
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, rgba(11,12,11,0.3) 100%)",
          ].join(", "),
        }}
      />

      {/* ── Text content — parallax offset ── */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none"
        style={{ transform: `translateY(${scrollY * 0.28}px)` }}
      >
        {/* Logo + role + city in one <h1>: the logo carries the name (alt),
            the text lines carry the keywords */}
        <h1 className="flex flex-col items-center">
          <img
            src={logo}
            alt="Anne Nogueira"
            width={628}
            height={975}
            fetchPriority="high"
            className="w-auto mx-auto opacity-0"
            style={{
              height: "clamp(200px, 42svh, 420px)",
              filter: "drop-shadow(0 2px 30px rgba(0,0,0,0.5))",
              animation: "fadeInUp 0.9s 0.2s ease forwards",
            }}
            draggable={false}
          />
          <span className="sr-only"> — </span>
          <span
            className="mt-8 font-display font-medium text-paper leading-tight opacity-0"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              animation: "fadeInUp 0.9s 0.45s ease forwards",
            }}
          >
            {t("hero.role")}
          </span>
          <span className="sr-only">, </span>
          <span
            className="mt-2 font-semibold text-paper-dim opacity-0"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", animation: "fadeInUp 0.9s 0.6s ease forwards" }}
          >
            {t("hero.location")}
          </span>
        </h1>
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
        <span className="font-semibold text-xs text-white/50 group-hover:text-green transition-colors duration-300">
          {t("hero.scroll")}
        </span>
        <ChevronDown size={18} strokeWidth={1.5} className="text-white/40 group-hover:text-green transition-colors duration-300" />
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
