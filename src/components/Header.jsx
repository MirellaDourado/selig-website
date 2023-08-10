import { Link } from 'react-router-dom';
import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import  { AiOutlineWhatsApp } from "react-icons/ai";
import logo from '../assets/selig-logo.png';
import style from '../styles/header.module.css';
import PropTypes from 'prop-types';

function Header({ boxShadow }) {
  return(
    <>
      <section className={ style.headerSection }>
        <div>
          <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'> FALE CONOSCO <AiOutlineWhatsApp fontSize='1.2em'/> </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'> INSTAGRAM <BiLogoInstagramAlt fontSize='1.2em'/> </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.tiktok.com/assistenciaselig/'>  TIKTOK <BiLogoTiktok fontSize='1.2em'/> </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.linkedin.com/company/assistencia-selig/'> LINKEDIN <BiLogoLinkedin fontSize='1.2em' /> </a>
        </div>
      </section>
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
    </>
  )
}

Header.propTypes = {
  boxShadow: PropTypes.string
}

export default Header;