import React, { useState } from "react";
import styles from "./styles.module.scss";
import ModalForm from "@/components/Budget/Modal";

function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const impactPhrase = "Saiba mais no vídeo abaixo.";

  // 🚀 URL ATUALIZADA: Substituída pelo link do novo Shorts em formato embed
  const youtubeEmbedUrl = "https://www.youtube.com/embed/HZe6_4IKsMY";

  return (
    <>
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

          <div className={styles.ctaButtonWrapper}>
            <button
              type="button"
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)}
            >
              CLIQUE AQUI PARA GARANTIR ESSE ACESSO EXCLUSIVO!
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default VideoSection;
