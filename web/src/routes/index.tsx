import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import DashBoard from '../pages/DashBoard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'dashboard', element: <DashBoard /> },
    ],
  },
])

export { router }
