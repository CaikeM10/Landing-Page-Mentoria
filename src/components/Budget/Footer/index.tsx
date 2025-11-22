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
            Preencha o formulário <span>e acesse a aula agora mesmo!</span>{" "}
          </h5>
          <p></p>
          <button className={styles.button} onClick={handleModalOpen}>
            CLIQUE AQUI PARA GANHAR ESSE ACESSO!
          </button>
          <hr />
          <div className={styles.rights}>
            <span>Íria Sabóia 2025. Todos os direitos reservados.</span>
          </div>
          <div className={styles.rights}>
            <span>DESENVOLVIDO POR CODECRAT.</span>
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default Footer;
