import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      {/* ================================================= */}
      {/* SEÇÃO 1 — PARA QUEM É */}
      {/* ================================================= */}
      <div className={styles.section}>
        <div className={styles.sectionLine}></div>
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
              <div className={styles.emoji}>🤯</div>
              <h5>
                Trabalha demais, mas não vê o consultório crescer de forma
                sustentável porque está sobrecarregada.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SEÇÃO 2 — PERGUNTAS */}
      {/* ================================================= */}
      <div className={styles.section}>
        <div className={styles.sectionLine}></div>
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
                não posso parar de atender e suspender minha fonte de renda?”
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SEÇÃO 3 — NOVA SESSÃO */}
      {/* ================================================= */}
      <div className={styles.section}>
        <div className={styles.sectionLine}></div>
        <div className={styles.wrapper}>
          <div className={styles.titleBlock}>
            <h2>
              <span>
                Se essas questões fazem parte da sua realidade, este treinamento
                foi feito especialmente para você.
              </span>
            </h2>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.emoji}>✨</div>
              <h5>
                O próximo Voo será meu treinamento online, inédito e gratuito
                para profissionais da saúde que desejam construir um Consultório
                Sustentável.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>📈</div>
              <h5>
                Vou compartilhar os erros e acertos dos meus 11 anos de clínica
                e como venho estruturando um modelo de negócio sustentável para
                clinicar e crescer com qualidade, sem sobrecarga de
                atendimentos.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
