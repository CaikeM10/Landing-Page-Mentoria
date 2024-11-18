import { useEffect } from "react";
import styles from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({ isOpen, onClose, title }: ModalProps) => {
  useEffect(() => {
    // Adiciona o script do Calendly ao carregar o componente
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove o script ao desmontar o componente
      document.body.removeChild(script);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✖
          </button>
        </div>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/leonardo-solidtech/reuniao-de-site"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
