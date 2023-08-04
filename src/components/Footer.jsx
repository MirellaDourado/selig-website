import logo from '../assets/selig-logo.png';
import '../App.css';
import { Link } from 'react-router-dom'
import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return(
    <footer className='selig-footer'>
      <div>
        <p> A SeLiG </p>
        <p> Assistência técnica autorizada para produtos fora de garantia </p>
        <p> Assistência técnica autorizada para produtos fora de garantia </p>
        <p> Assistência técnica especializada </p>
      </div>
      <div>
        <img src={ logo } alt='palavra SeLiG escrita na cor laranja' />
        <div>
          <p> <span> Endereço: </span> Rua Bahia, 176 - Pituba, Salvador - BA, 41830-160</p>
          <p> <span> Telefone: </span> (71) 2203-7800 </p>
          <p> Copyright © 2006-2023 SELIG. Todos os direitos reservados. </p>
        </div>
        <div>
          <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'>
            <BiLogoInstagramAlt />
          </a>
          <Link>
            <BiLogoTiktok />
          </Link>
          <Link>
            <BiLogoLinkedin/>
          </Link>
        </div>
      </div>
    </footer>
  )  
}

export default Footer;