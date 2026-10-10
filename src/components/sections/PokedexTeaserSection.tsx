import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { pokemonTakenCount, pokemonDesigns } from "../../data/pokemonDesigns";

const previewPokemon = pokemonDesigns.slice(0, 6);
const total = pokemonDesigns.length;

// The one full-green block on the page. Still-available Pokémon show as
// "Who's that Pokémon?" silhouettes; tattooed ones show in full.
export default function PokedexTeaserSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const progress = Math.max((pokemonTakenCount / total) * 100, 1);

  return (
    <section className="bg-green text-ink">
      <div
        ref={ref}
        className={[
          "max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
          <div>
            <h2
              className="leading-[0.9]"
              style={{ fontFamily: "var(--font-pokemon)", fontSize: "clamp(3.5rem, 10vw, 7.5rem)", letterSpacing: "0.02em" }}
            >
              Pokédex
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-md text-ink/80">
              {t("pokedexTeaser.desc")}
            </p>
          </div>

          <div>
            <p
              className="font-display font-semibold leading-none tabular-nums"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", letterSpacing: "-0.01em" }}
            >
              {String(pokemonTakenCount).padStart(3, "0")}
              <span className="text-ink/35">/{total}</span>
            </p>
            <p className="mt-3 text-ink/70">{t("pokedexTeaser.progress")}</p>
            <div className="mt-5 h-2 rounded-full bg-ink/15 overflow-hidden">
              <div className="h-full rounded-full bg-ink" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-16">
          {previewPokemon.map((pk) => {
            const isTaken = pk.status === "taken";
            return (
              <li key={pk.id} className="flex flex-col items-center gap-2">
                {pk.image && (
                  <img
                    src={pk.image}
                    alt={isTaken ? `${pk.name} Pokémon tattoo by Anne Nogueira, Porto` : ""}
                    loading="lazy"
                    className="w-full aspect-square object-contain"
                    style={isTaken ? undefined : { filter: "brightness(0)", opacity: 0.85 }}
                  />
                )}
                <span className="text-sm font-semibold tabular-nums text-ink/60">
                  #{String(pk.number).padStart(3, "0")}
                  {isTaken && <span className="text-ink"> · {pk.name}</span>}
                </span>
              </li>
            );
          })}
        </ul>

        <Link
          to="/pokedex"
          className="inline-flex items-center rounded-full bg-ink text-green font-semibold px-7 py-3 hover:bg-ink-3 transition-colors duration-200"
        >
          {t("pokedexTeaser.cta")}
        </Link>
      </div>
    </section>
  );
}
