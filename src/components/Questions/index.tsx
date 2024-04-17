import Accordion from "../Accordion";
import styles from "./styles.module.scss";

const Questions = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles.title}>
            <h2>
              Ficou com alguma <span>dúvida</span>?
            </h2>
          </div>
          <div className={styles.subtitle}>
            <h4>
              Confira as respostas frequentes ou entre em contato conosco pelos
              canais abaixo:
            </h4>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src="/whats.svg" />
            </div>
            <div className={styles.text}>
              <h3>
                Atendimento por <span>whatsapp</span>
              </h3>
              <p>Toque aqui para tirar suas dúvidas</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.icon}>
              <img src="/mail.svg" />
            </div>
            <div className={styles.text}>
              <h3>
                Atendimento por <span>e-mail</span>
              </h3>
              <p>Toque aqui para tirar suas dúvidas</p>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
          <Accordion
            title="Como faço para me cadastrar?"
            content="Para se cadastrar, basta acessar a página de cadastro e preencher os campos obrigatórios."
          />
        </div>
      </div>
    </main>
  );
};

export default Questions;
