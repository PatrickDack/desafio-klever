import { Link } from 'react-router-dom';
import WishWallet from "../components/WishWallet";
import Button from '../components/Button';
import Form from '../components/Form';

function EditToken () {
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
      <Form renderRemove="renderRemove" />
    </div>
  )
}

export default EditToken;
