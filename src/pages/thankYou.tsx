import styles from "../styles/thankYou.module.scss"; // Assumindo este SCSS

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FyXUnWPrZ5g3nif7Wx7DL1";

export default function ThankYou() {
  // Função para abrir o WhatsApp em nova aba
  const handleJoinGroup = () => {
    window.open(WHATSAPP_GROUP_LINK, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Parabéns pela sua decisão!</h1>
        <p className={styles.subtitle}>
          Obrigada por escolher viver a experiência do Treinamento Consultório
          Sustentável.
          <br></br>
          👉 Clique agora e entre no grupo vip do TCS. Falta pouco para concluir
          o acesso e viver essa experiência de forma completa. É por lá que você
          receberá o acesso à Parte 2 do nosso treinamento prático. Te vejo lá!
        </p>

        {/* BLOCO DE BOTÃO DO WHATSAPP */}
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.ctaButton} ${styles.primaryCta}`}
            onClick={handleJoinGroup}
          >
            Quero entrar no grupo vip TCS
          </button>
        </div>

        {/*<p className={styles.note}>Te esperamos no grupo!</p>*/}
      </div>
    </div>
  );
}
