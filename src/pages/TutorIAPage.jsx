import { useState } from 'react'

function TutorIA() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [loading, setLoading] = useState(false)

  function enviarPergunta() {
    if (!pergunta.trim()) {
      setResposta('Digite uma pergunta antes de enviar.')
      return
    }

    setLoading(true)
    setResposta('')

    setTimeout(() => {
      setResposta(
        'Resposta simulada: estude o conteúdo da disciplina e revise os conceitos principais.'
      )
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="dashboard__container">
      <div className="welcome">
        <h2>Tutor IA</h2>
        <p>Faça perguntas e receba ajuda para seus estudos.</p>
      </div>

      <div className="disc-grid">
        <div className="disc-grid__card">
          <h3 className="disc-grid__titulo">Pergunte ao Tutor</h3>

          <textarea
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Ex: O que é React Router?"
            style={{
              width: '100%',
              minHeight: '90px',
              padding: '10px',
              borderRadius: '8px',
              border: '0.5px solid #e0ddd8',
              fontFamily: 'DM Sans'
            }}
          />

          <button className="disc-grid__btn" onClick={enviarPergunta}>
            Enviar pergunta
          </button>

          {loading && (
            <p className="estado-msg">Processando resposta...</p>
          )}

          {resposta && (
            <p className="estado-msg">{resposta}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TutorIA