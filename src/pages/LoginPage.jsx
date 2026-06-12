import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Botao from '../components/Botao.jsx'
import { useUsuario } from '../context/UsuarioContext.jsx'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [erros, setErros] = useState({})

  const { login } = useUsuario()
  const navigate = useNavigate()

  function validar() {
    const novosErros = {}

    if (!email.trim()) {
      novosErros.email = 'E-mail é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = 'Informe um e-mail válido.'
    }

    if (!senha.trim()) {
      novosErros.senha = 'Senha é obrigatória.'
    }

    return novosErros
  }

  function handleSubmit(e) {
    e.preventDefault()

    const novosErros = validar()

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros)
      return
    }

    login({ nome: 'Aluno', email })
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <h1>Bem-vindo de volta</h1>
      <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="email"
          label="Endereço de e-mail"
          type="email"
          placeholder="user@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          erro={erros.email}
        />

        <InputField
          id="senha"
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          erro={erros.senha}
          linkLabel={{ texto: 'Esqueceu?', href: '/recuperar-senha' }}
        />

        <Botao type="submit">Entrar</Botao>
      </form>

      <p className="registre-se">
        Não tem uma conta? <Link to="/cadastro">Registre-se agora.</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
