import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sectionLine}></div>
        <div className={styles.wrapper}>
          <div className={styles.titleBlock}>
            <h2>
              <span>Para quem é:</span>
            </h2>
            <p className={styles.subTitle}>
              Esse treinamento é para você, profissional da saúde competente
              que:
            </p>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.emoji}>🤯</div>
              <h5>
                Tem a agenda cheia, mas sente que o faturamento está estagnado.
                <p>Talvez você já tenha se perguntado: </p>
                “Como ajudar mais pessoas e, ao mesmo tempo, ter mais tempo de
                qualidade e melhores resultados financeiros?”
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>📈</div>
              <h5>
                Um treinamento prático que une conteúdo gravado + aula ao vivo,
                para quem já tem um consultório ativo e precisa organizar os
                próximos passos de crescimento com qualidade.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>⏰</div>
              <h5>
                Esse treinamento é para você que quer desenvolver seu plano de
                diversificação de serviços, crescer com organização, tempo de
                qualidade e fazer escolhas alinhadas ao seu posicionamento e
                valores para desenvolver uma estratégica de crescimento
                sustentável.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
