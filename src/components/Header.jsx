import { Link } from 'react-router-dom';
import logo from '../assets/selig-logo.png';
import '../App.css';

function Header() {
  return(
    <header className="selig-header">
      <nav>
        <Link>
          <img src={ logo } alt='nome SeLiG em laranja' style={{ width: "20%", marginLeft: "20%"}} />
        </Link>
        <ul className='d-flex justify-content-around align-items-center' style={{ width: "50%", margin: "0" }}>
          <li>
            <Link to='/selig'> A SeLiG </Link>
          </li>
          <li>
            <a href='#services'> Nossos Serviços </a>
          </li>
          <li>
            <Link to='/'> Contato </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;