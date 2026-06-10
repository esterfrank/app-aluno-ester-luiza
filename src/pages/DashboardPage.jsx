import { useUsuario } from '../context/UsuarioContext.jsx'

function DashboardPage() {
  const { usuario } = useUsuario()

  return (
    <div className="dashboard__container">
      <div className="welcome">
        <h2>
          Olá, {usuario?.nome ?? 'Aluno'} 👋
        </h2>
        <p>Bem-vindo de volta à sua sessão de estudos.</p>
      </div>

      <p style={{ color: '#999' }}>Dashboard em construção...</p>
    </div>
  )
}

export default DashboardPage
