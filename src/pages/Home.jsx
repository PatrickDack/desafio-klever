import { useState, useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import WishWallet from "../components/WishWallet";
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

const getTokens = () => JSON.parse(localStorage.getItem('tokens')) || [];

function Home () {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    setTokens(getTokens());
  }, []);

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
      <Card data={ tokens } />
    </div>
  )
}

export default Home;
