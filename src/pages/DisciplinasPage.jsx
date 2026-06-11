import { useState, useEffect } from 'react'

const disciplinas = [
  { id: 1, nome: 'Front-end', carga: '80h', progresso: 65, status: 'Em progresso', professorId: 1 },
  { id: 2, nome: 'UX Design', carga: '60h', progresso: 25, status: 'Em progresso', professorId: 2 },
  { id: 3, nome: 'Banco de Dados', carga: '80h', progresso: 0, status: 'Próximo semestre', professorId: 3 },
  { id: 4, nome: 'Engenharia de Software', carga: '60h', progresso: 0, status: 'Próximo semestre', professorId: 4 },
]

function DisciplinasPage() {
  const [professores, setProfessores] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status}: não foi possível carregar os professores.`)
        return res.json()
      })
      .then((dados) => setProfessores(dados))
      .catch((err) => setErro(err.message))
      .finally(() => setCarregando(false))
  }, [])

  function getProfessor(professorId) {
    const p = professores.find((p) => p.id === professorId)
    return p ? p.name : '—'
  }

  return (
    <div className="dashboard__container">
      <div className="welcome">
        <h2>Disciplinas</h2>
        <p>Acompanhe suas disciplinas do semestre.</p>
      </div>

      {carregando && (
        <p className="estado-msg">Carregando disciplinas...</p>
      )}

      {erro && (
        <p className="estado-msg estado-msg--erro">⚠ {erro}</p>
      )}

      {!carregando && !erro && (
        <div className="disc-grid">
          {disciplinas.map((disc) => (
            <div className="disc-grid__card" key={disc.id}>
              <div className="disc-grid__top">
                <span className={`disc-grid__badge disc-grid__badge--${disc.status === 'Em progresso' ? 'ativo' : 'futuro'}`}>
                  {disc.status}
                </span>
              </div>
              <h3 className="disc-grid__titulo">{disc.nome}</h3>
              <p className="disc-grid__professor">{getProfessor(disc.professorId)}</p>
              <p className="disc-grid__carga">Carga horária: {disc.carga}</p>

              <div className="disc-grid__progress-row">
                <span>Progresso</span>
                <span>{disc.progresso}%</span>
              </div>
              <div className="disc-grid__progress">
                <div style={{ width: `${disc.progresso}%` }} />
              </div>

              <button className="disc-grid__btn">Acessar Disciplina</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DisciplinasPage