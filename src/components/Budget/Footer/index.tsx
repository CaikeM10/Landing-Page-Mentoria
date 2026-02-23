import styles from "./styles.module.scss";

const Footer = () => {
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        {/* TEXTO FINAL */}
        <h5 className={styles.finalTitle}>
          Sua jornada para um <span>Consultório Sustentável</span> começa com
          este clique!
        </h5>

        {/* DIVISOR */}
        <div className={styles.divider}></div>

        {/* INFORMAÇÕES LEGAIS */}
        <div className={styles.legal}>
          <p>© 2026 Íria Sabóia – Todos os direitos reservados.</p>
          <p>CNPJ: 52.265.822/0001-06</p>
        </div>

        {/* DESENVOLVIDO POR */}
        <div className={styles.dev}>
          Desenvolvido por <strong>CODECRAT</strong>.
        </div>

        {/* CTA FINAL – ÚLTIMO ELEMENTO */}
        <div className={styles.ctaWrapperBottom}>
          <button className={styles.ctaButton} onClick={handlePurchaseRedirect}>
            QUERO ACESSAR A OFERTA ESPECIAL AGORA!
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
