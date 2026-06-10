import InputField from '../components/InputField'

function CadastroDadosPage() {
  return (
    <div>
      <h1>Dados do Usuário</h1>

    <InputField
        type="text"
        placeholder="Nome"
    />
    <br />
    <InputField
        type="text"
        placeholder="Curso"
    />
    <br />
    <InputField
        type="text"
        placeholder="Matrícula"
    />
    <br />

    <button>Finalizar Cadastro</button>
    
    </div>
  )
}

export default CadastroDadosPage