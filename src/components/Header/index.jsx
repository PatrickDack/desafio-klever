import { Link } from 'react-router-dom';
import './Header.css';

function Header () {
  return (
    <header className="header">
      <Link to="/">
        <img src="./src/images/logo.svg"/>
      </Link>
    </header>
  )
}

export default Header;
