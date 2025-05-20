import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import TicTacToeWidget from './TicTacToeWidget.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicTacToeWidget />
  </StrictMode>,
)
