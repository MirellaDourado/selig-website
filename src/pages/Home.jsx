import '../App.css';
import { AiOutlineSafety, AiOutlineIssuesClose, AiOutlineTool, AiOutlineWhatsApp } from "react-icons/ai";
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import BrandsSection from '../components/BrandsSection';
import styles from '../styles/home.module.css';
import PreOs from '../components/PreOs';
import SocialArea from '../components/SocialAres';

function App() {
  return (
    <>
    <Header boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
      <main>
        <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0' className='whatsapp-icon'>
        <AiOutlineWhatsApp />
        </a>
        <Carrousel />
      <section className={ styles.ourService } id='services'>
        <h2 className='h-config h2-config'> Nossos Serviços </h2>
        <hr className='hr' />

        <div>
          <div className={ styles.homeCard }>
            <AiOutlineSafety fontSize="6em" />
            <div>
            <p>Assistência técnica autorizada para produtos dentro de garantia</p>
            <p>Descubra as marcas e produtos com assistência técnica e com garantia</p>
            </div>
            <button className='know-more-btn'> Saiba mais </button>
          </div>

          <div className={ styles.homeCard }>
            <AiOutlineIssuesClose fontSize="6em"/>
            <div>
              <p> Assistência técnica autorizada para produtos fora de garantia </p>
              <p> Descubra as marcas e produtos com assistência técnica e com garantia</p>
            </div>
            <button className='know-more-btn'> Saiba mais </button>
          </div>
         
          <div className={ styles.homeCard }>
            <AiOutlineTool fontSize="6em"/>
            <div>
              <p> Assistência técnica especializada </p>
              <p> Descubra as marcas e produtos com assistência técnica e com garantia </p>
            </div>
            <button className='know-more-btn'> Saiba mais </button>
          </div>
        </div>
      </section>
      <PreOs />
      {/* <div className='divisor'><div/><div/><div/><div/></div> */}
      <BrandsSection />
      <SocialArea />
      </main>
    <Footer />
    </>
  );
}

export default App;
