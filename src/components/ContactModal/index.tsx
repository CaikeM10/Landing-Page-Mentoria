import { useState } from "react";
import { InlineWidget } from "react-calendly";
import styles from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({ isOpen, onClose, title }: ModalProps) => {
  const [showCalendly, setShowCalendly] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar no conteúdo
      >
        <div className={styles.top}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✖
          </button>
        </div>

        {!showCalendly ? (
          <div className={styles.modalButtons}>
            <button
              className={styles.modalButton}
              onClick={() => setShowCalendly(true)} // Mostra o widget do Calendly
            >
              Agendar video chamada
            </button>
            <button
              className={styles.modalButton}
              onClick={
                () => (window.location.href = "https://wa.link/4ktma1") // Redireciona para o WhatsApp
              }
            >
              Falar pelo WhatsApp
            </button>
          </div>
        ) : (
          <div className={styles.calendlyWrapper}>
            <button
              className={styles.backButton}
              onClick={() => setShowCalendly(false)} // Volta às opções do modal
            >
              Voltar
            </button>
            <InlineWidget
              url="https://calendly.com/leonardo-solidtech/reuniao-de-site" // Substitua pela sua URL do Calendly
              styles={{ height: "500px", width: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
