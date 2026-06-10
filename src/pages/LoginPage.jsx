import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

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

      <button>Entrar</button>
    </div>
  )
}

export default LoginPage