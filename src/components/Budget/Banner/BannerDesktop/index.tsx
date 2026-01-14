import styles from "./styles.module.scss";

// Placeholder para os Ícones (Mantidos para o código compilar)
const IconCalendar = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);
const IconPlay = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);
const IconPlay2 = ({ className }: { className: string }) => (
  <i className={className}>📅</i>
);

const BannerDesktop = () => {
  // 🚀 Lógica atualizada: Redirecionamento direto para o Checkout da Hubla
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flexTitle}>
          <div className={styles.titleBanner}>
            <div className={styles.gridBackground}>
              <button className={styles.orcamento}>
                • Saiba mais abaixo! •
              </button>
              <h1 className={styles.titleLine}>
                <span className={styles.brownText}></span>
              </h1>

              <h1 className={styles.subtitleLine}>
                <br></br>O passo a passo para estruturar seu posicionamento e
                criar novas fontes de renda no consultório.
              </h1>

              <p className={styles.description}>
                Um treinamento para profissionais da saúde que já vivem de
                clinicar e desejam crescer com mais organização, clareza sobre
                os seus serviços e qualidade de vida.
              </p>

              {/* BLOCO DE INFORMAÇÕES DO EVENTO */}
              <div className={styles.eventInfo}>
                <div className={styles.eventDetail}>
                  <IconCalendar className={styles.icon} />
                  <span>
                    Primeira etapa: Treinamento Online, Gravado e acesso
                    imediato.
                  </span>
                </div>
                <div className={styles.eventDetail}>
                  <IconPlay className={styles.icon} />
                  <span>
                    Segunda etapa: Treinamento Online e ao vivo para organizar
                    os próximos passos de crescimento em 2026
                  </span>
                </div>

                <div className={styles.eventDetail}>
                  <IconPlay2 className={styles.icon} />
                  <span>
                    Data da aula ao vivo será 24/01/26 <br></br>Horário das
                    09:00h às 12:00h
                  </span>
                </div>
              </div>

              {/* 🚀 BOTÃO AGORA REDIRECIONA DIRETAMENTE */}
              <button
                className={styles.button}
                onClick={handlePurchaseRedirect}
              >
                QUERO UM CONSULTÓRIO SUSTENTÁVEL!
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src="/Iria_DesktopMarrom.Webp" alt="Íria Sabóia" />
        </div>
      </div>
    </section>
  );
};

export default BannerDesktop;
