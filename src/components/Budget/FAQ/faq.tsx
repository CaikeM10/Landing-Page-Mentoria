import { useState } from "react";
import styles from "./styles.module.scss";

const faqData = [
  {
    question: "É para quem está começando?",
    answer:
      "Sim. Estruturar seu posicionamento desde o início evita crescimento desorganizado.",
  },
  {
    question: "Já atendo há anos. Ainda faz sentido?",
    answer:
      "Sim. Muitos profissionais experientes nunca organizaram estrategicamente seu modelo de carreira.",
  },
  {
    question: "É só sobre nicho?",
    answer:
      "Não. É base estratégica de posicionamento, público, serviços e crescimento sustentável.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "Você terá 1 ano de acesso ao conteúdo, contados a partir da sua aquisição.",
  },
  {
    question: "Como consigo acessar?",
    answer:
      "Basta clicar em um dos botões “Quero meu acesso” para ser direcionada a uma página segura de pagamento e garantir seu acesso de forma imediata.|Mas atenção: este produto pode ser retirado do ar a qualquer momento, então garanta o seu agora.",
  },
  {
    question:
      "Eu preciso ter experiência com criação de conteúdo para realizar o treinamento?",
    answer:
      "Não. O treinamento tem uma estrutura prática e acessível para direcionar você com clareza, eliminar o travamento e a insegurança de quem ainda não tem habilidade na criação. Ter um plano estruturado vai facilitar sua vida.",
  },
  {
    question: "Esse material serve para qualquer profissão?",
    answer:
      "Sim. O método pode ser aplicado em qualquer área, mas foi desenvolvido com foco em profissionais da saúde que vivem da prática clínica. Se você for de outra área, é possível adaptar o conteúdo mantendo a lógica estratégica.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>FAQ</h2>

      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>
                {activeIndex === index ? "–" : "+"}
              </span>
            </button>

            <div className={styles.faqAnswer}>
              <p>
                {item.question === "Como consigo acessar?" ? (
                  <>
                    {item.answer.split("|")[0]}
                    <strong> {item.answer.split("|")[1]}</strong>
                  </>
                ) : (
                  item.answer
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
