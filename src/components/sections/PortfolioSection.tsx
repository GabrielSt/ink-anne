import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useInView";
import { portfolioImages } from "../../data/portfolioImages";

const INSTAGRAM_URL = "https://www.instagram.com/ink.anne";

// SVG mock photos — replaced by real tattoo photos when available
const MOCK_SVGS: { label: string; svg: string }[] = [
  {
    label: "Fine Line",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#0d0f0e"/><circle cx="200" cy="200" r="90" fill="none" stroke="#e8ede9" stroke-width="1.2" opacity="0.85"/><circle cx="237" cy="186" r="78" fill="#0d0f0e"/><circle cx="96" cy="88" r="2.5" fill="#4e9e68"/><circle cx="310" cy="118" r="1.5" fill="#e8ede9" opacity="0.55"/><circle cx="76" cy="296" r="1.5" fill="#4e9e68" opacity="0.65"/><circle cx="328" cy="278" r="2" fill="#e8ede9" opacity="0.5"/><circle cx="146" cy="346" r="1.2" fill="#4e9e68" opacity="0.6"/><circle cx="356" cy="198" r="1.5" fill="#e8ede9" opacity="0.4"/><circle cx="280" cy="60" r="1" fill="#4e9e68" opacity="0.5"/><line x1="84" y1="200" x2="96" y2="200" stroke="#4e9e68" stroke-width="0.9" opacity="0.55"/><line x1="304" y1="200" x2="316" y2="200" stroke="#4e9e68" stroke-width="0.9" opacity="0.55"/><line x1="200" y1="84" x2="200" y2="96" stroke="#4e9e68" stroke-width="0.9" opacity="0.4"/><circle cx="200" cy="200" r="4" fill="none" stroke="#4e9e68" stroke-width="0.8" opacity="0.35"/></svg>`,
  },
  {
    label: "Anime / Color",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#0d0f0e"/><path d="M60 200 Q200 100 340 200 Q200 300 60 200Z" fill="none" stroke="#e8ede9" stroke-width="1.5" opacity="0.9"/><circle cx="200" cy="200" r="60" fill="none" stroke="#4e9e68" stroke-width="1.2"/><circle cx="200" cy="200" r="28" fill="#1c211d"/><circle cx="200" cy="200" r="26" fill="none" stroke="#4e9e68" stroke-width="0.8" opacity="0.5"/><circle cx="200" cy="200" r="13" fill="#080a09"/><circle cx="215" cy="188" r="7" fill="#e8ede9" opacity="0.3"/><line x1="140" y1="145" x2="145" y2="128" stroke="#e8ede9" stroke-width="1" opacity="0.55"/><line x1="175" y1="127" x2="175" y2="110" stroke="#e8ede9" stroke-width="1" opacity="0.6"/><line x1="200" y1="120" x2="200" y2="102" stroke="#e8ede9" stroke-width="1" opacity="0.7"/><line x1="225" y1="127" x2="226" y2="109" stroke="#e8ede9" stroke-width="1" opacity="0.6"/><line x1="258" y1="145" x2="263" y2="128" stroke="#e8ede9" stroke-width="1" opacity="0.55"/><line x1="200" y1="140" x2="200" y2="152" stroke="#4e9e68" stroke-width="0.6" opacity="0.45"/><line x1="200" y1="248" x2="200" y2="260" stroke="#4e9e68" stroke-width="0.6" opacity="0.45"/><line x1="140" y1="200" x2="152" y2="200" stroke="#4e9e68" stroke-width="0.6" opacity="0.45"/><line x1="248" y1="200" x2="260" y2="200" stroke="#4e9e68" stroke-width="0.6" opacity="0.45"/></svg>`,
  },
  {
    label: "Blackwork",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#0d0f0e"/><path d="M200 55 C272 82 296 138 260 185 C218 238 182 258 200 305 C218 352 256 362 240 385" fill="none" stroke="#e8ede9" stroke-width="22" stroke-linecap="round"/><path d="M200 55 C272 82 296 138 260 185 C218 238 182 258 200 305 C218 352 256 362 240 385" fill="none" stroke="#0d0f0e" stroke-width="12" stroke-linecap="round" opacity="0.6"/><path d="M200 55 C272 82 296 138 260 185 C218 238 182 258 200 305 C218 352 256 362 240 385" fill="none" stroke="#e8ede9" stroke-width="1" stroke-dasharray="3 9" opacity="0.35"/><ellipse cx="204" cy="48" rx="15" ry="11" fill="#e8ede9"/><circle cx="211" cy="44" r="3.5" fill="#080a09"/><circle cx="212.5" cy="43" r="1.2" fill="#4e9e68"/><path d="M193 53 L180 43 M193 53 L180 50" stroke="#e8ede9" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    label: "Floral",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#141815"/><path d="M200 370 Q196 302 200 262" stroke="#4e9e68" stroke-width="1.5" fill="none"/><path d="M200 324 Q168 302 158 276 Q184 288 200 308" fill="none" stroke="#4e9e68" stroke-width="1.2"/><path d="M200 298 Q234 280 244 257 Q219 270 200 288" fill="none" stroke="#4e9e68" stroke-width="1.2"/><ellipse cx="200" cy="208" rx="52" ry="62" fill="none" stroke="#e8ede9" stroke-width="1.2" transform="rotate(-12 200 208)"/><ellipse cx="200" cy="208" rx="52" ry="62" fill="none" stroke="#e8ede9" stroke-width="1.2" transform="rotate(32 200 208)"/><ellipse cx="200" cy="208" rx="52" ry="62" fill="none" stroke="#e8ede9" stroke-width="1.2" transform="rotate(76 200 208)"/><ellipse cx="200" cy="208" rx="33" ry="44" fill="none" stroke="#e8ede9" stroke-width="0.9" transform="rotate(4 200 208)" opacity="0.65"/><ellipse cx="200" cy="208" rx="33" ry="44" fill="none" stroke="#e8ede9" stroke-width="0.9" transform="rotate(64 200 208)" opacity="0.65"/><ellipse cx="200" cy="208" rx="33" ry="44" fill="none" stroke="#e8ede9" stroke-width="0.9" transform="rotate(124 200 208)" opacity="0.65"/><circle cx="200" cy="208" r="13" fill="none" stroke="#4e9e68" stroke-width="1" opacity="0.6"/><circle cx="200" cy="208" r="5" fill="#4e9e68" opacity="0.4"/><path d="M200 342 L189 326 M200 312 L213 297" stroke="#4e9e68" stroke-width="1.1" fill="none"/></svg>`,
  },
  {
    label: "Color",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#0d0f0e"/><path d="M200 200 Q118 118 78 160 Q58 202 120 222 Q160 242 200 200Z" fill="none" stroke="#4e9e68" stroke-width="1.5"/><path d="M200 200 Q282 118 322 160 Q342 202 280 222 Q240 242 200 200Z" fill="none" stroke="#4e9e68" stroke-width="1.5"/><path d="M200 200 Q132 242 112 292 Q132 322 172 300 Q196 287 200 200Z" fill="none" stroke="#4e9e68" stroke-width="1.2"/><path d="M200 200 Q268 242 288 292 Q268 322 228 300 Q204 287 200 200Z" fill="none" stroke="#4e9e68" stroke-width="1.2"/><path d="M200 200 Q148 152 112 172" stroke="#4e9e68" stroke-width="0.6" fill="none" opacity="0.45"/><path d="M200 200 Q252 152 288 172" stroke="#4e9e68" stroke-width="0.6" fill="none" opacity="0.45"/><path d="M200 200 Q158 258 138 288" stroke="#4e9e68" stroke-width="0.5" fill="none" opacity="0.4"/><path d="M200 200 Q242 258 262 288" stroke="#4e9e68" stroke-width="0.5" fill="none" opacity="0.4"/><ellipse cx="200" cy="216" rx="5" ry="26" fill="#e8ede9" opacity="0.9"/><path d="M197 188 Q178 162 166 150" stroke="#e8ede9" stroke-width="1.1" fill="none"/><circle cx="166" cy="150" r="2.8" fill="#4e9e68"/><path d="M203 188 Q222 162 234 150" stroke="#e8ede9" stroke-width="1.1" fill="none"/><circle cx="234" cy="150" r="2.8" fill="#4e9e68"/><circle cx="138" cy="184" r="5" fill="#4e9e68" opacity="0.4"/><circle cx="262" cy="184" r="5" fill="#4e9e68" opacity="0.4"/></svg>`,
  },
  {
    label: "Minimalist",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#141815"/><circle cx="200" cy="195" r="90" fill="none" stroke="#e8ede9" stroke-width="1.3" opacity="0.8"/><circle cx="200" cy="195" r="65" fill="none" stroke="#e8ede9" stroke-width="0.7" opacity="0.4"/><circle cx="200" cy="195" r="110" fill="none" stroke="#4e9e68" stroke-width="0.6" opacity="0.3"/><line x1="200" y1="105" x2="200" y2="285" stroke="#e8ede9" stroke-width="0.8" opacity="0.35"/><line x1="110" y1="195" x2="290" y2="195" stroke="#e8ede9" stroke-width="0.8" opacity="0.35"/><line x1="136" y1="131" x2="264" y2="259" stroke="#e8ede9" stroke-width="0.5" opacity="0.2"/><line x1="264" y1="131" x2="136" y2="259" stroke="#e8ede9" stroke-width="0.5" opacity="0.2"/><circle cx="200" cy="195" r="8" fill="none" stroke="#4e9e68" stroke-width="1.2"/><circle cx="200" cy="195" r="3" fill="#4e9e68" opacity="0.7"/><circle cx="200" cy="105" r="3" fill="#4e9e68" opacity="0.5"/><circle cx="200" cy="285" r="3" fill="#4e9e68" opacity="0.5"/><circle cx="110" cy="195" r="3" fill="#4e9e68" opacity="0.5"/><circle cx="290" cy="195" r="3" fill="#4e9e68" opacity="0.5"/></svg>`,
  },
];

