import styles from "./styles.module.scss";

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <button> Veja mais abaixo! </button>
          <h2>
            O que você vai
            <span> aprender</span>
          </h2>
          <p>Os 5 pilares do Consultório Sustentável !</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                Posicionamento marcante – Como construir uma marca memorável
                para valorizar seu trabalho.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                Oferta inteligente – Apresentar serviços de forma estratégica e
                valorizada.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                Agenda próspera – Estruturar uma rotina semanal organizada e
                sustentável.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                Precificação e metas – Calcular preços, projetar faturamento e
                crescer com clareza.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                Comunicação que converte – Criar conteúdos que atraem, educam e
                vendem com ética.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
