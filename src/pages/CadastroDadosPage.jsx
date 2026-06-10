import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'

function CadastroDadosPage() {
      const [nome, setNome] = useState('')
      const [curso, setCurso] = useState('')
      const [matricula, setMatricula] = useState('')
      const [erro, setErro] = useState('')

      const navigate = useNavigate()

    function handleCadastro() {
        if (nome === '' || curso === '' || matricula === '') {
        setErro('Preencha todos os campos')
        return
    }

    setErro('')
    navigate('/dashboard')
    }

  return (
    <div>
      <h1>Dados do Usuário</h1>

<InputField
  type="text"
  placeholder="Nome"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
/>
    
<br />

<InputField
  type="text"
  placeholder="Curso"
  value={curso}
  onChange={(e) => setCurso(e.target.value)}
/>

<br />

<InputField
  type="text"
  placeholder="Matrícula"
  value={matricula}
  onChange={(e) => setMatricula(e.target.value)}
/>
<br />

{erro && <p>{erro}</p>}
<button onClick={handleCadastro}>
  Finalizar Cadastro
</button>

</div>
  )
}

export default CadastroDadosPage