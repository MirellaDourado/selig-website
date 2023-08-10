import '../App.css';
import { AiOutlineWhatsApp } from "react-icons/ai";
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import BrandsSection from '../components/BrandsSection';
import PreOs from '../components/PreOs';
import SocialArea from '../components/SocialAreas';
import OurService from '../components/OurService';

function App() {
  return (
    <>
    <Header boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
    <main>
      <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0' className='whatsapp-icon'>
      <AiOutlineWhatsApp />
      </a>
      <Carrousel />
      <OurService />
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
