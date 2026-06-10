import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Botao from '../components/Botao.jsx'

function NovaSenhaPage() {
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [erros, setErros] = useState({})
  const navigate = useNavigate()

  function validar() {
    const novosErros = {}

    if (!senha.trim()) {
      novosErros.senha = 'Senha é obrigatória.'
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.'
    }

    if (!confirmar.trim()) {
      novosErros.confirmar = 'Confirmação de senha é obrigatória.'
    } else if (senha !== confirmar) {
      novosErros.confirmar = 'As senhas não coincidem.'
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
    navigate('/login')
  }

  return (
    <AuthLayout>
      <h1>Nova Senha</h1>
      <p>Informe abaixo sua nova senha.</p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="senha"
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          erro={erros.senha}
        />

        <InputField
          id="confirmar"
          label="Repita a Senha"
          type="password"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          erro={erros.confirmar}
        />

        <Botao type="submit">Salvar</Botao>
      </form>
    </AuthLayout>
  )
}

export default NovaSenhaPage
