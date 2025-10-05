import { useState } from "react";
import ModalForm from "../Modal";
import styles from "./styles.module.scss";

export default function Who() {
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
          <div className={styles.images}>
            <img src="/Captura de tela 2025-10-03 191715.png" alt="three" />
            <img src="/Captura de tela 2025-10-03 191813.png" alt="one" />
          </div>
          <div className={styles.text}>
            <h3>sobre</h3>
            <h2>
              quem é <span>ÍRIA SABÓIA?</span>
            </h2>
            <p>
              Sou psicóloga clínica há mais de 11 anos, especialista em Terapia
              Comportamental e fundadora da Voares.
            </p>
            <p>
              Ao longo da minha trajetória, construí um consultório de sucesso
              presencial e online, hoje com outras profissionais associadas.
              Como mentora, ajudo profissionais da saúde a estruturarem
              consultórios sustentáveis, com liberdade, propósito e
              tempo de qualidade.
            </p>

            <button onClick={handleModalOpen}>
              QUERO GARANTIR MINHA VAGA!
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
}
