import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SW from '@config/sw'
import { RouterProvider } from 'react-router-dom'
import router from '@router'
import 'src/styles/global.css'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@service/clientQuery'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <SW />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </SnackbarProvider>
  </React.StrictMode>,
)
