import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

// 💥 DEFINIÇÃO DOS COMPONENTES DE ÍCONE (PLACEHOLDERS)
// Estes são placeholders simples. Use seus componentes/SVGs reais se existirem.
const IconPlay = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);
const IconPlay1 = ({ className }: { className: string }) => (
  <i className={className}>📅</i>
);
const IconCalendar = ({ className }: { className: string }) => (
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
            <div className={styles.titleBox}>
              <h1>
                <span className={styles.destaque}>
                  Consultório Sustentável:
                </span>
                <span className={styles.nowrap}>
                  Seu novo modelo de negócio
                </span>
                <br />
                para viver de clinicar.
              </h1>
            </div>

            <p>
              Profissional da saúde, transforme sua agenda cheia em um modelo de
              negócio mais leve e lucrativo, diversificando seus
              serviços no digital.
            </p>

            {/* 💥 BLOCO DE INFORMAÇÕES DO EVENTO (Atualizado) */}
            <div className={styles.eventInfo}>
              {/* 🚀 NOVA SEÇÃO 1: Data do Evento (Placeholder) */}
              <div className={styles.eventDetail}>
                <IconCalendar className={styles.icon} />
                <span>
                  {" "}
                  Aula 01 - gravada gratuita! Inscreva-se para ganhar essa aula
                  de presente agora!
                </span>
              </div>

              {/* SEÇÃO ORIGINAL: Aula Gravada */}
              <div className={styles.eventDetail}>
                <IconPlay className={styles.icon} />
                <span>
                  Aula 02 - sobre diversificação de serviços no consultório
                  sustentável.
                </span>
              </div>

              {/* 🚀 NOVA SEÇÃO 2: Instrução de CTA */}
              <div className={styles.eventDetail}>
                <IconPlay1 className={styles.icon} />{" "}
                {/* Mantenho o IconPlay como placeholder, você pode trocar. */}
                <span>
                  {" "}
                  Data: 01 de dezembro às 20horas teremos a aula 02 do
                  consultório sustentável, como implementar as diversificações
                  de serviços na sua prática clinicar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão de Call to Action principal */}
      <button className={styles.button} onClick={handleModalOpen}>
        CLIQUE AQUI PARA GANHAR ESSE ACESSO!
      </button>

      {/* Modal é renderizado condicionalmente */}
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerMobile;
