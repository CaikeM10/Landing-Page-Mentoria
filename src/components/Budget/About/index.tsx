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
              Essa aula é para você, profissional da saúde competente que:
            </p>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.emoji}>📈</div>
              <h5>
                Tem a agenda cheia, mas sente que o faturamento está estagnado.
                <p>Talvez você já tenha se perguntado: </p>
                “Como ajudar mais pessoas e, ao mesmo tempo, ter mais tempo de
                qualidade e melhores resultados financeiros?”
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>⏰</div>
              <h5>
                Vive sobrecarregada e sem tempo de qualidade para si ou para a
                família.Nessa aula meu treinamento online, inédito e gratuito é
                para profissionais da saúde que desejam construir um Consultório
                Sustentável.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🤯</div>
              <h5>
                Trabalha demais, mas não vê o consultório crescer de forma
                sustentável porque está sobrecarregada. Nessa aula eu Vou
                compartilhar os erros e acertos dos meus 11 anos de clínica e
                como venho estruturando um modelo de negócio sustentável para
                clinicar e crescer com qualidade, sem sobrecarga de
                atendimentos.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}

      {/* ================================================= */}
      {/* SEÇÃO 3 — NOVA SESSÃO */}
      {/* ================================================= */}
    </section>
  );
};

export default About;
