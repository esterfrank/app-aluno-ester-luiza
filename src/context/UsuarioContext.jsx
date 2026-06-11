import { createContext, useContext, useState, useEffect } from 'react'

const UsuarioContext = createContext()

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  // Carrega usuário do localStorage (se existir)
  useEffect(() => {
    const data = localStorage.getItem('usuario')
    if (data) {
      setUsuario(JSON.parse(data))
    }
  }, [])

  // Salva usuário no localStorage sempre que mudar
  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario))
    }
  }, [usuario])

  function login(dadosUsuario) {
    setUsuario(dadosUsuario)
  }

  function logout() {
    setUsuario(null)
    localStorage.removeItem('usuario')
  }

  function atualizarFoto(base64) {
    setUsuario((prev) => ({ ...prev, foto: base64 }))
  }

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export function useUsuario() {
  return useContext(UsuarioContext)
}