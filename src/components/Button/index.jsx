import './Button.css';

function Button ({ name, type, className, fn, disabled }) {
  return (
    <button
      className={ className }
      onClick={ fn }
      type={ type }
      disabled={ disabled }
    >
      { name }
    </button>
  )
}

export default Button;
