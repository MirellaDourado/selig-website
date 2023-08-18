import { AiOutlineSafety, AiOutlineIssuesClose, AiOutlineTool } from "react-icons/ai";
import styles from '../styles/ourService.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";


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
    <Carousel className={ styles.ourServiceCarousel } interval={3000} variant='dark' controls={false} style={{ borderRadius: '15px', width: '100%', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;'}}>
      <Carousel.Item >
        <Link className={ styles.homeCard } to={'/dentro-de-garantia'}>
          <AiOutlineSafety fontSize="6em" />
          <div>
          <p>Assistência técnica autorizada para produtos dentro de garantia</p>
          <p>Descubra as marcas e produtos com assistência técnica e com garantia</p>
          </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item >
        <a className={ styles.homeCard } to={'fora-de-garantia'}>
          <AiOutlineIssuesClose fontSize="6em"/>
          <div>
            <p> Assistência técnica autorizada para produtos fora de garantia </p>
            <p> Descubra as marcas e produtos com assistência técnica e com garantia</p>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <Link className={ styles.homeCard } to={'/especializada'}>
          <AiOutlineTool fontSize="6em"/>
          <div>
            <p> Assistência técnica especializada </p>
            <p> Descubra as marcas e produtos com assistência técnica e com garantia </p>
          </div>
        </Link>
      </Carousel.Item>
    </Carousel>
  </section>
  )
}

export default OurService;