import { useState } from 'react/cjs/react.development';
import { Link, useNavigate } from 'react-router-dom';
import WishWallet from '../components/WishWallet';
import Button from '../components/Button';
import Form from '../components/Form';
import dataValid from '../services/dataValid';
import validToken from '../services/validToken';
import './AddToken.css';

function AddToken () {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');

  let navigate = useNavigate();

  const handleChangeToken = ({ target }) => {
    setToken(target.value.toUpperCase());
  };

  const handleChangeBalance = ({ target }) => {
    setBalance(target.value);
  };

  const saveToken = (e) => {
    e.preventDefault();
    let tokens = JSON.parse(localStorage.getItem('tokens')) || [];
    const newToken = { token, balance };

    if (validToken(tokens, newToken)) {
      return alert("Token já cadastrado, insira um token válido!");
    } else {

      tokens = [...tokens, newToken];

      localStorage.setItem('tokens', JSON.stringify(tokens));
      setToken('');
      setBalance('');

      navigate("/");
    }
  };

  return (
    <div className="main">
      <WishWallet />
      <div className='main-content'>
        <h4>Add Token</h4>
        <Link to="/">
          {
            <Button
              name="Voltar"
              className="back"
            />
          }
        </Link>
      </div>
      <Form
        handleChangeBalance={ handleChangeBalance }
        handleChangeToken={ handleChangeToken }
        saveToken={ saveToken }
        token={ token }
        balance={ balance }
        dataValid={ dataValid(token, balance) }
      />
    </div>
  )
}

export default AddToken;
