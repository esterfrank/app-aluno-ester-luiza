import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const navigate = useNavigate()

  function handleLogin() {
    if (email === '' || senha === '') {
        setErro('Preencha todos os campos')
        return
    }
    navigate('/dashboard')
    }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <br />
      <br />

    {erro && <p>{erro}</p>}

    <button onClick={handleLogin}>Entrar</button>
    
    </div>
  )
}

export default LoginPage