import logo from '../assets/selig-logo.png';
import { Link } from 'react-router-dom'
import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import style from '../styles/footer.module.css';

function Footer() {
  return(
    <footer className={ style.seligFooter }>
      <div>
        <Link> A SeLiG </Link>
        <Link> Assistência técnica autorizada para produtos fora de garantia </Link>
        <Link> Assistência técnica autorizada para produtos fora de garantia </Link>
        <Link> Assistência técnica especializada </Link>
      </div>
      <div>
        <img src={ logo } alt='palavra SeLiG escrita na cor laranja' />
        <div>
          <a target="_blank" rel='noopener noreferrer' href='https://goo.gl/maps/XBSgCpbbJbU3ymFV6'> <span> Endereço: </span> Rua Bahia, 176 - Pituba, Salvador - BA, 41830-160</a>
          <a> <span> Telefone: </span> (71) 2203-7800 </a>
        </div>
        <div>
          <a target="_blank" rel='noopener noreferrer' href='https://www.instagram.com/assistenciaselig/'>
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
      <p style={{ fontSize: '0.8em' }}> Copyright © 2006-2023 SELIG. Todos os direitos reservados. </p>
    </footer>
  )  
}

export default Footer;