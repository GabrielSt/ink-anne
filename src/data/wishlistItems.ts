export interface WishlistItem {
  id: string
  namePt: string
  nameEn: string
  notePt: string
  noteEn: string
  style: string
  discountPercent: number // % off the regular consultation price
  image?: string // path relative to src/assets/wishlist/
}

export const wishlistItems: WishlistItem[] = [
  {
    id: 'wl-001',
    namePt: 'Totoro — Studio Ghibli',
    nameEn: 'Totoro — Studio Ghibli',
    notePt:
      'Sempre quis fazer um Totoro no meu estilo fine line. Seria uma peça muito especial — delicada mas cheia de personalidade.',
    noteEn:
      "I've always wanted to do a Totoro in my fine line style. It would be a very special piece — delicate but full of personality.",
    style: 'Fine Line',
    discountPercent: 27,
  },
  {
    id: 'wl-002',
    namePt: 'Sailor Moon',
    nameEn: 'Sailor Moon',
    notePt:
      'A Sailor Moon marcou a minha infância. Quero criar uma versão muito minha, cheia de cor e emoção.',
    noteEn:
      'Sailor Moon shaped my childhood. I want to create my own version — full of colour and feeling.',
    style: 'Anime / Color',
    discountPercent: 29,
  },
  {
    id: 'wl-003',
    namePt: 'Medusa',
    nameEn: 'Medusa',
    notePt:
      'Medusa é um símbolo poderoso. Quero explorar o blackwork ao máximo nesta peça — textura, detalhe, presença.',
    noteEn:
      'Medusa is a powerful symbol. I want to push blackwork to the limit here — texture, detail, presence.',
    style: 'Blackwork',
    discountPercent: 27,
  },
  {
    id: 'wl-004',
    namePt: 'Dragão Japonês',
    nameEn: 'Japanese Dragon',
    notePt:
      'Um dragão japonês em cor ilustrativa é algo que quero muito criar. É um canvas para contar uma história.',
    noteEn:
      "A Japanese dragon in illustrative colour is something I deeply want to create. It's a canvas for storytelling.",
    style: 'Color',
    discountPercent: 26,
  },
  {
    id: 'wl-005',
    namePt: 'Espírito da Floresta — Princesa Mononoke',
    nameEn: 'Forest Spirit — Princess Mononoke',
    notePt:
      'Os espíritos da floresta do Studio Ghibli em blackwork seria um trabalho fora do comum. Adoro o contraste.',
    noteEn:
      "Studio Ghibli forest spirits in blackwork would be unlike anything I've done. I love the contrast.",
    style: 'Blackwork',
    discountPercent: 27,
  },
  {
    id: 'wl-006',
    namePt: 'Lua e Flores Botânicas',
    nameEn: 'Moon & Botanical Florals',
    notePt:
      'Uma composição com lua crescente e flores botânicas em fine line. Feminino, etéreo, permanente.',
    noteEn:
      'A composition with a crescent moon and botanical florals in fine line. Feminine, ethereal, permanent.',
    style: 'Fine Line / Floral',
    discountPercent: 27,
  },
]
