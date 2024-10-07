import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import PageNotFound from './pages/PageNotFound'
import ContentPage from './pages/ContentPage';
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'works', element: <Works /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <PageNotFound /> },
      { path: ':name', element: <ContentPage /> }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
