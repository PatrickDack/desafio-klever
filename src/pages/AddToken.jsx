import { Link } from 'react-router-dom';
import WishWallet from '../components/WishWallet';
import Button from '../components/Button';
import Form from '../components/Form';
import './AddToken.css';

function AddToken () {
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
      <Form />
    </div>
  )
}

export default AddToken;
