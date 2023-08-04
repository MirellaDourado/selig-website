import Header from '../components/Header';
import PropTypes from 'prop-types';  
import Footer from '../components/Footer';

function ProductPage(title) {
  return(
    <>
      <section>
        <Header/>
        <h2> Assistência Técnica { title } </h2>
      </section>
      <Footer />
    </>
  )
}

ProductPage.PropTypes = {
  title: PropTypes.string.isRequired,
}

export default ProductPage;