import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import DisciplinasPage from './pages/DisciplinasPage'
import PerfilPage from './pages/PerfilPage'
import TutorIAPage from './pages/TutorIAPage'
import CadastroPage from './pages/CadastroPage'
import CadastroDadosPage from './pages/CadastroDadosPage'
import RecuperarSenhaPage from './pages/RecuperarSenhaPage'
import NovaSenhaPage from './pages/NovaSenhaPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/cadastro' element={<CadastroPage />} />
        <Route path="/cadastro-dados" element={<CadastroDadosPage />} />
        <Route path="/recuperar" element={<RecuperarSenhaPage />} />
        <Route path='/nova-senha' element={<NovaSenhaPage />}/>

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/tutorIA" element={<TutorIAPage />} />

        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
