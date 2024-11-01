import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Works from './pages/Works'
import Memory from './pages/Memory'
import Inspirations from './pages/Inspirations'
import Future from './pages/Future'
import ContentPage from './pages/ContentPage';
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'interesses', element: <Works /> },
      { path: 'inspirations', element: <Inspirations /> },
      { path: 'future', element: <Future /> },
      { path: 'memory', element: <Memory /> },
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
