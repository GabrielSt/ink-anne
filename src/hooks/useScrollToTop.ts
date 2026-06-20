import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToTop() {
  const { pathname } = useLocation()

  // useLayoutEffect runs synchronously before the browser paints, so the new
  // route is already at the top when it first becomes visible — no animation.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
