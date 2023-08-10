import styles from '../styles/preOs.module.css';

function PreOs () {
  return(
    <section className={ styles.preOs }>
      <h2 className='h-config h2-config'> Agilize o seu antendimento </h2>
      <hr className='hr' />
      <div className={ styles.preOsWrapper }>
        <div className={ styles.meetPreOs }>
          <h3 className='h-config h3-config'> Conheça a pre-OS </h3>
          <p>Agilize o seu atendimento no momento da visita a nossa loja utilizando a pre-OS. Você poderá agendar sua assistência de uma maneira mais rápida e personalizada, podendo verificar o andamento do seu equipamente preenchendo o formulário.</p>
          <button> Preencher OS </button>
        </div>
        <div className={ styles.seePreOs }>
          <h3 className='h-config h3-config'> Consulte sua OS </h3>
          <p> Caso já tenha preenchido uma pre-OS e deseje saber o andamento da nossa assistência, clique no botão abaixo, informe o seu nome e o número da OS que deseja ver. </p>
          <button> Consultar OS </button>
        </div>
      </div>
    </section>
  )
}

export default PreOs;