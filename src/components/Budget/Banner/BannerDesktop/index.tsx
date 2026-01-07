import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

// Placeholder para os Ícones (Necessário para o código compilar)
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
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
                  <span className={styles.destaque}>
                    Consultório Sustentável,
                  </span>{" "}
                  <br></br>
                  10 Modelos de diversificação de serviços para profissionais da
                  saúde.
                </h1>

                {/* ... (Restante do conteúdo) ... */}

                <p className={styles.description}>
                  Você já vive de clinicar e quer seguir crescendo com
                  organização e tempo de qualidade na agenda.
                </p>

                {/* BLOCO DE INFORMAÇÕES DO EVENTO */}
                <div className={styles.eventInfo}>
                  <div className={styles.eventDetail}>
                    <IconCalendar className={styles.icon} />
                    <span>
                      {" "}
                      Primeira etapa: Treinamento Online e Gravado para
                      fortalecer seu posicionamento e organizar seu modelo de
                      negócio para ser um consultório sustentável, com
                      diversificação de serviços
                    </span>{" "}
                    {/* ⬅️ Adicionei a data aqui */}
                  </div>
                  <div className={styles.eventDetail}>
                    <IconPlay className={styles.icon} />
                    <span>
                      Segunda etapa: Treinamento Online e ao vivo para organizar
                      os próximos passos de crescimento em 2026
                    </span>
                  </div>

                  {/* 🚀 NOVO BLOCO SOLICITADO */}
                  <div className={styles.eventDetail}>
                    <IconPlay2 className={styles.icon} />{" "}
                    {/* Placeholder de ícone, se desejar */}
                    <span>
                      Data da aula ao vivo será 24/01/ 26 <br></br>Horário das
                      09:00h às 12:00h
                    </span>
                  </div>
                </div>

                <button className={styles.button} onClick={handleModalOpen}>
                  CLIQUE AQUI PARA GARANTIR O SEU ACESSO EXCLUSIVO!
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            {/* caminho da imagem */}
            <img src="/Iria_DesktopMarrom.png" alt="Íria Sabóia" />
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerDesktop;
