import Button from "../Button";
import Input from "../Input";
import './Form.css';

function Form ({ renderRemove }) {
  return (
    <form className="form">
      <Input
        name="token"
        label="Token"
      />
      <Input
        name="balance"
        label="Balance"
      />
      <div className="button-container">
        <div className="remove-container">
          <Button
            type="submit"
            name="Remover"
            className={ renderRemove }
          />
        </div>
        <div className="save-container">
          <Button
            type="submit"
            name="Salvar"
            className="save"
          />
        </div>
      </div>
    </form>
  )

}

export default Form;
