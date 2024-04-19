import styles from "./styles.module.scss";

const Price = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <h2>
              Quanto você precisará <span>investir?</span>
            </h2>
            <h5>
              Torne-se um programador e mude de vida criando sites e landing
              pages!
            </h5>
          </div>
          <div className={styles.modulesResponsive}>
            <img src="/smallCheck.svg" />
            <p>Módulo 01: Design com figma - R$ 697,00</p>
          </div>
          <div className={styles.modulesResponsive}>
            <img src="/smallCheck.svg" />
            <p>Módulo 02: WordPress - R$ 97,00</p>
          </div>
          <div className={styles.modulesResponsive}>
            <img src="/smallCheck.svg" />
            <p>Módulo 03: Estratégias de venda - R$ 67,00</p>
          </div>
          <div className={styles.modulesResponsive}>
            <img src="/smallCheck.svg" />
            <p>Módulo 04: Programação do zero ao pro - R$ 97,00</p>
          </div>
          <div className={styles.modulesResponsive}>
            <img src="/smallCheck.svg" />
            <p>Módulo 05: Anúncios online - R$ 67,00</p>
          </div>
          <div className={styles.modulesResponsive}>
            <img src="/smallCheck.svg" />
            <p>Suporte do REI - imensurável</p>
          </div>
          <div className={styles.middle}>
            <div className={styles.logo}>
              <img src="/logo2.svg" />
            </div>
            <div className={styles.money}>
              <img src="/money.svg" />
              <p>TUDO ISSO POR APENAS</p>
            </div>
            <div className={styles.bigMoney}>
              <h2>R$ 16,99</h2>
              <h3>/Mês</h3>
            </div>
            <div className={styles.middleMoney}>
              <h3>ou R$ 250,00 / Ano</h3>
            </div>
            <div className={styles.button}>
              <button>
                <p>Quero mudar minha vida Com sites</p>
                <img src="buttonArrow.svg" />
              </button>
            </div>
            <hr className={styles.hr} />
            <div className={styles.payments}>
              <img src="/payments.svg" />
            </div>
          </div>
          <div className={styles.rightside}>
            <h3>Relembrando tudo que você vai ter acesso agora:</h3>
            <div className={styles.modules}>
              <img src="/smallCheck.svg" />
              <p>Módulo 01: Design com figma - R$ 697,00</p>
            </div>
            <div className={styles.modules}>
              <img src="/smallCheck.svg" />
              <p>Módulo 02: WordPress - R$ 97,00</p>
            </div>
            <div className={styles.modules}>
              <img src="/smallCheck.svg" />
              <p>Módulo 03: Estratégias de venda - R$ 67,00</p>
            </div>
            <div className={styles.modules}>
              <img src="/smallCheck.svg" />
              <p>Módulo 04: Programação do zero ao pro - R$ 97,00</p>
            </div>
            <div className={styles.modules}>
              <img src="/smallCheck.svg" />
              <p>Módulo 05: Anúncios online - R$ 67,00</p>
            </div>
            <div className={styles.modules}>
              <img src="/smallCheck.svg" />
              <p>Suporte do REI - imensurável</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Price;
