import assistence from '../assets/pexels-mart-production-7709179.jpg';
import styles from '../styles/preOs.module.css';

function PreOs () {
  return(
    <section className={ styles.preOs }>
      <div> <img src={ assistence } alt='' /> </div>
        <div className='meet-pre-os'>
          <h2 className='h-config h3-config'> Conheça a pre-OS </h2>
          <p className='pre-os-p'>Agilize o seu atendimento no momento da visita a nossa loja utilizando a pre-OS. Você poderá agendar sua assistência de uma maneira mais rápida e personalizada, podendo verificar o andamento do seu equipamente preenchendo o formulário.</p>
          <button className='os-button'> Preencher OS </button>
        </div>
        <div className='see-pre-os'>
          <h2 className='h-config h3-config'> Consulte sua OS </h2>
          <p className='pre-os-p' > Caso já tenha preenchido uma pre-OS e deseje saber o andamento da nossa assistência, clique no botão abaixo, informe o seu nome e o número da OS que deseja ver. </p>
          <button className='os-button'> Consultar OS </button>
        </div>
    </section>
  )
}

export default PreOs;