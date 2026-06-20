// One-time script: fetch Gen 1+2 Pokémon from PokéAPI and generate pokemonDesigns.ts
// Run: node scripts/fetch-pokemon.mjs
import { writeFileSync } from 'fs';

const TOTAL = 251;

// Pokémon that already have been tattooed — preserved from existing data
const TAKEN = new Set([1, 25]); // Bulbasaur, Pikachu

// Some Pokémon have overridden default "color" tattoo style
const STYLE_OVERRIDES = { 25: 'blackwork', 39: 'fineline', 94: 'blackwork', 158: 'fineline', 197: 'blackwork' };

// PokéAPI type names match our system except for a few we alias
const TYPE_ALIASES = { 'poison': 'poison', 'fighting': 'fighting', 'flying': 'flying', 'bug': 'bug', 'rock': 'rock', 'ground': 'ground', 'ice': 'ice', 'steel': 'steel' };

function cleanName(raw) {
  const specials = {
    'nidoran-f': 'Nidoran ♀',
    'nidoran-m': 'Nidoran ♂',
    'mr-mime': 'Mr. Mime',
    'farfetchd': "Farfetch'd",
    'ho-oh': 'Ho-Oh',
    'mime-jr': 'Mime Jr.',
    'porygon-z': 'Porygon-Z',
  };
  if (specials[raw]) return specials[raw];
  return raw
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

async function fetchAll() {
  console.log(`Fetching ${TOTAL} Pokémon from PokéAPI…`);
  const designs = [];

  for (let id = 1; id <= TOTAL; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) { console.error(`  ✗ #${id} HTTP ${res.status}`); continue; }
    const data = await res.json();

    const primaryType = data.types.sort((a, b) => a.slot - b.slot)[0].type.name;
    const gen = id <= 151 ? 1 : 2;

    designs.push({
      id: `pk-${String(id).padStart(3, '0')}`,
      number: id,
      name: cleanName(data.name),
      gen,
      primaryType,
      tattooStyle: STYLE_OVERRIDES[id] ?? 'color',
      status: TAKEN.has(id) ? 'taken' : 'available',
    });

    if (id % 25 === 0 || id === TOTAL) process.stdout.write(`  → ${id}/${TOTAL}\n`);
  }

  const header = `// Auto-generated from PokéAPI — run scripts/fetch-pokemon.mjs to refresh.
// Do NOT add runtime API calls; bake the data here and add images separately.

export type PokemonStatus = 'available' | 'taken'
export type PokemonTattooStyle = 'color' | 'blackwork' | 'fineline' | 'minimalist'
export type PokemonType =
  | 'fire' | 'water' | 'grass' | 'electric' | 'normal'
  | 'ghost' | 'psychic' | 'dark' | 'fairy' | 'dragon'
  | 'poison' | 'fighting' | 'flying' | 'bug' | 'rock'
  | 'ground' | 'ice' | 'steel'

export interface PokemonDesign {
  id: string
  number: number
  name: string
  gen: number
  primaryType: PokemonType
  tattooStyle: PokemonTattooStyle
  status: PokemonStatus
  image?: string // filename inside src/assets/pokedex/
}

// Type → accent colour (dark-mode safe, subtle)
export const typeColor: Record<PokemonType, { bg: string; border: string; text: string }> = {
  fire:     { bg: 'rgba(239,68,68,0.10)',    border: 'rgba(239,68,68,0.35)',    text: '#ef4444' },
  water:    { bg: 'rgba(59,130,246,0.10)',   border: 'rgba(59,130,246,0.35)',   text: '#60a5fa' },
  grass:    { bg: 'rgba(34,197,94,0.10)',    border: 'rgba(34,197,94,0.35)',    text: '#4ade80' },
  electric: { bg: 'rgba(234,179,8,0.12)',    border: 'rgba(234,179,8,0.40)',    text: '#facc15' },
  normal:   { bg: 'rgba(161,161,170,0.06)',  border: 'rgba(161,161,170,0.20)',  text: '#a1a1aa' },
  ghost:    { bg: 'rgba(139,92,246,0.10)',   border: 'rgba(139,92,246,0.35)',   text: '#a78bfa' },
  psychic:  { bg: 'rgba(236,72,153,0.10)',   border: 'rgba(236,72,153,0.35)',   text: '#f472b4' },
  dark:     { bg: 'rgba(107,114,128,0.08)',  border: 'rgba(107,114,128,0.25)',  text: '#6b7280' },
  fairy:    { bg: 'rgba(244,114,182,0.10)',  border: 'rgba(244,114,182,0.35)',  text: '#f9a8d4' },
  dragon:   { bg: 'rgba(99,102,241,0.10)',   border: 'rgba(99,102,241,0.35)',   text: '#818cf8' },
  poison:   { bg: 'rgba(168,85,247,0.08)',   border: 'rgba(168,85,247,0.28)',   text: '#c084fc' },
  fighting: { bg: 'rgba(234,88,12,0.08)',    border: 'rgba(234,88,12,0.28)',    text: '#fb923c' },
  flying:   { bg: 'rgba(125,211,252,0.08)',  border: 'rgba(125,211,252,0.28)',  text: '#7dd3fc' },
  bug:      { bg: 'rgba(132,204,22,0.08)',   border: 'rgba(132,204,22,0.28)',   text: '#a3e635' },
  rock:     { bg: 'rgba(120,113,108,0.08)',  border: 'rgba(120,113,108,0.25)',  text: '#a8a29e' },
  ground:   { bg: 'rgba(180,135,58,0.08)',   border: 'rgba(180,135,58,0.28)',   text: '#d4a862' },
  ice:      { bg: 'rgba(165,243,252,0.07)',  border: 'rgba(165,243,252,0.25)',  text: '#a5f3fc' },
  steel:    { bg: 'rgba(148,163,184,0.07)',  border: 'rgba(148,163,184,0.22)',  text: '#94a3b8' },
}

`;

  const rows = designs.map(d => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${d.number}.png`;
    const nameQuote = d.name.includes("'") ? '"' : "'";
    const base = `  { id: '${d.id}', number: ${d.number}, name: ${nameQuote}${d.name}${nameQuote}, gen: ${d.gen}, primaryType: '${d.primaryType}', tattooStyle: '${d.tattooStyle}', status: '${d.status}', image: '${imgUrl}' }`;
    return base + ',';
  }).join('\n');

  const footer = `\nexport const pokemonDesigns: PokemonDesign[] = [\n${rows}\n]\n
export const pokemonTakenCount     = pokemonDesigns.filter((p) => p.status === 'taken').length
export const pokemonAvailableCount = pokemonDesigns.filter((p) => p.status === 'available').length
`;

  writeFileSync('src/data/pokemonDesigns.ts', header + footer, 'utf8');
  console.log(`\n✓ Written src/data/pokemonDesigns.ts with ${designs.length} Pokémon`);
}

fetchAll().catch(e => { console.error(e); process.exit(1); });
