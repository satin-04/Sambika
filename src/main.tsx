import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import ReactGA from 'react-ga4'

const MEASUREMENT_ID = "G-M4E5PQY6VH";
ReactGA.initialize(MEASUREMENT_ID)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
