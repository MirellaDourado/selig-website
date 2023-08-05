import { Link } from 'react-router-dom';
import logo from '../assets/selig-logo.png';
import style from './header.module.css';
import PropTypes from 'prop-types';

function Header({ boxShadow }) {
  return(
    <header className={ style.seligHeader } style={ boxShadow ? { boxShadow } : null }>
      <nav>
        <Link to='/'>
          <img src={ logo } alt='nome SeLiG em laranja' />
        </Link>
        <ul>
          <li>
            <Link to='/selig'> A SeLiG </Link>
          </li>
          <li>
            <a href='#services'> Nossos Serviços </a>
          </li>
          <li>
            <a href='#footer'> Contato </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  boxShadow: PropTypes.string
}

export default Header;