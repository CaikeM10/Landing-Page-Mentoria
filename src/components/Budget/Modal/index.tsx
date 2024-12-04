import React from "react";
import styles from "./styles.module.scss";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <h2>
            PEÇA AGORA UM <span className={styles.highlight}>ORÇAMENTO</span>{" "}
            GRÁTIS
          </h2>
          <form className={styles.form}>
            <input type="text" placeholder="Nome completo" />
            <input type="tel" placeholder="Telefone" />
            <input type="email" placeholder="Email" />
            <button type="submit">RECEBER ORÇAMENTO GRÁTIS</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
