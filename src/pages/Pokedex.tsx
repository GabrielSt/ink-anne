import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ReservationModal from "../components/ui/ReservationModal";
import PokemonCard from "../components/ui/PokemonCard";
import pokedexImg from "../assets/pokedex.png";
import { useScrollToTop } from "../hooks/useScrollToTop";
import {
  pokemonDesigns,
  pokemonTakenCount,
  pokemonAvailableCount,
  type PokemonDesign,
} from "../data/pokemonDesigns";
const POKEMON_FONT = '"Pocket Monk", "Luckiest Guy", cursive';

type Filter = "all" | "available" | "taken" | "gen1" | "gen2";

export default function Pokedex() {
  useScrollToTop();
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDesign | null>(null);

  useEffect(() => {
    document.title = t("pokedex.pageTitle");
  }, [t]);

  const filtered = pokemonDesigns.filter((p) => {
    if (filter === "available") return p.status === "available";
    if (filter === "taken") return p.status === "taken";
    if (filter === "gen1") return p.gen === 1;
    if (filter === "gen2") return p.gen === 2;
    return true;
  });

  const filterButtons: { key: Filter; label: string }[] = [
    { key: "all", label: t("pokedex.filterAll") },
    { key: "available", label: t("pokedex.filterAvailable") },
    { key: "taken", label: t("pokedex.filterTaken") },
    { key: "gen1", label: t("pokedex.filterGen1") },
    { key: "gen2", label: t("pokedex.filterGen2") },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen pt-28 pb-0" style={{ backgroundColor: "#080a09" }}>
        {/* Hero */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-phosphor/15 overflow-hidden">
          {/* Pokédex device — decorative top right */}
          <img
            src={pokedexImg}
            alt=""
            aria-hidden
            className="absolute top-4 right-4 lg:top-8 lg:right-12 pointer-events-none select-none"
            style={{
              height: "clamp(80px, 14vw, 200px)",
              width: "auto",
              objectFit: "contain",
              opacity: 0.4,
              filter: "drop-shadow(0 0 24px rgba(185,28,28,0.35))",
              transform: "rotate(6deg)",
            }}
          />
          {/* Event badge */}
          <div className="inline-flex items-center gap-2 border border-phosphor/40 bg-phosphor/8 px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-phosphor animate-pulse" />
            <span className="font-label text-[10px] font-medium tracking-[0.22em] uppercase text-phosphor">
              {t("pokedex.eyebrow")}
            </span>
          </div>

          <h1
            className="text-white mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontFamily: POKEMON_FONT, letterSpacing: "0.04em", lineHeight: 1 }}
          >
            {t("pokedex.headline")}
          </h1>

          <p className="font-label font-medium text-sm tracking-[0.2em] text-phosphor mb-6">
            {t("pokedex.counter", {
              done: pokemonTakenCount,
              available: pokemonAvailableCount,
            })}
          </p>

          <p className="font-body font-light text-ink-secondary leading-relaxed max-w-lg">
            {t("pokedex.desc")}
          </p>
        </div>

        {/* Filter bar */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-wrap items-center gap-3 border-b border-phosphor/15">
          {filterButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={[
                "font-label font-medium text-[11px] tracking-[0.18em] uppercase px-4 py-2 transition-all duration-200",
                filter === key
                  ? "bg-phosphor text-void"
                  : "border border-phosphor/20 text-ink-tertiary hover:text-phosphor hover:border-phosphor/50",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-border">
            {filtered.map((pk) => (
              <PokemonCard
                key={pk.id}
                pokemon={pk}
                variant="grid"
                onClick={setSelectedPokemon}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <ReservationModal
        isOpen={selectedPokemon !== null}
        onClose={() => setSelectedPokemon(null)}
        itemLabel={t("pokedex.modal.pokemon")}
        itemName={
          selectedPokemon
            ? `#${String(selectedPokemon.number).padStart(3, "0")} ${selectedPokemon.name}`
            : ""
        }
        translationNs="pokedex"
        isFinished={selectedPokemon?.status === "taken"}
      />
    </>
  );
}
