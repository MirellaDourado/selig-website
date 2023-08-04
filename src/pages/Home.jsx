import logo from '../assets/selig-logo.png';
import assistence from '../assets/pexels-mart-production-7709179.jpg';
import '../App.css';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineSafety, AiOutlineIssuesClose, AiOutlineTool, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import Header from '../components/Header';

function App() {
  return (
    <>
    <Header />
      <main>
        <div className='whatsapp-icon'>
        <AiOutlineWhatsApp />
        </div>
      <div>
        <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className='banner'
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className='banner'
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
        </Carousel.Item>
        </Carousel>
      </div>
      <div className='our-service' id='services'>
        <h2 className='h-config h2-config'> Nossos Serviços </h2>

        <div className='d-flex justify-content-around'>
          <div className='home-card'>
            <AiOutlineSafety fontSize="6em" />
            <div>
            <p>Assistência técnica autorizada para produtos fora de garantia</p>
            <p>Descubra as marcas e produtos com assistência técnica e com garantia</p>
            </div>
            <button className='know-more-btn'> Saiba mais </button>
          </div>

          <div className='home-card'>
            <AiOutlineIssuesClose fontSize="6em"/>
            <div>
              <p> Assistência técnica autorizada para produtos fora de garantia </p>
              <p> Descubra as marcas e produtos com assistência técnica e com garantia</p>
            </div>
            <button className='know-more-btn'> Saiba mais </button>
          </div>
         
          <div className='home-card'>
            <AiOutlineTool fontSize="6em"/>
            <div>
              <p> Assistência técnica especializada </p>
              <p> Descubra as marcas e produtos com assistência técnica e com garantia </p>
            </div>
            <button className='know-more-btn'> Saiba mais </button>
          </div>
        </div>
      </div>
      <div className='pre-os'>
        <div> <img src={ assistence } alt='' /> </div>
        <div className='meet-pre-os'>
          <h2 className='h-config h3-config'> Conheça a pre-OS </h2>
          <p className='pre-os-p'>Agilize o seu atendimento no momento da visita a nossa loja utilizando a pre-OS. Você poderá agendar sua assistência de uma maneira mais rápida e personalizada, podendo verificar o andamento do seu equipamente preenchendo o formulário.</p>
          <button className='os-button'> Preencher OS </button>
        </div>
        <div className='see-pre-os'>
          <h2 className='h-config h3-config'> Consulte sua OS </h2>
          <p className='pre-os-p' > Caso já tenha preenchido uma pre-OS e deseje saber o andamento da nossa assistência, clique no botão abaixo, informe o seu nome e o número da OS que deseja ver. </p>
          <button className='os-button'> Consultar OS </button>
        </div>
      </div>
      <div className='divisor'><div/><div/><div/><div/></div>
      <div className='brands'>
        <h2 className='h-config h2-config'> Nossa Assistência Técnica </h2>
      </div>
      <div className='social-area'>
        <h2 className='h-config h2-config'> Siga Nossas Redes Sociais </h2>
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
      </main>
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
    </>
  );
}

export default App;
