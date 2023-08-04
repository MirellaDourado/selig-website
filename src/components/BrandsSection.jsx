import styles from '../pages/home.module.css';
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

function BrandsSection() {
  return(
    <section className={ styles.brandsWrapper}>
      <h2 className='h-config h2-config'> Nossa Assistência Técnica </h2>
      <div>
        <div>
          <div className={ styles.brandWrapper }>
            <div>  
              <img src={ lgLogo } className={ styles.brand }/>
            </div>
            <Link>SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ samsungLogo } className={ styles.brand } style={ { width: '8em'}}/>
            </div>
            <Link>SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ motorolaLogo } className={ styles.brand } style={ { width: '11em'}}/>
            </div>
            <Link>SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ aocLogo } className={ styles.brand } />
            </div>
            <Link> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ appleLogo } className={ styles.brand } style={ { width: '5.5em' }} />
            </div>
            <Link> SAIBA MAIS</Link>
          </div>
        </div>
        <div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ philcoLogo } className={ styles.brand } />
            </div>
            <Link> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ philipsLogo } className={ styles.brand } style={ { width: '8em' }}  />
            </div>
            <Link> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ tclLogo } className={ styles.brand } />
            </div>
            <Link> SAIBA MAIS</Link>
          </div>
          <div className={ styles.brandWrapper }>
            <div>
              <img src={ positivoLogo } className={ styles.brand } style={{ width: '9.5em' }} />
            </div>
            <Link> SAIBA MAIS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;