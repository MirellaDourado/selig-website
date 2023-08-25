import styles from '../styles/brands.module.css';
import lgLogo from '../assets/lg-logotipo.png';
import samsungLogo from '../assets/Samsung-Logo.png';
import motorolaLogo from '../assets/Motorola-Logo-2.png';
import aocLogo from '../assets/aoc-logo-1.png';
import appleLogo from '../assets/Apple_logo_black.svg.png'
import philcoLogo from '../assets/philco-logo.png'
import philipsLogo from '../assets/Philips_logo_new.svg.png';
import tclLogo from '../assets/tcl-logo-2.png'
import { Link } from 'react-router-dom';
import positivoLogo from '../assets/positivo-logo.png'
import { logosArray } from '../data';

function BrandsSection() {
  return(
    <section className={ styles.brandsWrapper}>
      <h2 className='h-config h2-config'> Nossa Assistência Técnica </h2>
      <hr className='hr' />
      <div>
        <div>
          <div className={ styles.brandWrapper }>
            <div>  
              <img src={ lgLogo } className={ styles.brand } />
            </div>
            <Link to='/lg'>SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ samsungLogo } className={ styles.brand } />
            </div>
            <Link to='/samsung'>SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ motorolaLogo } className={ styles.brand } />
            </div>
            <Link to='/motorola'>SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ aocLogo } className={ styles.brand } />
            </div>
            <Link to='/aoc'> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ appleLogo } className={ styles.brand } />
            </div>
            <Link to='/apple'> SAIBA MAIS</Link>
          </div>
        </div>
        <div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ philcoLogo } className={ styles.brand } />
            </div>
            <Link to='/philco'> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ philipsLogo } className={ styles.brand } />
            </div>
            <Link to='/philips'> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ tclLogo } className={ styles.brand } />
            </div>
            <Link to='/tcl'> SAIBA MAIS </Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ positivoLogo } className={ styles.brand }/>
            </div>
            <Link to='/positivo'> SAIBA MAIS </Link>
          </div>
        </div>
      </div>
      <div className={styles.brandsCarousel}>
        <div>
          {logosArray.map(({ src, alt, href }) => (
            <div
              className={styles.cardWrapper}
              key={alt + href}
              >
              <a href={href} className={styles.card}>
                <img
                  src={src}
                  alt={alt}
                  width="60px"
                />
                <p>
                  Saiba mais
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;