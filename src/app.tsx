import { Toaster } from 'sonner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateRoom } from './pages/create-room'
import { Room } from './pages/room'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom />,
  },
  {
    path: '/room/:id',
    element: <Room />,
  }
])

export function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster invert richColors />
    </>
  )
}