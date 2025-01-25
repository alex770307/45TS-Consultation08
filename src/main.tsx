import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Counter from './components/Counter/Counter.tsx'
import Carshop from './components/Carshop/Carshop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Carshop />
    |<Counter />
    <App />
  </StrictMode>,
)
