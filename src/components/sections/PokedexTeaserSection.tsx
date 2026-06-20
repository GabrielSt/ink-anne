import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import {
  pokemonTakenCount,
  pokemonAvailableCount,
  pokemonDesigns,
  typeColor,
} from "../../data/pokemonDesigns";
import bgPokemon from "../../assets/bg-pokemon.jpg";
import pokedexImg from "../../assets/pokedex.png";

const previewPokemon = pokemonDesigns.slice(0, 6);

export default function PokedexTeaserSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView(0.05);
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      setParallaxOffset((sectionMid - viewportMid) * 0.22);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#080a09" }}
    >
      {/* ── Parallax background ── */}
      <img
        src={bgPokemon}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.18)`,
          filter: "saturate(0.7) brightness(0.28)",
          objectPosition: "center 30%",
        }}
      />



      <div className="w-full h-px" style={{ backgroundColor: "rgba(185,28,28,0.3)" }} />

      {/* ── Pokédex device image — top left ── */}
      <img
        src={pokedexImg}
        alt="Pokédex"
        className="absolute top-8 left-8 lg:top-14 lg:left-14 pointer-events-none select-none"
        style={{
          height: "clamp(80px, 12vw, 160px)",
          width: "auto",
          objectFit: "contain",
          opacity: 0.55,
          filter: "drop-shadow(0 0 20px rgba(185,28,28,0.4))",
          transform: "rotate(-6deg)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <div
          ref={ref}
          className={[
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* ── Editorial asymmetric header ── */}
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 mb-16">
            {/* Left: huge display title — offset right to clear Pokédex image on large screens */}
            <div className="lg:w-1/2 lg:pl-4">
              <div
                className="inline-flex items-center gap-2 mb-6 border px-3 py-1.5"
                style={{ borderColor: "rgba(185,28,28,0.5)", backgroundColor: "rgba(185,28,28,0.12)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#dc2626" }} />
                <span
                  className="text-[9px] leading-none"
                  style={{
                    color: "#f87171",
                    fontFamily: '"Press Start 2P", monospace',
                    letterSpacing: "0.18em",
                  }}
                >
                  {t("pokedexTeaser.eyebrow")}
                </span>
              </div>

              <h2
                className="font-display font-black leading-[0.9] block"
                style={{ fontSize: "clamp(4rem, 12vw, 9rem)", color: "#cc2626", textShadow: "0 2px 40px rgba(185,28,28,0.4)" }}
              >
                Pokédex
              </h2>
              <h2
                className="font-display font-black leading-[0.9] text-white block"
                style={{ fontSize: "clamp(4rem, 12vw, 9rem)", marginTop: "-0.04em", textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
              >
                Tattoo
              </h2>
            </div>

            {/* Right: stats + desc + CTA */}
            <div className="lg:w-1/2 lg:pt-12 flex flex-col justify-center">
              <p
                className="font-label font-medium text-base mb-5"
                style={{ color: "#facc15", letterSpacing: "0.2em" }}
              >
                {t("pokedexTeaser.counter", {
                  done: pokemonTakenCount,
                  available: pokemonAvailableCount,
                })}
              </p>

              <p className="font-body font-light text-white/70 leading-relaxed mb-10 max-w-sm">
                {t("pokedexTeaser.desc")}
              </p>

              <Link
                to="/pokedex"
                className="inline-flex items-center gap-3 self-start font-label font-medium text-xs tracking-[0.18em] uppercase px-8 py-3.5 transition-colors duration-200 group"
                style={{ backgroundColor: "#cc2626", color: "#fff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#dc2626"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#cc2626"; }}
              >
                {t("pokedexTeaser.cta")}
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>

          {/* ── Type-colored preview grid ── */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
            style={{ backgroundColor: "rgba(185,28,28,0.15)", backdropFilter: "blur(1px)" }}
          >
            {previewPokemon.map((pk, i) => {
              const isAvailable = pk.status === "available";
              const colors = typeColor[pk.primaryType];

              return (
                <div
                  key={pk.id}
                  className="p-5 flex flex-col items-center gap-3 transition-all duration-200"
                  style={{
                    backgroundColor: isAvailable
                      ? `rgba(8,10,9,0.72)`
                      : "rgba(8,10,9,0.85)",
                    borderBottom: `1px solid ${isAvailable ? colors.border : "rgba(37,44,38,0.4)"}`,
                    boxShadow: isAvailable ? `inset 0 0 0 1px ${colors.border}` : "none",
                    backdropFilter: "blur(8px)",
                    transitionDelay: inView ? `${i * 55}ms` : "0ms",
                  }}
                >
                  <span className="font-label text-[10px] tracking-[0.2em]" style={{ color: colors.text, opacity: 0.8 }}>
                    #{String(pk.number).padStart(3, "0")}
                  </span>

                  <div className="w-24 h-24 flex items-center justify-center">
                    {pk.image ? (
                      <img
                        src={pk.image}
                        alt={`${pk.name} tattoo by Anne Nogueira Porto`}
                        className={!isAvailable ? "grayscale opacity-40" : ""}
                        loading="lazy"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <span
                        className="font-label text-3xl select-none"
                        style={{ color: isAvailable ? colors.text : "#252c26", opacity: isAvailable ? 0.55 : 0.35 }}
                        aria-hidden
                      >
                        ?
                      </span>
                    )}
                  </div>

                  <span
                    className="font-label text-xs font-medium text-center"
                    style={{ color: isAvailable ? "#e8ede9" : "#5c6b5e" }}
                  >
                    {pk.name}
                  </span>

                  <span
                    className="font-label text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 text-center w-full"
                    style={{
                      color: isAvailable ? colors.text : "#5c6b5e",
                      borderColor: isAvailable ? colors.border : "rgba(37,44,38,0.5)",
                      borderWidth: 1,
                      borderStyle: "solid",
                    }}
                  >
                    {isAvailable ? "Disponível" : "Feito"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-px" style={{ backgroundColor: "rgba(185,28,28,0.3)" }} />
    </section>
  );
}
