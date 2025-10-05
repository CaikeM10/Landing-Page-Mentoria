import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      {/* ================================================= */}
      {/* SEÇÃO 1 — PARA QUEM É */}
      {/* ================================================= */}
      <div className={styles.section}>
        <div className={styles.sectionLine}></div> {/* linha topo da seção */}
        <div className={styles.wrapper}>
          <div className={styles.titleBlock}>
            <h2>
              <span>Para quem é:</span>
            </h2>
            <p className={styles.subTitle}>
              Este treinamento é para você, profissional da saúde competente
              que:
            </p>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.emoji}>📈</div>
              <h5>
                Tem a agenda cheia, mas sente que o faturamento não acompanha.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>⏰</div>
              <h5>
                Vive sobrecarregada e sem tempo de qualidade para si ou para a
                família.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>❤️</div>
              <h5>
                Trabalha demais, mas não vê o consultório crescer de forma
                sustentável.
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.sectionLine}></div>{" "}
        {/* linha inferior da seção */}
      </div>

      {/* ================================================= */}
      {/* SEÇÃO 2 — PERGUNTAS */}
      {/* ================================================= */}
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.titleBlock}>
            <h2>
              <span>
                Como ser uma profissional valorizada sem virar refém da agenda
                cheia?
              </span>
            </h2>
          </div>

          <p>Talvez você já tenha se feito perguntas como:</p>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.emoji}>😊</div>
              <h5>
                “Como ajudar mais pessoas e, ao mesmo tempo, ter mais tempo de
                qualidade e melhores resultados financeiros?”
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>✈️</div>
              <h5>
                “Como vou tirar férias, ter recesso ou viver a maternidade, se
                não posso parar de atender e perder minha renda?”
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.sectionLine}></div> {/* linha final da seção */}
      </div>
    </section>
  );
};

export default About;
