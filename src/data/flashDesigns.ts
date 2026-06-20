export type FlashStatus = 'available' | 'taken'
export type FlashStyle = 'anime' | 'color' | 'fineline' | 'blackwork' | 'minimalist' | 'floral'

export interface FlashDesign {
  id: string
  namePt: string
  nameEn: string
  style: FlashStyle
  status: FlashStatus
  image?: string // path relative to src/assets/flash/
}

export const flashDesigns: FlashDesign[] = [
  {
    id: 'fl-001',
    namePt: 'Lua Crescente Fine Line',
    nameEn: 'Crescent Moon Fine Line',
    style: 'fineline',
    status: 'available',
  },
  {
    id: 'fl-002',
    namePt: 'Flor de Cerejeira',
    nameEn: 'Cherry Blossom',
    style: 'floral',
    status: 'available',
  },
  {
    id: 'fl-003',
    namePt: 'Cobra Blackwork',
    nameEn: 'Blackwork Snake',
    style: 'blackwork',
    status: 'available',
  },
  {
    id: 'fl-004',
    namePt: 'Gato Anime',
    nameEn: 'Anime Cat',
    style: 'anime',
    status: 'taken',
  },
  {
    id: 'fl-005',
    namePt: 'Olho Ilustrativo',
    nameEn: 'Illustrative Eye',
    style: 'color',
    status: 'available',
  },
  {
    id: 'fl-006',
    namePt: 'Círculo Geométrico',
    nameEn: 'Geometric Circle',
    style: 'minimalist',
    status: 'taken',
  },
]
