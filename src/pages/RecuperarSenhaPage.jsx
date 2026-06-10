import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'

function RecuperarSenhaPage() {
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState('')

  const navigate = useNavigate()

  function handleRecuperarSenha() {
    if (email.trim() === '') {
      setErro('Digite seu email')
      return
    }

    setErro('')
    navigate('/nova-senha')
  }

  return (
    <div>
      <h1>Recuperar Senha</h1>

      <InputField
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      {erro && <p>{erro}</p>}

      <button onClick={handleRecuperarSenha}>
        Enviar
      </button>
    </div>
  )
}

export default RecuperarSenhaPage