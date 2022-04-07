import './Input.css';

function Input({ type, className, name, label }) {
  return (
    <div className="input-container">
      <h4>{ label }</h4>
      <input
        className={className}
        name={name}
        type={type}
      />
    </div>
  )
}

export default Input;
