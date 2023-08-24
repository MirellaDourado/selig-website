import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineWhatsApp } from "react-icons/ai";

function Selig() {
  return (
    <>
    <Header boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} />
    <main style={{ paddingTop: '20vh', width: '90%', margin: 'auto'}}>
      <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0' className='whatsapp-icon'>
      <AiOutlineWhatsApp />
      </a>
      <img src='' alt='Estrutura da Selig'/>
      <p>
        A Selig Eletronicos é uma assistência técnica de produtos eletroeletrônicos que tem como seu maior cliente a LG Electrônics, Samsung, AOC, Phillips, Semp TCL e Positivo. 

        Fundada em março de 2006, seu objetivo é atender, de maneira diferenciada, os consumidores que precisam dos seus serviços. 

        Objetivando oferecer maior conforto aos clientes e funcionários, recentemente mudamos de endereço para adequa a nossa estrutura, proporcionando melhores condições de trabalho, além de um aspecto bastante agradável. Chegamos a conta com 70 pessoas compondo seu corpo funcional.

        Diferente das outras assistências técnicas, a Selig possui uma estrutura e um atendimento que fazem com que seja escolhida pelos consumidores na hora de confiar seus aparelhos para que seja realizado o reparo. 
      </p>
    </main>
    <Footer />
    </>
  );
}

export default Selig;