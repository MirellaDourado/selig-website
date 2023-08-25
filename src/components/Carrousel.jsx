import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png'

function Carrousel() {
  return(
    <div>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
          className='banner'
          src={banner1}
          alt="Conserto de Apple com peças originais do fabricante"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
          className='banner'
          src={ banner2 }
          alt="Única distribuidora de LG da Bahia"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
          className='banner'
          src={ banner3 }
          alt="A SeLiG instala seu ar condicionado"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrousel;