// Services.jsx
import styles from "./styles.module.scss";

export default function Services() {
  const celebrationText =
    "Esse treinamento faz parte da celebração de 1 ano da Mentoria Voares. É um presente que não se repetirá este ano. Durante o evento, você ainda vai receber benefícios especiais por estar presente neste momento de comemoração.";

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
          <button>Veja Mais Abaixo!</button>
          <h2>
            O que você vai <span>aprender</span>
          </h2>
          <p>
            <span className={styles.balaoDestaque}>
              Os 5 pilares do Consultório Sustentável!
            </span>
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
                <span className={styles.cardTitleHighlight}>
                  Posicionamento marcante
                </span>{" "}
                – Como construir uma marca memorável para valorizar seu
                trabalho.
              </h3>
              <img src="/arrow3.svg" alt="arrow" />
            </div>
          </div>

          {/* 🚀 Cartão 2: Oferta inteligente (ADICIONADO) */}
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

          {/* 🚀 Cartão 3: Agenda próspera (ADICIONADO) */}
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

          {/* 🚀 Cartão 4: Precificação e metas (ADICIONADO) */}
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

          {/* Cartão 5: Comunicação que converte (EXISTENTE) */}
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
        </div>

        {/* ================================================= */}
        {/* LINHA DOURADA ABAIXO DOS CARDS */}
        {/* ================================================= */}
        <div className={styles.sectionLine}></div>

        {/* ================================================= */}
        {/* BLOCO DE CELEBRAÇÃO */}
        {/* ================================================= */}
        <div className={styles.celebrationBox}>
          <p>{celebrationText}</p>
        </div>

        {/* ================================================= */}
        {/* BLOCO DE BENEFÍCIOS E BÔNUS */}
        {/* ================================================= */}
        <div className={styles.benefitsSection}>
          <h4 className={styles.listHeader}>Resultados esperados:</h4>
          <div className={styles.resultsContainer}>
            <div className={styles.simpleCard}>
              <p>
                Clareza do plano de carreira para o próximo voo de crescimento.
              </p>
            </div>
            <div className={styles.simpleCard}>
              <p>Primeiros ajustes de agenda e aumento de ticket médio.</p>
            </div>
            <div className={styles.simpleCard}>
              <p>
                Ritual simples para criar conteúdos consistentes no digital.
              </p>
            </div>
          </div>

          <h4 className={styles.listHeader}>
            Bônus exclusivos para inscritos:
          </h4>
          <div className={styles.resultsContainer}>
            <div className={styles.simpleCard}>
              <p>
                Oferta especial de aniversário da Mentoria Voares (condições
                únicas para quem estiver ao vivo).
              </p>
            </div>
            <div className={styles.simpleCard}>
              <p>Checklist + Desafio 7 dias de Comunicação no Digital.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
