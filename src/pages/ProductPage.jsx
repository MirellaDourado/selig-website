import Header from '../components/Header';
import PropTypes from 'prop-types';  
import Footer from '../components/Footer';
import style from './productPage.module.css';
import { AiOutlineWhatsApp } from "react-icons/ai";
import {useEffect} from 'react'

function ProductPage({ title, warranty, description }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return(
    <>
      <section className={ style.headerSection }>
        <Header />
        <h2> Assistência Técnica { title }</h2>
      </section>
      <main>
        <section className={ style.brandArea }>
          <img></img>
          <p> { description } </p>
        </section>
        <section className={ style.warrantySection }>
          <h3> Produtos { title }</h3>
          <div>
          {
            warranty.with1 ?
            <div>
              <h4> ASSISTÊNCIA DENTRO DA GARANTIA </h4>
              <ul>
                <div>
                  { warranty.with1.map((w) => (<li key={ w }> { w } </li>))}
                </div>
                <div>
                  { warranty.with2?.map((w) => (<li key={ w }> { w } </li>))}
                </div>
              </ul>
            </div>
            : null
          }
          <div>
            <h4> ASSISTÊNCIA FORA DA GARANTIA </h4>
            <ul>
              <div>
              { warranty.without1.map((w) => (<li key={ w }> { w } </li>))}
              </div>
              <div>
              { warranty.without2?.map((w) => (<li key={ w }> { w } </li>))}
              </div>
            </ul>
          </div>
          </div>
        </section>
        <section className={ style.contact }>
          <h4> Entre agora em contato que iremos te ajudar! </h4>
          <p> A Selig está qualificada para oferecer o conserto de produtos lg, realizando tanto reparos básicos como de alta complexidade, oferecendo profissionais competentes e qualificados. </p>
          <button> Entre em contato com a nossa equipe <AiOutlineWhatsApp className={ style.btnIcon }/> </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

ProductPage.propTypes = {
  title: PropTypes.string.isRequired,
  warranty: PropTypes.shape({
    with1: PropTypes.array,
    with2: PropTypes.array,
    without1: PropTypes.array.isRequired,
    without2: PropTypes.array,
  }),
  description: PropTypes.string.isRequired,
}

export default ProductPage;