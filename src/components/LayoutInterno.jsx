import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext.jsx'

function LayoutInterno() {
  const { usuario, logout } = useUsuario()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  const getNavClass = ({ isActive }) =>
    isActive ? 'menu__item menu__item--active' : 'menu__item'

  return (
    <div className="dashboard">
      <header className="menu">
        <div className="menu__body">
          <h1 className="menu__title">
            <span>Portal do aluno</span>
          </h1>
          <nav className="menu__links">
            <NavLink to="/dashboard" className={getNavClass}>Painel</NavLink>
            <NavLink to="/disciplinas" className={getNavClass}>Disciplinas</NavLink>
            <NavLink to="/tutor-ia" className={getNavClass}>Tutor IA</NavLink>
            <NavLink to="/perfil" className={getNavClass}>Perfil</NavLink>
          </nav>

          <div className="menu__usuario" onClick={() => navigate('/perfil')}>
            <div className="menu__avatar">
              {usuario?.foto
                ? <img src={usuario.foto} alt="Foto de perfil" />
                : <span>{usuario?.nome?.[0] ?? 'A'}</span>
              }
            </div>
            <span className="menu__usuario-nome">{usuario?.nome ?? 'Aluno'}</span>
          </div>
          
          {/* Botão de logout visível no menu */}
          <button className="menu__logout" onClick={handleLogout}>Sair</button>
        </div>
      </header>

      {/* Outlet: placeholder onde o React Router renderiza a página filha ativa */}
      <Outlet />
    </div>
  )
}

export default LayoutInterno
