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
                  10 Modelos de diversificação
                </span>
                <br />
                de serviços para profissionais da saúde.
              </h1>
            </div>

            <p>
              Você já vive de clinicar e quer seguir crescendo com organização e
              tempo de qualidade na agenda.
            </p>

            {/* 💥 BLOCO DE INFORMAÇÕES DO EVENTO (Atualizado) */}
            <div className={styles.eventInfo}>
              {/* 🚀 NOVA SEÇÃO 1: Data do Evento (Placeholder) */}
              <div className={styles.eventDetail}>
                <IconCalendar className={styles.icon} />
                <span>
                  {" "}
                  Primeira etapa: Treinamento Online e Gravado para fortalecer
                  seu posicionamento e organizar seu modelo de negócio para ser
                  um consultório sustentável, com diversificação de serviços.
                </span>
              </div>
              <br></br>

              {/* SEÇÃO ORIGINAL: Aula Gravada */}
              <div className={styles.eventDetail}>
                <IconPlay className={styles.icon} />
                <span>
                  Segunda etapa: Treinamento Online e ao vivo para organizar os
                  próximos passos de crescimento em 2026
                </span>
              </div>
              <br></br>

              {/* 🚀 NOVA SEÇÃO 2: Instrução de CTA */}
              <div className={styles.eventDetail}>
                <IconPlay1 className={styles.icon} />{" "}
                {/* Mantenho o IconPlay como placeholder, você pode trocar. */}
                <span>
                  {" "}
                  Data da aula ao vivo será 24/01/ 26 <br></br>Horário das
                  09:00h às 12:00h
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
