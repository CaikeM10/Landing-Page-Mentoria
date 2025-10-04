import styles from "./styles.module.scss";

const About = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleBlock}>
            <h2>
              <span>Para quem é:</span>
            </h2>
            <h6>
              Este treinamento é para você, profissional da saúde competente
              que:
            </h6>
          </div>
          <div className={styles.flexDesktop}>
            <div className={styles.checkBoxContainer}>
              <div className={styles.checkBoxBlock}>
                <h5>
                  ✅Tem a agenda cheia, mas sente que o faturamento não
                  acompanha.
                </h5>
              </div>
              <div className={styles.checkBoxBlock}>
                <h5>
                  ✅ Vive sobrecarregada e sem tempo de qualidade para si ou
                  para a família.
                </h5>
              </div>
              <div className={styles.checkBoxBlock}>
                <h5>
                  ✅ Trabalha demais, mas não vê o consultório crescer de forma
                  sustentável porque está sobrecarregada.
                </h5>
              </div>
              <div className={styles.checkBoxBlock}>
                <h5></h5>
              </div>
              <div className={styles.checkBoxBlock}>
                <h5>
                  <span>
                    ✅ Como ser uma profissional valorizada sem virar refém da
                    agenda cheia?
                  </span>
                </h5>
              </div>
            </div>
            <img src="/Captura de tela 2025-10-03 191813.png" />
          </div>
        </div>
        <img src="/aboutLine.svg" className={styles.imgLine} />

        {/* --- Nova Seção Inicia Aqui --- */}
        <div className={styles.wrapper}>
          <div className={styles.titleBlock}>
            <h2>
              <span>
                Como ser uma profissional valorizada sem virar refém da agenda
                cheia?
              </span>
            </h2>
          </div>
          Talvez você já tenha se feito perguntas como:
          <div className={styles.flexDesktop}>
            <div className={styles.checkBoxContainer}>
              <div className={styles.checkBoxBlock}>
                <h5>
                  ✅ “Como ajudar mais pessoas e, ao mesmo tempo, ter mais tempo
                  de qualidade e melhores resultados financeiros?”
                </h5>
              </div>
              <div className={styles.checkBoxBlock}>
                <h5>
                  ✅ “Como vou tirar férias, ter recesso ou viver a maternidade,
                  se não posso parar de atender e perder minha renda?”
                </h5>
                <div className={styles.checkBoxBlock}>
                  <h5>
                    ✅ “Como vou tirar férias, ter recesso ou viver a
                    maternidade, se não posso parar de atender e perder minha
                    renda?”
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
