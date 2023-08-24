import Header from '../components/Header';
import PropTypes from 'prop-types';  
import Footer from '../components/Footer';
import style from '../styles/productPage.module.css';
import { AiOutlineWhatsApp } from "react-icons/ai";
import {useEffect} from 'react'

function ServicePage({ title, brands, description }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <>
      <Header />
      <section className={ style.headerSection }>
        <h2> { title }</h2>
      </section>
      <main>
        <section className={ style.brandArea }>
          <p> { description } </p>  
          <hr />
        </section>
        <section className={ style.warrantySection }>
        {brands.length > 0 ? <h3> MARCAS </h3> : <p></p>}
          <div>
          {
            brands.map((b) => (
              <img key={b.alt} src={b.src} alt={b.alt} style={{width: '50px'}}/>
            ))
          }
          </div>
        </section>
        <section className={ style.contact }>
          <h4> Entre agora em contato que iremos te ajudar! </h4>
          <p> A Selig está qualificada para oferecer o conserto, realizando tanto reparos básicos como de alta complexidade. </p>
          <button> Entre em contato com a nossa equipe <AiOutlineWhatsApp className={ style.btnIcon }/> </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brands: PropTypes.shape([]),
}

export default ServicePage;