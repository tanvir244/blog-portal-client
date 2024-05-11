import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import AuthProvider from './providers/AuthProvider'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </SkeletonTheme>
  </React.StrictMode>,
)
