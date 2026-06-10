import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Botao from '../components/Botao.jsx'

function RecuperarSenhaPage() {
  const [email, setEmail] = useState('')
  const [erros, setErros] = useState({})
  const navigate = useNavigate()

  function validar() {
    const novosErros = {}
    if (!email.trim()) {
      novosErros.email = 'E-mail é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = 'Informe um e-mail válido.'
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
    navigate('/nova-senha')
  }

  return (
    <AuthLayout>
      <h1>Esqueci minha senha</h1>
      <p>Informe seu e-mail para enviarmos o link para redefinir sua senha.</p>

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

        <Botao type="submit">Enviar</Botao>
      </form>

      <p className="registre-se">
        Lembrou a senha? <Link to="/login">Voltar para o login.</Link>
      </p>
    </AuthLayout>
  )
}

export default RecuperarSenhaPage
