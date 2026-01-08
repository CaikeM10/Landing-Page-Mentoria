import React from "react";
import styles from "./styles.module.scss";

const VideoFooter = () => {
  const SALES_PAGE_LINK = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";

  const handleRedirect = () => {
    window.location.href = SALES_PAGE_LINK;
  };

  return (
    <section className={styles.videoFooterContainer}>
      <div className={styles.textContainer}>
        <p className={styles.videoSubtitle}>Assista ao vídeo abaixo!</p>
        <h2>
          Sinta como é <span>a experiência de ser Voares.</span>
        </h2>
      </div>

      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="100%"
          /* 🚀 LINK ATUALIZADO COM O NOVO ID: 5vbk0BEOZxk */
          src="https://www.youtube.com/embed/5vbk0BEOZxk"
          title="Vídeo de Apresentação Voares"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.ctaButtonWrapper}>
        <button
          type="button"
          className={styles.ctaButton}
          onClick={handleRedirect}
        >
          CLIQUE AQUI PARA GARANTIR ESSE ACESSO EXCLUSIVO!
        </button>
      </div>
    </section>
  );
};

export default VideoFooter;
