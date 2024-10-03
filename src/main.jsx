import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrigCalculator from './TrigCalculator.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrigCalculator />
  </StrictMode>,
)
