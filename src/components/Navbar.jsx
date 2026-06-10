import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>

      <NavLink to="/perfil">Perfil</NavLink>

      <br />

      <NavLink to="/disciplinas">Disciplinas</NavLink>

      <br />

      <NavLink to="/tutoria">Tutor IA</NavLink>
    </nav>
  )
}

export default Navbar