import Button from "../Button";
import Input from "../Input";
import './Form.css';

function Form ({ renderRemove, handleChangeBalance, handleChangeToken, saveToken, token, balance }) {
  const dataValid = () => {
    if (token.length == 3 && balance.length !== 0) {
      return false;
    }

    return true;
  }

  return (
    <form className="form">
      <Input
        name="token"
        label="Token"
        onChange= { handleChangeToken }
        value={ token }
      />
      <Input
        name="balance"
        label="Balance"
        onChange= { handleChangeBalance }
        value={ balance }
      />
      <div className="button-container">
        <div className="remove-container">
          <Button
            type="submit"
            name="Remover"
            className={ renderRemove }
          />
        </div>
        <div className={ dataValid() ? "save-container disabled" : "save-container"}>
          <Button
            type="button"
            name="Salvar"
            className="save"
            fn={ saveToken }
            disabled={ dataValid() }
          />
        </div>
      </div>
    </form>
  )

}

export default Form;
