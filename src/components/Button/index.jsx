import './Button.css';

function Button ({ name, type, className, fn }) {
  return (
    <button
      className={ className }
      onClick={ fn }
      type={ type }
    >
      { name }
    </button>
  )
}

export default Button;
