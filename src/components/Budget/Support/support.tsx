import styles from "./styles.module.scss";

const Support = () => {
  return (
    <section className={styles.supportSection}>
      <h3 className={styles.supportTitle}>📲 Ainda em dúvida?</h3>

      <p className={styles.supportText}>
        Fale com nosso time no WhatsApp e receba orientação para decidir com
        segurança.
      </p>

      <div className={styles.supportButtonWrapper}>
        <a
          href="https://wa.me/558596564518"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          Falar Com o time no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Support;
