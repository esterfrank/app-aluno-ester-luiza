import { useRef } from 'react'
import { useUsuario } from '../context/UsuarioContext.jsx'

function Perfil() {
  const { usuario, atualizarFoto } = useUsuario()
  const inputRef = useRef(null)

  function handleFoto(e) {
    const arquivo = e.target.files[0]
    if (!arquivo) return

    const reader = new FileReader()
    reader.onload = (evento) => {
      atualizarFoto(evento.target.result)
    }
    reader.readAsDataURL(arquivo)
  }

  return (
    <div className="dashboard__container">
      <div className="welcome">
        <h2>Meu Perfil</h2>
        <p>Gerencie suas informações da sua conta de estudante.</p>
      </div>

      {/* Card de identidade: foto + nome + email */}
      <div className="perfil__card">
        <div className="perfil__foto" onClick={() => inputRef.current.click()}>
          {usuario?.foto
            ? <img src={usuario.foto} alt="Foto de perfil" />
            : <span className="perfil__foto-inicial">{usuario?.nome?.[0] ?? 'A'}</span>
          }
          <div className="perfil__foto-overlay">Alterar</div>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFoto}
        />

        <div className="perfil__info">
          <h3 className="perfil__nome">{usuario?.nome ?? 'Aluno'}</h3>
          <p className="perfil__email">{usuario?.email ?? '—'}</p>
        </div>
      </div>

      {/* Card de dados pessoais */}
      <div className="perfil__dados">
        <h4 className="perfil__dados-titulo">Dados pessoais</h4>

        <div className="perfil__dados-lista">
          <div className="perfil__dados-item">
            <span className="perfil__dados-label">Nome</span>
            <span className="perfil__dados-valor">{usuario?.nome ?? 'Não informado'}</span>
          </div>
          <div className="perfil__dados-item">
            <span className="perfil__dados-label">Email</span>
            <span className="perfil__dados-valor">{usuario?.email ?? 'Não informado'}</span>
          </div>
          <div className="perfil__dados-item">
            <span className="perfil__dados-label">Telefone</span>
            <span className="perfil__dados-valor">{usuario?.telefone ?? 'Não informado'}</span>
          </div>
          <div className="perfil__dados-item">
            <span className="perfil__dados-label">CPF</span>
            <span className="perfil__dados-valor">{usuario?.cpf ?? 'Não informado'}</span>
          </div>
        </div>

        <button className="disc-grid__btn">Editar dados</button>
      </div>
    </div>
  )
}

export default Perfil