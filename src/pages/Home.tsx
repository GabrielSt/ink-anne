import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-svh items-center justify-center bg-black">
      <h1 className="text-white text-5xl font-light tracking-widest uppercase">
        {t('home.title')}
      </h1>
    </main>
  )
}
