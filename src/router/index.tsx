import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Flash from '../pages/Flash'
import Pokedex from '../pages/Pokedex'
import Wishlist from '../pages/Wishlist'
import GiftCard from '../pages/GiftCard'
import Book from '../pages/Book'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/flash', element: <Flash /> },
  { path: '/pokedex', element: <Pokedex /> },
  { path: '/wishlist', element: <Wishlist /> },
  { path: '/gift', element: <GiftCard /> },
  { path: '/book', element: <Book /> },
])

export default function Router() {
  return <RouterProvider router={router} />
}
