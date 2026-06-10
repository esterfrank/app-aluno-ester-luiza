import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'

function CadastroPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const navigate = useNavigate()

  function handleCadastro() {
  if (email === '' || senha === '') {
    setErro('Preencha todos os campos')
    return
  }

  setErro('')
  navigate('/cadastro-dados')
}

  return (
    <div>
      <h1>Cadastro</h1>

        <InputField
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

    <br />

      <InputField
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
    />

    <br />

    {erro && <p>{erro}</p>}

    <button onClick={handleCadastro}>Próximo</button>

    <br />

    </div>
  )
}

export default CadastroPage