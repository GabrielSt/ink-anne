import type { PokemonDesign } from "../../data/pokemonDesigns";

interface PokemonCardProps {
  pokemon: PokemonDesign;
  onClick?: (pokemon: PokemonDesign) => void;
  /** "teaser" = compact preview on home page, "grid" = full card on Pokédex page */
  variant?: "teaser" | "grid";
  /** Delay for staggered reveal animations */
  animationDelay?: string;
}

export default function PokemonCard({
  pokemon: pk,
  onClick,
  variant = "grid",
  animationDelay,
}: PokemonCardProps) {
  const isAvailable = pk.status === "available";
  const isTeaser = variant === "teaser";

  return (
    <div
      className="relative flex flex-col items-center gap-3 transition-all duration-200 bg-ink-2 border-b border-line"
      style={{
        padding: isTeaser ? "1.25rem" : "1.25rem",
        transitionDelay: animationDelay,
      }}
    >
      {/* Tattooed stamp */}
      {!isAvailable && (
        <div
          aria-hidden
          className="absolute top-3 right-3 w-14 h-14 rounded-full border-[3px] border-green/40 flex items-center justify-center rotate-[-18deg] pointer-events-none select-none"
          style={{ opacity: 0.75 }}
        >
          <span className="text-[7px] font-bold tracking-[0.12em] text-green/60 uppercase text-center leading-tight">
            TATTOOED
          </span>
        </div>
      )}

      {/* Number */}
      <span className="text-[10px] tracking-[0.2em] text-paper-mute">
        #{String(pk.number).padStart(3, "0")}
      </span>

      {/* Image */}
      <div
        className="flex items-center justify-center"
        style={{ width: isTeaser ? "6rem" : "5rem", height: isTeaser ? "6rem" : "5rem" }}
      >
        {pk.image ? (
          <img
            src={pk.image}
            alt={`${pk.name} Pokémon tattoo by Anne Nogueira in Porto`}
            loading="lazy"
            crossOrigin="anonymous"
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-3xl select-none text-green/20" aria-hidden>
            ?
          </span>
        )}
      </div>

      {/* Name */}
      <span className="text-xs font-medium text-paper-dim text-center">
        {pk.name}
      </span>

      {/* Style — only on full grid */}
      {!isTeaser && (
        <span className="text-[10px] tracking-[0.12em] text-paper-mute text-center capitalize">
          {pk.tattooStyle}
        </span>
      )}

      {/* Status badge */}
      <span className="w-full text-center text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 text-green border border-green/30 bg-green/8">
        {isAvailable ? "Disponível" : "Feito"}
      </span>

      {/* CTA button — only on full grid */}
      {!isTeaser && onClick && (
        <button
          onClick={() => onClick(pk)}
          className="w-full font-medium text-[10px] tracking-[0.15em] uppercase py-2 border border-green/30 text-green hover:bg-green hover:text-ink transition-all duration-200"
        >
          {isAvailable ? "Reclamar" : "Ver tatuagem"}
        </button>
      )}
    </div>
  );
}
