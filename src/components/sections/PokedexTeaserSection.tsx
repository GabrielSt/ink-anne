import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import {
  pokemonTakenCount,
  pokemonAvailableCount,
  pokemonDesigns,
} from "../../data/pokemonDesigns";
import PokemonCard from "../ui/PokemonCard";
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

      {/* ── Pokédex device image — top right ── */}
      <img
        src={pokedexImg}
        alt="Pokédex"
        className="absolute top-8 right-8 lg:top-14 lg:right-14 pointer-events-none select-none"
        style={{
          height: "clamp(80px, 12vw, 160px)",
          width: "auto",
          objectFit: "contain",
          opacity: 0.55,
          filter: "drop-shadow(0 0 20px rgba(185,28,28,0.4))",
          transform: "rotate(6deg)",
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
            {/* Left: huge display title */}
            <div className="lg:w-1/2 lg:pl-4">
              <h2
                className="leading-[0.9] text-white block"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  fontFamily: '"Pocket Monk", "Luckiest Guy", cursive',
                  textShadow: "0 2px 40px rgba(0,0,0,0.5)",
                  letterSpacing: "0.04em",
                }}
              >
                Pokédex
              </h2>
              <h2
                className="leading-[0.9] text-white block"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  fontFamily: '"Pocket Monk", "Luckiest Guy", cursive',
                  marginTop: "0.08em",
                  textShadow: "0 2px 30px rgba(0,0,0,0.6)",
                  letterSpacing: "0.04em",
                }}
              >
                Tattoo
              </h2>
            </div>

            {/* Right: badge + stats + desc + CTA */}
            <div className="lg:w-1/2 lg:pt-12 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 mb-6 border px-3 py-1.5 self-start"
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

          {/* ── Preview grid — shared PokemonCard component ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {previewPokemon.map((pk, i) => (
              <PokemonCard
                key={pk.id}
                pokemon={pk}
                variant="teaser"
                animationDelay={inView ? `${i * 55}ms` : "0ms"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px" style={{ backgroundColor: "rgba(185,28,28,0.3)" }} />
    </section>
  );
}
