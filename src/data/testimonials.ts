export interface Testimonial {
  id: string
  quotePt: string
  quoteEn: string
  client: string
  style: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't-001',
    quotePt:
      'A Anne capturou exatamente o que eu queria. A atenção ao detalhe é incrível — ainda olho para ela todos os dias com amor.',
    quoteEn:
      'Anne captured exactly what I wanted. The attention to detail is incredible — I still look at it every day with love.',
    client: 'Mariana',
    style: 'Anime / Color',
  },
  {
    id: 't-002',
    quotePt:
      'Fui com uma ideia vaga e ela transformou-a numa obra de arte. O processo foi leve, confortável e muito profissional.',
    quoteEn:
      'I came with a vague idea and she transformed it into a work of art. The process was smooth, comfortable, and very professional.',
    client: 'João',
    style: 'Blackwork',
  },
  {
    id: 't-003',
    quotePt:
      'A minha tatuagem Pokémon ficou perfeita. Ela entende a cultura e isso vê-se em cada traço. Recomendo sem hesitar.',
    quoteEn:
      'My Pokémon tattoo turned out perfect. She understands the culture and it shows in every line. I recommend without hesitation.',
    client: 'Sofia',
    style: 'Anime / Color',
  },
]
