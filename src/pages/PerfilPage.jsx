import { useUsuario } from '../context/UsuarioContext.jsx'

function PerfilPage() {
  const { usuario } = useUsuario()

  return (
    <div className="dashboard__container">
      <div className="welcome">
        <h2>Perfil</h2>
        <p>Usuário: {usuario?.nome}</p>
        <p>E-mail: {usuario?.email}</p>
      </div>
    </div>
  )
}

export default PerfilPage
