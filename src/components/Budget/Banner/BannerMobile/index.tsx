import { useState } from "react";
import ModalForm from "../../Modal";
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
        <div className={styles.titleBanner}>
          <div className={styles.gridBackground}>
            {/* Título com caixa azul de fundo */}
            <div className={styles.titleBox}>
              <h1>
                <span className={styles.destaque}>
                  Consultório Sustentável:
                </span>
                <br />O passo a passo para estruturar seu posicionamento e criar
                novas fontes de renda no consultório.
              </h1>
            </div>

            <p className={styles.mainDescription}>
              Um treinamento para profissionais da saúde que já vivem de
              clinicar, têm agenda cheia e desejam crescer com mais organização,
              clareza e qualidade de vida — sem aumentar a carga de
              atendimentos.
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

      {/* Botão posicionado fora do container para evitar conflitos de padding no mobile */}
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleModalOpen}>
          CLIQUE AQUI PARA GARANTIR ESSE ACESSO EXCLUSIVO!
        </button>
      </div>

      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerMobile;
