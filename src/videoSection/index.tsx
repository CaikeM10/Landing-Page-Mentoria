import React from "react";
import styles from "./styles.module.scss";

function VideoSection() {
  // 🚀 Lógica atualizada: Redirecionamento direto para o Checkout da Hubla
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  const impactPhrase = "Saiba mais no vídeo abaixo.";
  const youtubeEmbedUrl = "https://www.youtube.com/embed/HZe6_4IKsMY";

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.phrase}>{impactPhrase}</h3>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src={youtubeEmbedUrl}
            title="Vídeo Iria - Objetivo do Evento"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
            Seu navegador não suporta iframes.
          </iframe>
        </div>

        {/* 🚀 BOTÃO AGORA REDIRECIONA DIRETAMENTE PARA A HUBLA */}
        <div className={styles.ctaButtonWrapper}>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={handlePurchaseRedirect}
          >
            Quero diversificar meu consultório
          </button>
        </div>

        {/* FEEDBACK MANTIDO CONFORME SOLICITADO */}
        <div className={styles.feedbackContainer}>
          <p className={styles.feedbackTitle}>
            Feedback de quem já fez o Treinamento Consultório Sustentável
          </p>
          <img
            src="/feedbackTCS.WebP"
            alt="Feedback de Aluna"
            className={styles.feedbackImage}
          />
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
