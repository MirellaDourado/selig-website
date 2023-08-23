import Header from '../components/Header';
import PropTypes from 'prop-types';  
import Footer from '../components/Footer';
import style from './productPage.module.css';
import { AiOutlineWhatsApp } from "react-icons/ai";
import {useEffect} from 'react'

function BrandPage({ title, warranty, description }) {
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
          <img></img>
          <p> { description } </p>
        </section>
        <section className={ style.warrantySection }>
          <h3> Produtos { title }</h3>
          <div>
          {
            warranty.with1 ?
            <div>
              <h4> DENTRO DA GARANTIA </h4>
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
            <h4> FORA DA GARANTIA </h4>
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
          <p> A Selig está qualificada para oferecer o conserto, realizando tanto reparos básicos como de alta complexidade. </p>
          <button> Entre em contato com a nossa equipe <AiOutlineWhatsApp className={ style.btnIcon }/> </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

BrandPage.propTypes = {
  title: PropTypes.string.isRequired,
  warranty: PropTypes.shape({
    with1: PropTypes.array,
    with2: PropTypes.array,
    without1: PropTypes.array.isRequired,
    without2: PropTypes.array,
  }),
  description: PropTypes.string.isRequired,
}

export default BrandPage;