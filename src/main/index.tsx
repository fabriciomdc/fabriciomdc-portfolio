import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/styles/global.css'
import { Layout } from '@/main/routes'
import { ThemeProvider } from '@/presentation/components/providers/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  </StrictMode>
)
