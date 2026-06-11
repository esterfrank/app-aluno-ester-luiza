import { useUsuario } from '../context/UsuarioContext.jsx'
import { useNavigate } from 'react-router-dom'

const disciplinas = [
  {
    id: 1,
    nome: 'Front-end',
    aulaAtual: 'Aula 2: Conceitos do desenvolvimento Front-end e GIT + Github.',
    progresso: 65,
    status: 'Em progresso',
  },
  {
    id: 2,
    nome: 'UX Design',
    aulaAtual: 'Aula 3: Usabilidade.',
    progresso: 25,
    status: 'Em progresso',
  },
]

const stats = [
  { icone: '🕐', label: 'Tempo de Estudo', valor: '12h 45m', sub: 'Esta semana' },
  { icone: '📋', label: 'Tarefas Pendentes', valor: '2', sub: 'Próximo vencimento em 2 dias' },
  { icone: '💬', label: 'Discussões com IA', valor: '8', sub: 'Tópicos ativos' },
]

function DashboardPage() {
  const { usuario } = useUsuario()
  const navigate = useNavigate()

  return (
    <div className="dashboard__container">
      <div className="welcome">
        <h2>Bom dia, {usuario?.nome ?? 'Aluno'}.</h2>
        <p>
          Bem-vindo de volta à sua sessão de estudo focado. Você tem 2 tarefas
          para esta semana e está atualmente adiantado em seu cronograma de leitura.
        </p>
      </div>

      <div className="disc-lista">
        {disciplinas.map((disc) => (
          <div className="disc-card" key={disc.id}>
            <div className="disc-card__body">
              <span className="disc-card__badge">{disc.status}</span>
              <h3 className="disc-card__titulo">{disc.nome}</h3>
              <p className="disc-card__aula">{disc.aulaAtual}</p>
              <div className="disc-card__progress-row">
                <div className="disc-card__progress">
                  <div style={{ width: `${disc.progresso}%` }} />
                </div>
                <span className="disc-card__pct">{disc.progresso}%</span>
              </div>
            </div>
            <button
              className="disc-card__btn"
              onClick={() => navigate('/disciplinas')}
            >
              Retomar Estudo →
            </button>
          </div>
        ))}
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div className="stats__card" key={s.label}>
            <p className="stats__label">{s.icone} {s.label}</p>
            <p className="stats__valor">{s.valor}</p>
            <p className="stats__sub">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage