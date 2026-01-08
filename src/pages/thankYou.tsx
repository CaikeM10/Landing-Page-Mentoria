import styles from "../styles/thankYou.module.scss";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FyXUnWPrZ5g3nif7Wx7DL1";

export default function ThankYou() {
  // Função para abrir o WhatsApp em nova aba
  const handleJoinGroup = () => {
    window.open(WHATSAPP_GROUP_LINK, "_blank");
  };

  return (
    <div className={styles.container}>
      {/* 🚀 Título isolado para ser fixado no topo via SCSS */}
      <h1 className={styles.title}>Parabéns pela sua decisão!</h1>

      <div className={styles.content}>
        <p className={styles.subtitle}>
          Obrigada por escolher viver a experiência do Treinamento Consultório
          Sustentável.
          <br />
          Clique no link abaixo para entrar no nosso grupo vip. Por lá, você vai
          ter acesso ao encontro ao vivo do nosso treinamento CS. <br></br>Te
          vejo lá!
        </p>

        {/* BLOCO DE BOTÃO DO WHATSAPP */}
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.ctaButton} ${styles.primaryCta}`}
            onClick={handleJoinGroup}
          >
            Quero entrar no grupo vip TCS
          </button>
        </div>
      </div>
    </div>
  );
}
