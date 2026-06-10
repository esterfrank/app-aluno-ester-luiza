import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import DisciplinasPage from './pages/DisciplinasPage'
import PerfilPage from './pages/PerfilPage'
import TutorIAPage from './pages/TutorIAPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
        <Route path="/perfil" element={<PerfilPage/>} />
        <Route path="/tutorIA" element={<TutorIAPage/>} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App