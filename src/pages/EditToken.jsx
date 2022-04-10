import { useState, useEffect } from 'react/cjs/react.development';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WishWallet from "../components/WishWallet";
import Button from '../components/Button';
import Form from '../components/Form';
import dataValid from '../services/dataValid';
import validToken from '../services/validToken';

function EditToken () {
  const [tempToken, setTempToken] = useState('');
  const [tempBalance, setTempBalance] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { token, balance } = location.state;

  useEffect(() => {
    setTempToken(token);
    setTempBalance(balance);
  }, []);

  const handleChangeToken = ({ target }) => {
    setTempToken(target.value.toUpperCase());
  };

  const handleChangeBalance = ({ target }) => {
    setTempBalance(target.value);
  };

  const editToken = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens')) || [];
    const filteredTokens = tokens.filter((t) => t.token !== token);
    const newToken = {
      token: tempToken,
      balance: tempBalance
    }

    if(validToken(filteredTokens, newToken)) {
      return alert("Token já cadastrado, insira um token válido!");
    } else {
      tokens.forEach((t) => {
        if(t.token == token) {
          t.token = tempToken;
          t.balance = tempBalance;
        }
      });

      localStorage.setItem('tokens', JSON.stringify(tokens));
      navigate('/');
    }
  }

  const deleteToken = () => {
    const response = confirm(`Tem certeza que deseja excluir o token ${tempToken}?`);

    if(response) {
      const tokens = JSON.parse(localStorage.getItem('tokens')) || [];
      const filteredTokens = tokens.filter((t) => t.token !== token);

      localStorage.setItem('tokens', JSON.stringify(filteredTokens));
      navigate('/');
    }
  }

  return (
    <div className="main">
      <WishWallet />
      <div className='main-content'>
        <h4>Edit Token</h4>
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
        renderRemove="renderRemove"
        handleChangeBalance={ handleChangeBalance }
        handleChangeToken={ handleChangeToken }
        dataValid={ dataValid(tempToken, tempBalance) }
        token={ tempToken }
        balance={ tempBalance }
        saveToken={ editToken }
        deleteToken={ deleteToken }
      />
    </div>
  )
}

export default EditToken;
