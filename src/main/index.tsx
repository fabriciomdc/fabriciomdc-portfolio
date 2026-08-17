import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/styles/global.css'
import { Router } from '@/main/routes'
import { ThemeProvider } from '@/presentation/components/providers/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>
)
