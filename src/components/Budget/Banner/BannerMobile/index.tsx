import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

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
        {/* Bloco principal de conteúdo do banner */}
        <div className={styles.titleBanner}>
          <div className={styles.gridBackground}>
            {/* Botão de destaque/navegação secundária */}
            <button className={styles.orcamento}>• Veja mais abaixo! •</button>

            {/* Título principal (H1) */}
            <h1>
              <span className={styles.destaque}>Consultório Sustentável!</span>
              <span className={styles.nowrap}>Seu novo modelo de negócio</span>
              <br />
              para viver de clinicar.
            </h1>

            {/* Parágrafo de descrição */}
            <p>
              Um novo plano de voo para equilibrar sua agenda, aumentar a
              lucratividade do consultório e fortalecer sua autoridade na
              profissão, sem abrir mão do que mais importa: o seu tempo de
              qualidade.
            </p>
            {/* O botão principal foi removido daqui e colocado abaixo da <section> */}
          </div>
        </div>
      </section>

      {/* 👇 NOVO POSICIONAMENTO: Botão de Call to Action principal - FORA da section container */}
      <button className={styles.button} onClick={handleModalOpen}>
        QUERO GARANTIR MINHA VAGA!
      </button>

      {/* Modal é renderizado condicionalmente */}
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerMobile;
