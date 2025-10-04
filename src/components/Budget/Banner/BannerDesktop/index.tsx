import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

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
                  • Veja mais abaixo! •
                </button>
                <h1>
                  Consultório Sustentável ! Seu novo modelo de negócio para
                  viver de clinicar.
                </h1>

                <img src="/line.svg" alt="line" />
                <p>
                  Um novo plano de voo para equilibrar sua agenda, aumentar a
                  lucratividade do consultório e fortalecer sua autoridade na
                  profissão, sem abrir mão do que mais importa: o seu tempo de
                  qualidade.
                </p>
                <button className={styles.button} onClick={handleModalOpen}>
                  QUERO GARANTIR MINHA VAGA!
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            {/*mudar caminho da imagem */}
            <img src="/Captura de tela 2025-10-03 191935.png" />
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerDesktop;
