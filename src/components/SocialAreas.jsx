import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import  { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from 'react-router-dom'
import style from '../styles/socialArea.module.css';

function SocialArea() {
  return(
    <div className={ style.socialArea }>
        <h2 className='h-config h2-config'> Siga Nossas Redes Sociais </h2>
        <hr className='hr'/>
        <div>
          <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'>
            <BiLogoInstagramAlt fontSize='2.5em'/>
            <p> Instagram </p>
          </a>
          <Link>
            <BiLogoTiktok fontSize='2.3em' />
            <p> TikTok </p>
          </Link>
          <Link>
            <BiLogoLinkedin fontSize='2.5em' />
            <p> LinkedIn </p>
          </Link>
        </div>
        <button>
          <p> Entre em contato com a nossa equipe <AiOutlineWhatsApp style={{ marginLeft: '0.2em' }} fontSize='1.3em'/> </p>
        </button>
      </div>
  )
}

export default SocialArea;