import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Carrousel() {
  return(
    <div>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
          className='banner'
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
          className='banner'
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
          alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrousel;