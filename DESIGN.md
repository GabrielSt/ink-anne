# DESIGN.md — Ink Anne

> Versão 2.0 · outubro 2026
> Substitui a v1 ("agência premium / perfume de luxo"), que não tinha nada a ver com a Anne e era a causa da cara de IA do site.

Este documento é curto de propósito. Se uma decisão não está aqui, a pergunta é sempre: **"isto parece algo que a Anne desenharia ou publicaria no Instagram dela?"** Se a resposta for "parece um template", não entra.

---

## 1. De onde vem a identidade

A identidade **não se inventa** — copia-se do que a Anne já produz:

| Fonte | O que tirar dela |
| --- | --- |
| **Logo** (`src/assets/logo1–4`) | Lettering neo-tribal/gótico desenhado à mão, formato de **coração**, textura **pontilhada** (dotwork), **estrela de 4 pontas** ao centro, versão **sticker** com contorno branco. |
| **O trabalho dela** (`src/assets/portfolio/`) | Anime e cartoon a cores, contorno preto grosso, chibis em formato de **sticker** com borda branca, flores, cores saturadas. |
| **Ela** (`ink.anne*.png/jpg`) | Alt/goth mas calorosa e sorridente. Cabelo rosa, sacred heart, piercings. Brasileira morando no Porto. Fala na primeira pessoa, em português do Brasil, termina a bio com 🤍. |
| **Instagram** [@ink.anne](https://www.instagram.com/ink.anne/) | Referência de tom e de fotografia. Na dúvida, abrir o feed. |

**Resumo da personalidade:** *goth fofa, ilustradora, nerd de anime.* Não é luxo, não é minimalismo de galeria, não é "underground industrial".

---

## 2. Regras de ouro

1. **O trabalho é o protagonista.** Fotos grandes, sem molduras, sem efeitos por cima.
2. **Preto, branco e um verde.** Nenhuma outra cor de UI. As cores vivas vêm das tatuagens.
3. **Uma família tipográfica.** Hierarquia por tamanho e peso, não por fontes diferentes.
4. **Ornamento só se vier da Anne.** Estrela da logo, coração, pontilhado, stickers. Nada de ícones unicode decorativos.
5. **Escrever como ela fala.** Primeira pessoa, português do Brasil, frases curtas. Nada de slogans de agência.

### 2.1 Proibido (os "tells" de IA que já tivemos)

- Eyebrow em caixa alta + tracking largo + cor de destaque por cima de cada título (`text-xs tracking-[0.28em] uppercase text-green`).
- A fórmula *eyebrow → H2 centrado → parágrafo cinza → grid → botão outline* repetida em todas as secções.
- **Chips "neon"**: fundo translúcido + borda colorida translúcida (`bg-green/10 border border-green/30`). Bolinha a pulsar em badges.
- Grids de hairline (`gap-px bg-line`) como solução por defeito para qualquer lista.
- Setas `→ ↗` em todos os links. Só se usa `↗` quando o link sai do site.
- Glows radiais, gradientes decorativos, `drop-shadow` colorido.
- Títulos genéricos ("O Estilo", "O Trabalho", "O Que Dizem", "Próximo Passo").
- Texto com letras espaçadas ("A N N E").
- Fade-in-up em tudo como única ideia de movimento.
- Depoimentos, números ou factos inventados.

---

## 3. Cor

Tokens em `src/index.css` (`@theme`). Usar sempre o token, nunca o hex solto.

| Token | Hex | Uso |
| --- | --- | --- |
| `ink` | `#0B0C0B` | Fundo principal |
| `ink-2` | `#121412` | Fundo alternado de secção |
| `ink-3` | `#1A1D1A` | Superfícies (balões, inputs, hover) |
| `line` | `#262A26` | Divisórias de listas |
| `paper` | `#F2F2EC` | Texto principal, contorno dos stickers, botão secundário claro |
| `paper-dim` | `#B4B8B0` | Texto de corpo secundário |
| `paper-mute` | `#7C8278` | Metadados, legendas (contraste ≥ 4.5:1 sobre `ink`) |
| `green` | `#9BD67E` | **O verde da Anne.** CTA principal, destaques de texto, o bloco verde |
| `green-light` | `#B7E5A0` | Hover do verde |
| `green-deep` | `#3F6B2E` | Detalhes finos sobre preto (divisórias curtas) |

### 3.1 Notas sobre o `#9BD67E`

- **Contraste:** ~11.6:1 sobre `ink`. Excelente como texto sobre preto e como fundo com texto preto. **Texto branco sobre o verde não passa**; sobre verde é sempre `ink`.
- **Risco:** é um verde claro e pastel. Ao lado de uma fonte arredondada pode virar "app de bem-estar", "matcha café" ou "cor de sucesso" se for usado em pequenas doses translúcidas. Usado **chapado e em massa**, ao lado de preto, lê-se como verde "slime/tóxico", que combina com o lado goth-fofo dela.
- **Como usar:**
  - Sempre **sólido**. Nada de `green/10`, `green/30`, glows.
  - **Um bloco verde por página** (na Home é a Pokédex). É o momento de cor da página.
  - No resto, o verde aparece só em: CTA principal, palavras destacadas, preços/descontos, bolinha de "disponível".

---

## 4. Tipografia

Duas famílias, com papéis bem separados:

| Família | Token / classe | Papel |
| --- | --- | --- |
| **Texturina** (Google Fonts, 400–600) | `--font-display` / `font-display` | Títulos de secção, títulos de item, nome "Anne Nogueira" na nav, links do menu mobile. Serifa com DNA gótico que conversa com o lettering da logo, mas é legível. |
| **Quicksand** (Google Fonts, 400–600) | `--font-sans` (padrão do `body`) | Todo o resto: corpo, legendas, botões, nav, metadados. |
| `Pocket Monk` (local) | `--font-pokemon` | **Só** a palavra "Pokédex". |

| Papel | Família | Tamanho | Peso | Tracking |
| --- | --- | --- | --- | --- |
| Título de secção | Texturina | `clamp(2.5rem, 6vw, 4.5rem)` | 600 | `-0.01em` |
| Frase-manifesto | Texturina | `clamp(1.75rem, 4.5vw, 3.75rem)` | 600 | `-0.01em` |
| Título de item | Texturina | `1.25–1.75rem` | 600 | normal |
| Corpo | Quicksand | `1rem–1.125rem` | 500 | normal |
| Botões, nav, ênfase | Quicksand | `0.875–1.125rem` | 600 | normal |
| Metadados | Quicksand | `0.875rem` | 500 | normal |

Regras:
- **Quicksand nunca acima de 600.** Em 700 ela fica grossa e arredondada demais, com cara de Comic Sans. Ela brilha no texto corrido e pequeno.
- **Título é sempre Texturina.** Nada de Quicksand grande e bold.
- **Peso mínimo 400**, corpo em **500**. Quicksand em 300 desaparece sobre preto.
- **Sem caixa alta espaçada.**
- Títulos em sentence case, alinhados à esquerda (centralizado só no CTA final).
- Alternativa testada: **Grenze Gotisch** (mais próxima da logo, mas pesada no "M" e menos legível). Trocar é só mudar `--font-display`.
- O ideal continua sendo a Anne letrar à mão os títulos principais (ver §9).

---

## 5. Componentes

### Botões
Pílula (`rounded-full`), Quicksand 600, sem setas.

| Tipo | Classes base |
| --- | --- |
| Primário | `rounded-full bg-green text-ink font-semibold px-7 py-3 hover:bg-green-light` |
| Secundário claro | `rounded-full bg-paper text-ink font-semibold px-7 py-3 hover:bg-green` |
| Secundário outline | `rounded-full border-2 border-paper/30 text-paper font-semibold px-7 py-3 hover:border-paper` |
| Sobre o bloco verde | `rounded-full bg-ink text-green font-semibold px-7 py-3` |

Texto dos botões na voz dela: "Marcar sessão", "Ver todos os flashes", "Abrir a Pokédex".

### Navegação (`components/layout/Header.tsx`)
- Layout padrão: **"Anne Nogueira"** (Texturina) à esquerda → links no centro (Flash, Pokédex, Wishlist, Vale-presente) → PT/EN + "Marcar sessão" à direita. Altura fixa de 64px; o tamanho nunca muda.
- No topo da Home: transparente. Fora do topo ou em outras páginas: `bg-ink/75 backdrop-blur-md` + borda sutil.
- **Esconde ao rolar para baixo e volta ao rolar para cima** (translate de 300ms). Enquanto sai, fica transparente; só ganha fundo quando volta. Nada de logo crescendo ou encolhendo.
- **Mobile:** hambúrguer sempre visível. Abre um **menu em tela cheia** com vidro fosco (`bg-ink/70 backdrop-blur-2xl`): links em lista a partir do topo (Quicksand 600, `text-xl`, divisórias finas), nada grande nem centralizado na vertical; CTA, idioma e Instagram no rodapé. Sem sidebar.

### Hero
Um único `<h1>` com a **logo** (`alt="Anne Nogueira"`), **"Anime & Geek Tattoo Artist"** (Texturina) e **"Porto, PT"**. Essa frase é o posicionamento dela: manter igual no `<title>`, na meta description e no JSON-LD (`index.html`).
- Vídeo: `src/assets/hero.mp4` (H.264, 1440px, já em P&B, ~1,7 MB) + `hero-poster.jpg`. A fonte é vertical, então `object-position: 50% 40%` evita cortar a cabeça no desktop. **Nunca usar HEVC/.mov**: Firefox e parte do Chrome não reproduzem.

### Sticker (`.sticker` em `index.css`)
O componente-assinatura. Borda branca de 6px, cantos de 18px, inclinação via `--tilt` (entre −2.5° e 2.5°). Endireita no hover.
Usar para: flash, wishlist (quando houver imagens), futura Pokédex. **Não** usar nas fotos do portfólio, que são fotos reais e não stickers.

### Estrela (`components/ui/Sparkle.tsx`)
A estrela de 4 pontas do centro da logo. Placeholder de imagem, ornamento pontual. No máximo uma por secção.

### Estado (disponível / reservado)
- Disponível: bolinha sólida `bg-green` + texto. Sem chip.
- Reservado: item a 40% de opacidade + grayscale, nome riscado.

### Listas
Linhas com `border-t border-line`, número à esquerda (`01`, `02`), conteúdo, valor à direita. Lê-se como uma página de caderno, não como cards.

### Depoimentos
Balões de mensagem (`bg-ink-3 rounded-3xl rounded-bl-md`). A secção esconde-se sozinha se `testimonials` estiver vazio.

---

## 6. Layout e ritmo

- Contentor: `max-w-7xl mx-auto px-6 lg:px-16`. Secções `py-24 lg:py-32`.
- Alternar fundos `ink` / `ink-2` para separar secções. **Sem linhas de 1px no topo e no fundo de cada secção.**
- Cabeçalho de secção: título grande à esquerda + descrição curta à direita (desktop). Variar a composição entre secções, não repetir sempre a mesma.
- Mobile: margem lateral de 24px, sem scroll horizontal, grids de 2 colunas no máximo para imagens.

### Home (ordem atual)
1. Hero: vídeo + logo centralizada + uma linha de texto
2. Sobre: foto + bio dela
3. Estilos: uma frase-manifesto, sem cards
4. Portfólio
5. Flash: stickers
6. **Pokédex: o bloco verde**
7. Wishlist: lista
8. Depoimentos: balões (escondida se vazia)
9. CTA final: logo + "Me conta a sua ideia." + localização genérica (Porto, espaço totalmente equipado). **Não mencionar o nome do estúdio.**

---

## 7. Movimento

- Reveal suave ao entrar no ecrã (`useInView`, 700ms) é aceitável, mas nada além disso por defeito.
- Movimento com intenção: o sticker endireita no hover; imagens fazem `scale-105` no hover do portfólio.
- Sem parallax novo, sem pulsar, sem glows animados. `prefers-reduced-motion` já está tratado globalmente.

---

## 8. Imagem

- Fotos do portfólio a cores, como no Instagram. **Nunca** aplicar grayscale ou tint no trabalho dela.
- O vídeo do hero está em grayscale como fundo, o que é aceitável porque o texto vive por cima.
- Proporções: quadrado ou 4:5 (formato Instagram).
- Sempre `alt` descritivo: "<personagem> tattoo by Anne Nogueira, Porto".

---

## 9. Voz (copy)

- **Português do Brasil**, primeira pessoa, "você" (com "te" coloquial: "pronto para te receber"). Frases curtas.
- A Anne é brasileira no Porto, então nada de construções de Portugal que soariam forçadas na boca dela: "especializo-me", "estou a tatuar", "escolhe o teu", "contacto", "prenda". Termos de lá só quando forem nome de lugar ou algo inevitável.
- Usar as palavras dela: "Anime, colors e black work" é como ela própria se descreve.
- Evitar: "sem compromissos", "arte permanente transformada…", "experiência única", "elevar".
- Qualquer texto novo escrito por dev ou por IA deve ser **revisto pela Anne** antes de publicar.

---

## 10. Pendente: reestruturação da Pokédex

> Documentado para fazer depois. A secção da Home já foi alinhada, mas a página `/pokedex` e o `PokemonCard` ainda não.

### Problemas atuais da página `/pokedex`
- Mistura três linguagens: aparelho Pokédex vermelho (`pokedex.png`, glow vermelho), a marca (verde) e o logo "Pokédex" roxo/amarelo no header (`pokedex_logo.png`).
- Os cards mostram a **arte oficial** da PokéAPI, por isso parece um catálogo e não o projeto dela.
- Chips translúcidos (`border-green/30 bg-green/8`) em filtros, badge e status.
- Strings fixas fora do i18n em `PokemonCard.tsx`: "Disponível", "Feito", "Reclamar", "Ver tatuagem", "TATTOOED".
- `typeColor` em `pokemonDesigns.ts` define uma paleta de 18 cores que não é usada pela marca e deve ser removida.

### Direção: "álbum de cromos da Anne"
1. **Hero da página** = o bloco verde da Home (título em Pocket Monk, contador `002/251` grande, barra de progresso preta). Remover `pokedex.png`.
2. **Grelha** = página de álbum: cada slot tem o número `#001` e:
   - se **ainda não desenhado**: silhueta preta (arte oficial com `brightness(0)`) sobre `ink-3`, "Quem é este Pokémon?";
   - se **desenhado pela Anne** (novo campo `artwork` em `PokemonDesign`): o desenho dela como **sticker** (`.sticker`);
   - se **tatuado**: foto da tatuagem a cores + carimbo **desenhado à mão pela Anne** (PNG), em vez do círculo "TATTOOED".
3. **Filtros**: pílulas sólidas (ativo `bg-paper text-ink`, inativo `text-paper-dim`), sem bordas translúcidas. Juntar "Gen I / Gen II" num só controlo.
4. **Modal**: ao clicar num tatuado, mostrar a foto grande e o link para o post no Instagram.
5. ~~**Header**: trocar `pokedex_logo.png` por texto~~ Feito: a nav agora usa texto. Apagar `pokedex_logo.png`.
6. Passar todas as strings para `pt.json` e `en.json`.
7. Remover `bg-pokemon.jpg` e `pokedex.png` dos assets quando deixarem de ser usados.

---

## 11. Pendente: migrar as outras páginas

A Home, o Header e o Footer já seguem este documento. Ainda têm padrões da v1 (eyebrows em caixa alta e chips translúcidos):

`pages/Flash.tsx`, `pages/Wishlist.tsx`, `pages/GiftCard.tsx`, `pages/Book.tsx`, `pages/Pokedex.tsx`, `components/ui/ReservationModal.tsx`, `components/ui/PokemonCard.tsx`.

As cores e a fonte já mudaram nestas páginas (tokens globais). Falta aplicar §2.1 e §5.
