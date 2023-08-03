import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SW from '@config/sw'
import { RouterProvider } from 'react-router-dom'
import router from '@router'
import 'src/styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
      <SW />
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>,
)
