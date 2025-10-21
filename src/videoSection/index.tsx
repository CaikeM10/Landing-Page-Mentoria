import styles from "./styles.module.scss";

const VideoSection = () => {
  const impactPhrase =
    "Descubra mais sobre um dos objetivos do evento no vídeo abaixo.";

  // 🔴 IMPORTANTE: SUBSTITUA ESTE VALOR PELO SEU LINK DE INCORPORAÇÃO REAL DO YOUTUBE
  const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/7xAsiw_oOaw";

  // O link geralmente precisa dos parâmetros ?controls=0&modestbranding=1, etc.
  // Você pode adicionar parâmetros, se necessário, como este exemplo:
  // const youtubeEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&autoplay=0&rel=0";

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Frase de impacto */}
        <h3 className={styles.phrase}>{impactPhrase}</h3>

        {/* Contêiner responsivo para o VÍDEO DO YOUTUBE */}
        <div className={styles.videoWrapper}>
          {/* ---------------------------------------------------- */}
          {/* O NOVO CÓDIGO DO YOUTUBE (IFRAME) VAI AQUI */}
          {/* ---------------------------------------------------- */}
          <iframe
            className={styles.video} // Reutilizamos a classe CSS para o dimensionamento
            src={youtubeEmbedUrl}
            title="Vídeo Iria - Objetivo do Evento" // Título para acessibilidade
            frameBorder="0"
            // Atributos de permissão para autoplay, tela cheia, etc.
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // Permite o modo de tela cheia
          >
            Seu navegador não suporta iframes (o que é raro, mas serve como
            fallback).
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
