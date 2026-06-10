import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UsuarioProvider } from './context/UsuarioContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter: habilita o sistema de rotas SPA em toda a aplicação */}
    <BrowserRouter>
      {/* UsuarioProvider: disponibiliza os dados do usuário para todos os filhos via Context */}
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </BrowserRouter>
  </StrictMode>
)
