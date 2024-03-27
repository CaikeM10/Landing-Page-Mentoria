import styles from "./styles.module.scss";

const Price = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
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
            <h4>
              Total: <span>R$ 2.693,80</span>
            </h4>
            <h5>
              Mas você não vai precisar investir tudo isso para conseguir sua
              vaga agora e mudar de vida.
            </h5>
          </div>
          <div className={styles.rightside}>
            <div className={styles.logo}>
              <img src="/blackLogo.svg" />
            </div>
            <div className={styles.line}>
              <h3>Hoje, para garantir seu futuro,</h3>
              <h3>você precisa</h3>
              <h3>investir apenas:</h3>
            </div>
            <div className={styles.price}>
              <h6>12x de</h6>
              <h2>R$ 41,33</h2>
            </div>
            <h4>ou R$ 497,00 à vista</h4>
            <button>
              <p>Garantir minha vaga</p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Price;
