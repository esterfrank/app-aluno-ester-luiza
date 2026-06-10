import InputField from '../components/InputField'

<div>
  <h1>Nova Senha</h1>

  <p>Informe abaixo sua nova senha.</p>

  <label htmlFor="senha">Senha</label>
  <InputField
    id="senha"
    type="password"
    value={senha}
    onChange={(e) => setSenha(e.target.value)}
  />

  <br />

  <label htmlFor="repitasenha">
    Repita a Senha
  </label>

  <InputField
    id="repitasenha"
    type="password"
    value={repitaSenha}
    onChange={(e) => setRepitaSenha(e.target.value)}
  />

  <br />

  {erro && <p>{erro}</p>}

  <button onClick={handleNovaSenha}>
    Salvar
  </button>
</div>

export default NovaSenhaPage