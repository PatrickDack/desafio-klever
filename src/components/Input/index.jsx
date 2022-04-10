import './Input.css';

function Input({ type, className, name, label, onChange, value }) {
  return (
    <div className="input-container">
      <h4>{ label }</h4>
      <input
        className={className}
        name={name}
        type={type}
        onChange={ onChange }
        value={ value }
        required
        autoComplete='off'
      />
    </div>
  )
}

export default Input;
