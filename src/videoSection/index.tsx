import React, { useState } from "react"; //
import styles from "./styles.module.scss";
import ModalForm from "@/components/Budget/Modal";

// 🔴 IMPORTAÇÃO CORRIGIDA BASEADA EM OUTRAS PARTES DO SEU CÓDIGO
// Seu ModalForm está sendo exportado como 'default' da pasta 'Modal'

function VideoSection() {
  // 🔴 ESTADO PARA CONTROLAR A ABERTURA E FECHAMENTO DO MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const impactPhrase =
    "Descubra mais sobre um dos objetivos do evento no vídeo abaixo.";

  // URL corrigida do YouTube (youtube-nocookie)
  const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/7xAsiw_oOaw";

  return (
    // Fragmento (<>...</>) para permitir renderizar o Modal fora da <section>
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          {/* Frase de impacto */}
          <h3 className={styles.phrase}>{impactPhrase}</h3>

          {/* Contêiner responsivo para o VÍDEO DO YOUTUBE */}
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

          {/* 🔴 NOVO: BOTÃO QUE ABRE O MODAL */}
          <div className={styles.ctaButtonWrapper}>
            <button
              type="button"
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)} // 💥 AÇÃO: Abre o Modal
            >
              EU QUERO O PRóXIMO VOO
            </button>
          </div>
        </div>
      </section>

      {/* 🔴 RENDERIZAÇÃO CONDICIONAL DO MODAL */}
      {/* O ModalForm recebe a função onClose para fechar a si mesmo */}
      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default VideoSection;
