import { Link } from 'react-router-dom';
import './Card.css';

function Card ({ data }) {
  return(
    <div className='card-container'>
      <div className='header-container'>
        <span>Tokens</span>
        <span>Balance</span>
      </div>
      <div className='row-container'>
        {
          data.map((d, index) =>
            <div key={ index } className='row'>
              <div>
                <Link to="/edittoken" state={d}>
                  <img src="./src/images/edit.png" />
                </Link>
                <span>{ d.token }</span>
              </div>
              <span>{ d.balance }</span>
            </div>
          )
        }
      </div>
    </div>
  )

}

export default Card;
