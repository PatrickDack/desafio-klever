import Button from "../Button";
import Input from "../Input";
import './Form.css';

function Form () {
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
      <Button
        type="submit"
        name="Salvar"
        className="save"
      />
    </form>
  )

}

export default Form;
