import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './pages/LoginPage.jsx'
import RecuperarSenhaPage from './pages/RecuperarSenhaPage.jsx'
import NovaSenhaPage from './pages/NovaSenhaPage.jsx'
import CadastroStep1Page from './pages/CadastroPageStep1.jsx'
import CadastroStep2Page from './pages/CadastroPageStep2.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import DisciplinasPage from './pages/DisciplinasPage.jsx'
import TutorIAPage from './pages/TutorIAPage.jsx'
import PerfilPage from './pages/PerfilPage.jsx'
import LayoutInterno from './components/LayoutInterno.jsx'

function App() {
  return (
    <Routes>
      {/* Rota padrão redireciona para login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Rotas de autenticação (sem menu) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recuperar-senha" element={<RecuperarSenhaPage />} />
      <Route path="/nova-senha" element={<NovaSenhaPage />} />
      <Route path="/cadastro" element={<CadastroStep1Page />} />
      <Route path="/cadastro/dados" element={<CadastroStep2Page />} />

      {/* Rotas internas — compartilham o LayoutInterno (menu + sidebar) */}
      <Route element={<LayoutInterno />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
        <Route path="/tutor-ia" element={<TutorIAPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Route>
    </Routes>
  )
}

export default App
