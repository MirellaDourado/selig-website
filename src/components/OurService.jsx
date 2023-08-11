import { AiOutlineSafety, AiOutlineIssuesClose, AiOutlineTool } from "react-icons/ai";
import styles from '../styles/ourService.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';


function OurService() {
  return(
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
        <button className={ styles.knowMoreBtn }> Saiba mais </button>
      </div>

      <div className={ styles.homeCard }>
        <AiOutlineIssuesClose fontSize="6em"/>
        <div>
          <p> Assistência técnica autorizada para produtos fora de garantia </p>
          <p> Descubra as marcas e produtos com assistência técnica e com garantia</p>
        </div>
        <button className={ styles.knowMoreBtn }> Saiba mais </button>
      </div>
     
      <div className={ styles.homeCard }>
        <AiOutlineTool fontSize="6em"/>
        <div>
          <p> Assistência técnica especializada </p>
          <p> Descubra as marcas e produtos com assistência técnica e com garantia </p>
        </div>
        <button className={styles.knowMoreBtn}> Saiba mais </button>
      </div>
    </div>
    <Carousel>
    <Carousel.Item interval={null}>
      <div className={ styles.homeCard }>
        <AiOutlineSafety fontSize="6em" />
        <div>
        <p>Assistência técnica autorizada para produtos dentro de garantia</p>
        <p>Descubra as marcas e produtos com assistência técnica e com garantia</p>
        </div>
        <button className={ styles.knowMoreBtn }> Saiba mais </button>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={null}>
      <div className={ styles.homeCard }>
        <AiOutlineIssuesClose fontSize="6em"/>
        <div>
          <p> Assistência técnica autorizada para produtos fora de garantia </p>
          <p> Descubra as marcas e produtos com assistência técnica e com garantia</p>
        </div>
        <button className={ styles.knowMoreBtn }> Saiba mais </button>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={null}>
      <div className={ styles.homeCard }>
        <AiOutlineTool fontSize="6em"/>
        <div>
          <p> Assistência técnica especializada </p>
          <p> Descubra as marcas e produtos com assistência técnica e com garantia </p>
        </div>
        <button className={styles.knowMoreBtn}> Saiba mais </button>
      </div>
      </Carousel.Item>
    </Carousel>
  </section>
  )
}

export default OurService;