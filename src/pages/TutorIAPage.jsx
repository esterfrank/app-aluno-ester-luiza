import { useState } from 'react'

function TutorIA() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  // Usa a API do JSONPlaceholder para simular uma resposta do tutor.
  // O id do post é gerado pelo comprimento da pergunta (só para variar o resultado).
  // O padrão obrigatório é: try / catch / finally + checagem de res.ok
  async function enviarPergunta() {
    if (!pergunta.trim()) {
      setErro('Digite uma pergunta antes de enviar.')
      return
    }

    setLoading(true)
    setResposta('')
    setErro(null)

    const id = (pergunta.trim().length % 100) + 1 // gera um id entre 1 e 100

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

      // Checagem de res.ok obrigatória — se o servidor retornou 4xx ou 5xx, lança erro
      if (!res.ok) {
        throw new Error(`Erro ${res.status}: não foi possível obter uma resposta.`)
      }

      const dados = await res.json()

      // Usa o "body" do post como resposta simulada do tutor
      setResposta(dados.body)
    } catch (err) {
      setErro(err.message)
    } finally {
      // finally sempre executa — garante que o loading some mesmo se der erro
      setLoading(false)
    }
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

          {erro && (
            <p className="estado-msg estado-msg--erro">⚠ {erro}</p>
          )}

          {resposta && !erro && (
            <p className="estado-msg">{resposta}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TutorIA