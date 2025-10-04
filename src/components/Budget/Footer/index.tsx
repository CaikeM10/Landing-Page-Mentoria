import { useState } from "react";
import ModalForm from "../Modal";
import styles from "./styles.module.scss";

const Footer = () => {
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
          <h5>
            Preencha seus dados{" "}
            <span>e receba o link da sala e os materiais de apoio. </span>{" "}
          </h5>
          <p></p>
          <button className={styles.button} onClick={handleModalOpen}>
            QUERO GARANTIR MINHA VAGA!
          </button>
          <hr />
          <div className={styles.rights}>
            <span>Íria Sabóia 2025. Todos os direitos reservados</span>
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default Footer;
