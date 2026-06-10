function InputField({ label, erro, linkLabel, ...props }) {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>
        {label}
        {linkLabel && (
          <a href={linkLabel.href}>{linkLabel.texto}</a>
        )}
      </label>

      <input {...props} />

      {/* Renderização condicional com &&: só exibe a mensagem se houver erro */}
      {erro && <span className="input-field__erro">{erro}</span>}
    </div>
  )
}

export default InputField