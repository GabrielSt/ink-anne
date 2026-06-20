import obanai from "../assets/portfolio/obanai.jpg"
import sakura from "../assets/portfolio/sakura.jpg"
import no_face from "../assets/portfolio/no_face_chihiro.jpg"
export interface PortfolioImage {
  id: string
  src: string
  alt: string
  label: string
  style: string
  /** Link to the specific Instagram post. Falls back to the profile if omitted. */
  postUrl?: string
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A REAL TATTOO PHOTO
//
// 1. Save the image from Instagram into:  src/assets/portfolio/
//    (e.g. src/assets/portfolio/anime-dragon.jpg)
//
// 2. Import it at the top of this file, next to the others:
//      import animeDragon from "../assets/portfolio/anime-dragon.jpg"
//
// 3. Add an entry to the array below using that import as `src`.
//    - `style`   : short label shown on hover (e.g. "Anime / Color")
//    - `alt`     : descriptive text for SEO + accessibility
//    - `postUrl` : the Instagram post link so the photo clicks through to it
//
// The first 6 entries are displayed in the home page grid.
// While the array is empty, the section falls back to placeholder artwork.
// ─────────────────────────────────────────────────────────────────────────────

// Example (uncomment and adapt once the file exists):
// import animeDragon from "../assets/portfolio/anime-dragon.jpg"

export const portfolioImages: PortfolioImage[] = [
  {
    id: "obanai",
    src: obanai,
    alt: "Obanai tattoo by Anne Nogueira at SALL Studio Porto",
    label: "Obanai Iguro - Demon Slayer",
    style: "Anime / Color",
    postUrl: "https://www.instagram.com/p/DV9MXQpjbGK/",
  },
  {
    id: "sakura",
    src: sakura,
    alt: "Sakura tattoo by Anne Nogueira at SALL Studio Porto",
    label: "Sakura - Sakura Card Captors",
    style: "Anime / Color",
    postUrl: "https://www.instagram.com/p/DIMJYPAoYx5/?img_index=1",
  },
  {
    id: "no_face",
    src: no_face,
    alt: "No Face from Spirited Away tattoo by Anne Nogueira at SALL Studio Porto",
    label: "No Face & Chihiro - Spirited Away",
    style: "Anime / Color",
    postUrl: "https://www.instagram.com/p/C6WmjgAIZI7/",
  },
]
