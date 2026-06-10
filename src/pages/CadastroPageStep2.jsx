import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Botao from '../components/Botao.jsx'
import { useUsuario } from '../context/UsuarioContext.jsx'

function CadastroPageStep2() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, setErros] = useState({})

  const { login } = useUsuario()
  const navigate = useNavigate()
  const location = useLocation()
  const cpf = location.state?.cpf ?? ''

  function validar() {
    const novosErros = {}

    if (!nome.trim()) novosErros.nome = 'Nome é obrigatório.'
    if (!telefone.trim()) novosErros.telefone = 'Telefone é obrigatório.'
    if (!email.trim()) {
      novosErros.email = 'E-mail é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = 'Informe um e-mail válido.'
    }
    if (!senha.trim()) {
      novosErros.senha = 'Senha é obrigatória.'
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.'
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
    login({ nome, email, telefone, cpf })
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <h1>Cadastre-se</h1>
      <p>
        Passo 2 de 2.<br />
        Por favor insira seus dados para finalizar e prosseguir.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="nome"
          label="Nome"
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          erro={erros.nome}
        />

        <InputField
          id="telefone"
          label="Telefone"
          type="tel"
          placeholder="(99) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          erro={erros.telefone}
        />

        <InputField
          id="email"
          label="E-mail"
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
        />

        <Botao type="submit">Cadastrar</Botao>
      </form>
    </AuthLayout>
  )
}

export default CadastroPageStep2