import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ReservationModal from "../components/ui/ReservationModal";
import { useScrollToTop } from "../hooks/useScrollToTop";
import {
  pokemonDesigns,
  pokemonTakenCount,
  pokemonAvailableCount,
  type PokemonDesign,
  typeColor,
} from "../data/pokemonDesigns";

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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-phosphor/15">
          {/* Event badge */}
          <div className="inline-flex items-center gap-2 border border-phosphor/40 bg-phosphor/8 px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-phosphor animate-pulse" />
            <span className="font-label text-[10px] font-medium tracking-[0.22em] uppercase text-phosphor">
              {t("pokedex.eyebrow")}
            </span>
          </div>

          <h1
            className="font-display font-black text-white mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-phosphor/10">
            {filtered.map((pk) => {
              const isAvailable = pk.status === "available";

              return (
                <div
                  key={pk.id}
                  className="relative p-5 flex flex-col items-center gap-3 group transition-all duration-200"
                  style={{
                    backgroundColor: typeColor[pk.primaryType].bg,
                    borderBottom: `1px solid ${typeColor[pk.primaryType].border}`,
                  }}
                >
                  {/* Tattooed stamp overlay */}
                  {!isAvailable && (
                    <div
                      aria-hidden
                      className="absolute top-3 right-3 w-14 h-14 rounded-full border-[3px] border-red-600 flex items-center justify-center rotate-[-18deg] pointer-events-none select-none"
                      style={{ opacity: 0.85 }}
                    >
                      <span className="font-label text-[7px] font-bold tracking-[0.12em] text-red-600 uppercase text-center leading-tight">
                        TATTOOED
                      </span>
                    </div>
                  )}

                  {/* Number */}
                  <span className="font-label text-[10px] tracking-[0.2em] text-ink-tertiary">
                    #{String(pk.number).padStart(3, "0")}
                  </span>

                  {/* Image */}
                  <div className="w-20 h-20 flex items-center justify-center">
                    {pk.image ? (
                      <img
                        src={pk.image}
                        alt={`${pk.name} Pokémon tattoo by Anne Nogueira at SALL Studio Porto`}
                        loading="lazy"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <span className="font-label text-3xl select-none text-phosphor/20" aria-hidden>
                        ?
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <span className="font-label text-xs font-medium text-ink-secondary text-center">
                    {pk.name}
                  </span>

                  {/* Style */}
                  <span className="font-label text-[10px] tracking-[0.12em] text-ink-tertiary text-center capitalize">
                    {pk.tattooStyle}
                  </span>

                  {/* Status */}
                  <div className="flex flex-col items-center gap-1.5 w-full">
                    <span
                      className={[
                        "w-full text-center font-label text-[9px] tracking-[0.15em] uppercase px-2 py-0.5",
                        isAvailable
                          ? "text-phosphor border border-phosphor/30 bg-phosphor/8"
                          : "text-red-500/70 border border-red-600/30",
                      ].join(" ")}
                    >
                      {isAvailable ? t("pokedex.available") : t("pokedex.taken")}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedPokemon(pk)}
                    className={`w-full font-label font-medium text-[10px] tracking-[0.15em] uppercase py-2 transition-all duration-200 ${
                      isAvailable
                        ? "border border-phosphor/30 text-phosphor hover:bg-phosphor hover:text-void"
                        : "border border-red-600/30 text-red-500/70 hover:bg-red-600/10"
                    }`}
                  >
                    {isAvailable ? t("pokedex.claim") : t("pokedex.viewTattoo")}
                  </button>
                </div>
              );
            })}
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
