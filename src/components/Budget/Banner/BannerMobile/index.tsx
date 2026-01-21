import styles from "./styles.module.scss";

const BannerMobile = () => {
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Adicionado <br /> para controlar a quebra em telas menores como Xiaomi */}
        <h1 className={styles.mainTitle}>
          Treinamento <br />
          Consultório <span className={styles.goldText}>Sustentável</span>
        </h1>

        <p className={styles.description}>
          O passo a passo para estruturar um plano de crescimento sustentável
          com diversificação de serviços no seu consultório.
        </p>

        <div className={styles.eventInfo}>
          <p>
            📅 <strong>Aula prática ao vivo:</strong> 31/01/26
          </p>
          <p>Horário: 09:00h às 12:00h</p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            Quero um consultório sustentável
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
