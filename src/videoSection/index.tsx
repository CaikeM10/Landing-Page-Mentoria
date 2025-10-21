import styles from "./styles.module.scss";

const VideoSection = () => {
  const impactPhrase =
    "Descubra mais sobre um  dos objetivos do evento no video abaixo.";

  // O Next.js acessa a pasta 'public' diretamente pelo caminho raiz /
  const videoSource = "/videoIria.mp4";

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Frase de impacto */}
        <h3 className={styles.phrase}>{impactPhrase}</h3>

        {/* Contêiner responsivo para o VÍDEO MP4 */}
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={videoSource}
            poster="/telainicialvideo.png/" // Imagem exibida antes do vídeo carregar
            controls // Mostra os controles do player
            loop // Opcional: faz o vídeo reiniciar
            playsInline // Ajuda a reproduzir em linha no iOS
            preload="metadata"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
