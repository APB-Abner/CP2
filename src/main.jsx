import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/home/Home.jsx'
import About from './pages/About.jsx'
import Hobbies from './pages/Hobbies.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ContentPage from './pages/ContentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'hobbies', element: <Hobbies /> },
      { path: '*', element: <PageNotFound /> },
      { path: ':name', element: <ContentPage /> }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
