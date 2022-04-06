import { Link } from 'react-router-dom';
import WishWallet from "../components/WishWallet";
import Button from '../components/Button';
import Card from '../components/Card';

function Home ({ data }) {
  return (
    <div className="main">
      <div className='main-content'>
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
      <Card data={ data } />
    </div>
  )
}

export default Home;
