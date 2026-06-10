import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import InputField from '../components/InputField.jsx'
import Botao from '../components/Botao.jsx'

function CadastroPageStep1() {
  const [cpf, setCpf] = useState('')
  const [erros, setErros] = useState({})
  const navigate = useNavigate()

  function validar() {
    const novosErros = {}
    const cpfLimpo = cpf.replace(/\D/g, '')
    if (!cpf.trim()) {
      novosErros.cpf = 'CPF é obrigatório.'
    } else if (cpfLimpo.length !== 11) {
      novosErros.cpf = 'Informe um CPF válido com 11 dígitos.'
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
    navigate('/cadastro/dados', { state: { cpf } })
  }

  return (
    <AuthLayout>
      <h1>Cadastre-se</h1>
      <p>
        Passo 1 de 2.<br />
        Por favor insira seu CPF para prosseguir.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="cpf"
          label="CPF"
          type="text"
          placeholder="000.000.000-00"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          erro={erros.cpf}
        />

        <Botao type="submit">Prosseguir</Botao>
      </form>

      <p className="registre-se">
        Já tem uma conta? <Link to="/login">Entrar.</Link>
      </p>
    </AuthLayout>
  )
}

export default CadastroPageStep1
