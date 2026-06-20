export interface GiftTier {
  id: string
  amount: number
  descPt: string
  descEn: string
}

export const giftTiers: GiftTier[] = [
  {
    id: 'g-100',
    amount: 100,
    descPt: 'Cobre uma peça flash pequena ou aproximadamente 1 hora de sessão.',
    descEn: 'Covers a small flash piece or approximately 1 hour of tattooing.',
  },
  {
    id: 'g-200',
    amount: 200,
    descPt: 'Cobre um flash médio ou meia sessão de tatuagem personalizada.',
    descEn: 'Covers a medium flash or half a custom tattoo session.',
  },
  {
    id: 'g-300',
    amount: 300,
    descPt: 'Cobre uma sessão completa de tatuagem personalizada.',
    descEn: 'Covers a full custom tattoo session.',
  },
]
