import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineWhatsApp } from "react-icons/ai";
import seligFachada from '../assets/estrutura.jpeg';
import seligInside from '../assets/selig-estrutura.jpg'
import seligBack from '../assets/selig-back.jpg';
import styles from '../styles/selig.module.css';
import { partnersArray } from '../data';

function Selig() {
  return (
    <>
    <Header boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
    <main style={{ paddingTop: '15vh'}}>
      <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0' className='whatsapp-icon'>
      <AiOutlineWhatsApp />
      </a>
      <div  style={{ width: '90%', margin: 'auto', marginBottom: '5rem'}}>
        <h2 className='h-config h2-config' style={{ marginTop: '1rem'}}> Sobre Nós </h2>
          <hr className='hr' />
        <div style={{display: 'flex', gap: '1rem', margin: '2rem', alignItems: 'center'}}>
        <img src={seligFachada} alt='Estrutura da Selig' width='40%' style={{ borderRadius: '18px'}}/>
        <p>
          A Selig Eletronicos é uma assistência técnica de produtos eletroeletrônicos, fundada em março de 2006, seu objetivo é atender, de maneira diferenciada, os consumidores que precisam dos seus serviços. 
        </p>
        </div>
        <div style={{display: 'flex', gap: '1rem', margin: '2rem', alignItems: 'center'}}>
          <p>
          Objetivando oferecer maior conforto aos clientes e funcionários, recentemente mudamos de endereço para adequa a nossa estrutura, proporcionando melhores condições de trabalho, além de um aspecto bastante agradável.
          </p>
          <img src={seligInside} alt='Estrutura interna da Selig' width='40%' style={{ borderRadius: '18px'}}/>
        </div>
        <div style={{display: 'flex', gap: '1rem', margin: '2rem', alignItems: 'center'}}>
          <img width='40%' src={seligBack} style={{ borderRadius: '18px'}}/>
          <p>Diferente das outras assistências técnicas, a Selig possui uma estrutura e um atendimento que fazem com que seja escolhida pelos consumidores na hora de confiar seus aparelhos para que seja realizado o reparo.</p>
        </div>
      </div>
        <h2 className='h-config' style={{}}> Alguns Parceiros </h2>
        <hr className='hr' />
      <div className={styles.brandsCarousel}>
        <div>
          {partnersArray.map(({ src, alt, href }) => (
            <div
              className={styles.cardWrapper}
              key={alt + href}
              >
              <div className={styles.card}>
                <img
                  src={src}
                  alt={alt}
                  width="60px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default Selig;