import React from "react";
import styles from "./styles.module.scss";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  // 🔗 LINKS DAS PÁGINAS
  const SALES_PAGE_LINK = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  const THANK_YOU_PAGE_LINK = "/thankYou";

  const handleAction = () => {
    // 1. Primeiro, tentamos abrir o Thank You em uma nova aba (ficará em segundo plano)
    window.open(THANK_YOU_PAGE_LINK, "_blank");

    // 2. IMEDIATAMENTE redirecionamos a aba principal para a Venda
    // Isso garante que a página que o usuário está olhando mude para a oferta
    window.location.href = SALES_PAGE_LINK;

    onClose();
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.content}>
        <div className={styles.close}>
          <img src="/XSquare.svg" alt="x" onClick={onClose} />
        </div>

        <div className={styles.backgroundImage}></div>

        <div className={styles.text}>
          <h3>
            Clique no <br></br>
            <span>botão abaixo !</span>
          </h3>
          <p className={styles.description}>
            Acesse a oferta exclusiva e inicie agora mesmo o Treinamento
            Consultório Sustentável.
          </p>
        </div>

        <div className={styles.form}>
          <button
            type="button"
            className={styles.button}
            onClick={handleAction}
          >
            QUERO ACESSAR A OFERTA ESPECIAL AGORA!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
