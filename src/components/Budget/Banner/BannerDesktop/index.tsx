import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

// Placeholder para os Ícones (Necessário para o código compilar)
const IconCalendar = ({ className }: { className: string }) => (
  <i className={className}></i>
);
const IconPlay = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
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
                  novo modelo de negócio para viver de clinicar, porque a
                  sobrecarga não é sustentável.
                </h1>

                {/* ... (O restante do conteúdo) ... */}

                <p className={styles.description}>
                  Profissional da saúde, transforme sua agenda cheia em um
                  modelo de negócio mais leve e lucrativo, diversificando seus
                  serviços no digital.
                </p>

                {/* BLOCO DE INFORMAÇÕES DO EVENTO */}
                <div className={styles.eventInfo}>
                  <div className={styles.eventDetail}>
                    <IconCalendar className={styles.icon} />
                    <span></span>
                  </div>
                  <div className={styles.eventDetail}>
                    <IconPlay className={styles.icon} />
                    <span>
                      Aula gravada gratuita! Increva-se para ganhar essa aula de
                      presente agora!
                    </span>
                  </div>
                </div>

                <button className={styles.button} onClick={handleModalOpen}>
                  ASSISTA A AULA AGORA MESMO!
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            {/* caminho da imagem */}
            <img src="/imgBannersemfundo.png" alt="Íria Sabóia" />
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerDesktop;
