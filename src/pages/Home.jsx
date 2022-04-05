import { Link } from 'react-router-dom';
import WishWallet from "../components/WishWallet";
import Button from '../components/Button';

function Home () {
  return (
    <div className="main">
      <WishWallet />
      <Link to="addtoken">
        {
          <Button
            name="Add Token"
            className="add-token"
          />
        }
      </Link>
    </div>
  )
}

export default Home;
