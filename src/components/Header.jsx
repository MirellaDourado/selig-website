import { Link } from 'react-router-dom';
import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import  { AiOutlineWhatsApp } from "react-icons/ai";
import logo from '../assets/selig-logo.png';
import style from '../styles/header.module.css';
import PropTypes from 'prop-types';
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';

function Header({ boxShadow }) {
  const [ clicked, setClicked ] = useState(false);

  return(
    <section className={ style.classMom }>
      <section className={ style.headerSection }>
        <div>
          <a target="_blank" rel='noopener noreferrer'href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0'> FALE CONOSCO <AiOutlineWhatsApp fontSize='1.2em' className={ style.icon }/> </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'> INSTAGRAM <BiLogoInstagramAlt fontSize='1.2em' className={ style.icon }/> </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.tiktok.com/assistenciaselig/'>  TIKTOK <BiLogoTiktok fontSize='1.2em' className={ style.icon }/> </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.linkedin.com/company/assistencia-selig/'> LINKEDIN <BiLogoLinkedin fontSize='1.2em' className={ style.icon }/> </a>
        </div>
      </section>
      <header className={ style.seligHeader } style={ boxShadow ? { boxShadow } : null }>
        <div>
          <Link to='/' className={ style.logo }>
            <img src={ logo } alt='nome SeLiG em laranja'/>
          </Link>
          <nav id={ style.nav } className={clicked ? style.active : ''}>
            <button onClick={() => setClicked(!clicked)}>
              <HiMenu className={ style.btnMobile }/>
            </button>
            <ul id={ style.menu }>
              <li>
                <Link to='/selig' onClick={() => setClicked(false)}> A SeLiG </Link>
              </li>
              <li>
                <a href='/#services' onClick={() => setClicked(false)}> Nossos Serviços </a>
                <div className={style.hidenMenu}>
                    <a href='/dentro-de-garantia'><li>Assistência para produtos dentro de garantia</li></a>
                    <a href='/fora-de-garantia'><li>Assistência para produtos fora de garantia</li></a>
                    <a href='/especializada'><li>Assistência técnica especializada</li></a>
                </div>
              </li>
              <li>
                <a href='/#contact' onClick={() => setClicked(false)}> Contato </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  )
}

Header.propTypes = {
  boxShadow: PropTypes.string
}

export default Header;