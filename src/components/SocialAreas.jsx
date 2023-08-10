import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import { Link } from 'react-router-dom'


function SocialArea() {
  return(
    <div className='social-area'>
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
      </div>
  )
}

export default SocialArea;