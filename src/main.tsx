import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './style/index.css'
import Context from './context.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Router>
  <Context>
    <App />
  </Context>
  </Router>
  </React.StrictMode>,
)
