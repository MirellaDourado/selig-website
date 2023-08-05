import assistence from '../assets/pexels-mart-production-7709179.jpg';
import '../App.css';
import { Link } from 'react-router-dom'
import { AiOutlineSafety, AiOutlineIssuesClose, AiOutlineTool, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoTiktok, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import BrandsSection from '../components/BrandsSection';

function App() {
  return (
    <>
    <Header boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
      <main>
        <div className='whatsapp-icon'>
        <AiOutlineWhatsApp />
        </div>
        <Carrousel />
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
      <BrandsSection />
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
    <Footer />
    </>
  );
}

export default App;
