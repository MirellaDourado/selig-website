import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineWhatsApp } from "react-icons/ai";

function Selig() {
  return (
    <>
    <Header boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
    <main>
      <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0' className='whatsapp-icon'>
      <AiOutlineWhatsApp />
      </a>
    </main>
    <Footer />
    </>
  );
}

export default Selig;