import { useRouter } from "next/router";
import styles from "../styles/thankYou.module.scss"; // Assumindo este SCSS

// 🚨 DEFINIÇÃO DOS LINKS (SUBSTITUA ESTES VALORES!)
const YOUTUBE_ACCESS_LINK = "https://youtu.be/QtEv5KXpvHU";
const WHATSAPP_GROUP_LINK =
  "https://chat.whatsapp.com/DcpKUyQw8L6FOpVLNcReO6?mode=ems_copy_t";

export default function ThankYou() {
  // Função para abrir o WhatsApp em nova aba
  const handleJoinGroup = () => {
    window.open(WHATSAPP_GROUP_LINK, "_blank");
  };

  // Função para redirecionar a página atual para o YouTube
  const handleWatchVideo = () => {
    window.location.href = YOUTUBE_ACCESS_LINK;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Presença Confirmada!</h1>
        <p className={styles.subtitle}>
          Parabéns, sua inscrição foi confirmada. Agora, escolha o próximo
          passo:
        </p>

        {/* 💥 BLOCO DE BOTÕES DE ESCOLHA */}
        <div className={styles.buttonGroup}>
          {/* 1. BOTÃO WHATSAPP (PRIORIDADE: COMUNIDADE) */}
          <button
            className={`${styles.ctaButton} ${styles.primaryCta}`}
            onClick={handleJoinGroup}
          >
            1. ENTRAR NO GRUPO VIP (WhatsApp)
          </button>

          {/* 2. BOTÃO VÍDEO (PRIORIDADE: CONTEÚDO) */}
          <button
            className={`${styles.ctaButton} ${styles.secondaryCta}`}
            onClick={handleWatchVideo}
          >
            2. ASSISTIR À AULA EXCLUSIVA
          </button>
        </div>

        <p className={styles.note}>
          Assista agora mesmo à aula exclusiva no YouTube e junte-se ao nosso
          grupo!
        </p>
      </div>
    </div>
  );
}
