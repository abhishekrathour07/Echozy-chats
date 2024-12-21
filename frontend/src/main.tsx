import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/theme.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <ThemeProvider>

        <App />

      </ThemeProvider>
    </StrictMode>
  </Router>

)
