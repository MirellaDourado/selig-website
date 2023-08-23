import styles from '../styles/preOs.module.css';
import { AiFillThunderbolt, AiFillFolderOpen } from "react-icons/ai";
import test from '../assets/pexels-mart-production-7709179.jpg';
import Carousel from 'react-bootstrap/Carousel';

function PreOs () {
  return(
    <section className={ styles.preOs }>
      <h2 className='h-config h2-config'> Agilize o seu antendimento </h2>
      <hr className='hr' />
      <div className={ styles.preOsWrapper }>
        <img src={test} style={{ borderRadius: '15px', position: 'absolute', height: '70vh', left: '0px', zIndex: '-1'}}/>
        <div className={ styles.meetPreOs }>
          <h3 className='h-config h3-config'> Conheça a pre-OS </h3>
          <p>Agilize o seu atendimento no momento da visita a nossa loja utilizando a pre-OS. Você poderá agendar sua assistência de uma maneira mais rápida e personalizada, podendo verificar o andamento do seu equipamente preenchendo o formulário.</p>
          <button> Preencher OS </button>
        </div>
        <div className={ styles.seePreOs }>
          <h3 className='h-config h3-config'> Consulte sua OS </h3>
          <p> Caso já tenha preenchido uma pre-OS e deseje saber o andamento da nossa assistência, clique no botão abaixo, informe o seu nome e o número da OS que deseja ver. </p>
          <button> Consultar OS </button>
        </div>
      </div>
      <Carousel className={ styles.preOsCarousel } interval={3000} variant='dark' controls={false}>
      <Carousel.Item >
        <a className={ styles.homeCard } href='https://websolution.care-br.com/selig/pre_os.php' target='_blank'  rel="noreferrer">
          <div>
            <AiFillThunderbolt fontSize='6em'/>
            <h3 className='h-config h3-config'> Conheça a pre-OS </h3>
            <p>Agende sua assistência de uma maneira mais rápida e personalizada, podendo verificar o andamento do seu equipamente.</p>
            <button> Preencher OS </button>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item >
        <a className={ styles.homeCard } href='https://websolution.care-br.com/selig/' target='_blank'  rel="noreferrer">
          <div>
            <AiFillFolderOpen fontSize='6em'/>
            <h3 className='h-config h3-config'> Consulte sua OS </h3>
            <p> Acompanhe o andamento da nossa assistência, clique no botão abaixo, informe o seu nome e o número da OS que deseja ver. </p>
            <button> Consultar OS </button>
          </div>
        </a>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default PreOs;