import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

// 💥 DEFINIÇÃO DOS COMPONENTES DE ÍCONE (PLACEHOLDERS)
// Estes são placeholders simples. Use seus componentes/SVGs reais se existirem.
const IconCalendar = ({ className }: { className: string }) => (
  <i className={className}>🗓️</i>
);
const IconPlay = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
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
      {/* Container principal para o banner mobile */}
      <section className={styles.container}>
        <div className={styles.titleBanner}>
          <div className={styles.gridBackground}>
            <h1>
              <span className={styles.destaque}>Consultório Sustentável:</span>
              <span className={styles.nowrap}>Seu novo modelo de negócio</span>
              <br />
              para viver de clinicar.
            </h1>

            <p>
              Profissional da saúde, transforme sua agenda cheia em um modelo de
              negócio mais leve e lucrativo, diversificando seus
              serviços no digital.
            </p>

            {/* 💥 NOVO BLOCO DE INFORMAÇÕES DO EVENTO */}
            <div className={styles.eventInfo}>
              <div className={styles.eventDetail}>
                <IconCalendar className={styles.icon} />
                <span> Dia 27 de Outubro, às 20h.</span>
              </div>

              <div className={styles.eventDetail}>
                <IconPlay className={styles.icon} />
                <span>
                  Aulão inédito – ao vivo / gratuito apenas para inscritos.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão de Call to Action principal */}
      <button className={styles.button} onClick={handleModalOpen}>
        QUERO GARANTIR MINHA VAGA!
      </button>

      {/* Modal é renderizado condicionalmente */}
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerMobile;
