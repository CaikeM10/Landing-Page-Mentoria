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
        <h1 className={styles.title}>Presença Confirmada!</h1>
        <p className={styles.subtitle}>
          Parabéns! Sua inscrição para participar da aula 02 está confirmada.
          Agora para receber a gravação da aula 01 gratuitamente, entre no nosso
          grupo vip do consultório sustentável.
        </p>

        {/* BLOCO DE BOTÃO DO WHATSAPP */}
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.ctaButton} ${styles.primaryCta}`}
            onClick={handleJoinGroup}
          >
            Quero entrar no grupo vip CS
          </button>
        </div>

        {/*<p className={styles.note}>Te esperamos no grupo!</p>*/}
      </div>
    </div>
  );
}
