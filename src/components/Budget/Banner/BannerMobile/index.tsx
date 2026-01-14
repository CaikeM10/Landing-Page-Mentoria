import styles from "./styles.module.scss";

// 💥 DEFINIÇÃO DOS COMPONENTES DE ÍCONE (PLACEHOLDERS)
const IconPlay = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);
const IconCalendar = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);
const IconLive = ({ className }: { className: string }) => (
  <i className={className}>📅</i>
);

const BannerMobile = () => {
  // 🚀 Lógica atualizada: Redirecionamento direto para o novo link da Hubla
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.titleBanner}>
          <div className={styles.gridBackground}>
            {/* Título com caixa azul de fundo */}
            <div className={styles.titleBox}>
              <h1>
                O passo a passo para estruturar seu posicionamento e criar novas
                fontes de renda no consultório.
              </h1>
            </div>

            <p className={styles.mainDescription}>
              Um treinamento para profissionais da saúde que já vivem de
              clinicar e desejam crescer com mais organização, clareza sobre os
              seus serviços e qualidade de vida.
            </p>

            {/* 💥 BLOCO DE INFORMAÇÕES DO EVENTO */}
            <div className={styles.eventInfo}>
              <div className={styles.eventDetail}>
                <IconCalendar className={styles.icon} />
                <span>
                  <strong>Primeira etapa:</strong> Treinamento Online, Gravado e
                  acesso imediato.
                </span>
              </div>
              <br></br>

              <div className={styles.eventDetail}>
                <IconPlay className={styles.icon} />
                <span>
                  <strong>Segunda etapa:</strong> Treinamento Online e ao vivo
                  para organizar os próximos passos em 2026.
                </span>
              </div>
              <br></br>
              <div className={styles.eventDetail}>
                <IconLive className={styles.icon} />
                <span>
                  <strong>Aula ao vivo:</strong> 24/01/26 <br />
                  Horário: 09:00h às 12:00h
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão posicionado fora do container - Agora aponta para o Checkout Direto */}
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handlePurchaseRedirect}>
          Quero um consultório sustentável
        </button>
      </div>
    </>
  );
};

export default BannerMobile;
