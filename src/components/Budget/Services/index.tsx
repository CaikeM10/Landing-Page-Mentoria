// Services.jsx
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* ================================================= */}
        {/* LINHA DOURADA ACIMA DO TÍTULO */}
        {/* ================================================= */}
        <div className={styles.sectionLine}></div>

        {/* ================================================= */}
        {/* TOPO */}
        {/* ================================================= */}
        <div className={styles.top}>
          <button></button>
          <h2>
            <span></span>
          </h2>
          <p>
            <span className={styles.balaoDestaque}></span>
          </p>
        </div>

        {/* ================================================= */}
        {/* BOTTOM / CARDS - AGORA COM OS 5 PILARES COMPLETOS */}
        {/* ================================================= */}
        <div className={styles.bottom}>
          {/* Cartão 1: Posicionamento marcante (EXISTENTE) */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}></span>{" "}
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          {/* 🚀 Cartão 2: Oferta inteligente (ADICIONADO) */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}></span>{" "}
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          {/* 🚀 Cartão 3: Agenda próspera (ADICIONADO) */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}></span>{" "}
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          {/* 🚀 Cartão 4: Precificação e metas (ADICIONADO) */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}></span>{" "}
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          {/* Cartão 5: Comunicação que converte (EXISTENTE) */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3>
                <span className={styles.cardTitleHighlight}></span>{" "}
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className={styles.sectionLine}></div>

        <div className={styles.celebrationBox}>
          <p></p>
        </div>

        <div className={styles.benefitsSection}>
          <h4 className={styles.listHeader}></h4>
          <div className={styles.resultsContainer}>
            <div className={styles.simpleCard}>
              <p></p>
            </div>
            <div className={styles.simpleCard}>
              <p></p>
            </div>
            <div className={styles.simpleCard}>
              <p></p>
            </div>
          </div>

          <h4 className={styles.listHeader}></h4>
          <div className={styles.resultsContainer}>
            <div className={styles.simpleCard}>
              <p></p>
            </div>
            <div className={styles.simpleCard}>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
