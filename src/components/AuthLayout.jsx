import HeroAuth from './HeroAuth.jsx'

function AuthLayout({ children }) {
  return (
    <div className="container">
      <HeroAuth />
      <div className="formulario">
        <div>
          {/* children: o conteúdo específico de cada tela de auth vai aqui */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
