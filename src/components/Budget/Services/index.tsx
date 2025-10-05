import styles from "./styles.module.scss";

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <button> Veja Mais Abaixo! </button>
          <h2>
            O que você vai
            <span> aprender</span>
          </h2>
          <p>Os 5 pilares do Consultório Sustentável !</p>
        </div>
        <div className={styles.bottom}>
          {/* Cartões Existentes (Pilares 1 a 5) */}

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Posicionamento marcante
                </span>{" "}
                – Como construir uma marca memorável para valorizar seu
                trabalho.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Oferta inteligente
                </span>{" "}
                – Apresentar serviços de forma estratégica e valorizada.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Agenda próspera
                </span>{" "}
                – Estruturar uma rotina semanal organizada e sustentável.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Precificação e metas
                </span>{" "}
                – Calcular preços, projetar faturamento e crescer com clareza.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Comunicação que converte
                </span>{" "}
                – Criar conteúdos que atraem, educam e vendem com ética.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          {/* 🚀 NOVOS CARTÕES (PILAR 6, 7 e 8) */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Autonomia Digital
                </span>{" "}
                – Dominar as ferramentas online para expandir seu consultório
                sem sobrecarga.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>
                  Marketing Ético
                </span>{" "}
                – Atrair pacientes de alto valor com estratégias de conteúdo e
                autoridade.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}>Fidelização</span> –
                Criar uma jornada de valor que garanta o retorno e a indicação
                de pacientes.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>
          {/* FIM DOS NOVOS CARTÕES */}
        </div>
      </div>
    </section>
  );
}