function MockPhoto({ svg, label, index }: { svg: string; label: string; index: number }) {
  const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square overflow-hidden group bg-shadow-surface block"
      style={{ transitionDelay: `${index * 55}ms` }}
    >
      <img
        src={dataUri}
        alt={`${label} tattoo illustration — Anne Nogueira SALL Studio Porto`}
        className="w-full h-full object-cover transition-all duration-600 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-void/0 group-hover:bg-void/40 transition-colors duration-400" />
      <span className="absolute bottom-3 left-3 font-label text-[10px] tracking-widest uppercase text-white/0 group-hover:text-white/80 transition-colors duration-300">
        {label}
      </span>
    </a>
  );
}

export default function PortfolioSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  const hasRealImages = portfolioImages.length > 0;
  const displayImages = portfolioImages.slice(0, 6);

  return (
    <section className="relative bg-abyss overflow-hidden">
      <div className="w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div
          ref={ref}
          className={[
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4">
                {t("portfolio.eyebrow")}
              </p>
              <h2
                className="font-display font-black text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                {t("portfolio.title")}
              </h2>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group shrink-0"
            >
              <span className="font-label font-medium text-xs tracking-[0.18em] uppercase text-phosphor group-hover:text-glow transition-colors duration-300">
                {t("portfolio.follow")}
              </span>
              <span className="text-phosphor group-hover:text-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-sm" aria-hidden>
                ↗
              </span>
            </a>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 mb-10">
            {hasRealImages
              ? displayImages.map((img, i) => (
                  <a
                    key={img.id}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square overflow-hidden group bg-shadow-surface block"
                    style={{ transitionDelay: `${i * 55}ms` }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-void/0 group-hover:bg-void/30 transition-colors duration-300" />
                    <span className="absolute bottom-3 left-3 font-label text-[10px] tracking-widest uppercase text-white/0 group-hover:text-white/80 transition-colors duration-300">
                      {img.style}
                    </span>
                  </a>
                ))
              : MOCK_SVGS.map((m, i) => (
                  <MockPhoto key={m.label} svg={m.svg} label={m.label} index={i} />
                ))
            }
          </div>

          {!hasRealImages && (
            <p className="font-body font-light text-ink-tertiary text-xs text-center mb-6 italic">
              {t("portfolio.empty")}
            </p>
          )}

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-8 py-3 font-label font-medium text-xs tracking-[0.18em] uppercase text-ink-secondary hover:text-ink-primary hover:border-ink-secondary transition-all duration-300 group"
            >
              {t("portfolio.viewAll")}
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
}
