import { createContext, useContext, useState } from 'react'

const UsuarioContext = createContext(null)

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  function login(dadosUsuario) {
    setUsuario(dadosUsuario)
  }

  function logout() {
    setUsuario(null)
  }

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export function useUsuario() {
  const context = useContext(UsuarioContext)
  if (!context) {
    throw new Error('useUsuario deve ser usado dentro de UsuarioProvider')
  }
  return context
}
