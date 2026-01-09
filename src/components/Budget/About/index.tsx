import { useState } from "react";
import styles from "./styles.module.scss";
import ModalForm from "@/components/Budget/Modal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sectionLine}></div>
        <div className={styles.wrapper}>
          {/* SEÇÃO: PARA QUEM É */}
          <div className={styles.titleBlock}>
            <h2>
              Para quem é o <span>treinamento:</span>
            </h2>
            <p className={styles.subTitle}>
              Esse treinamento é para você, profissional da saúde competente
              que:
            </p>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.emoji}>🤯</div>
              <h5>
                Você já vive de clinicar e sente que estagnou no modelo atual.
                <br />
                <br />
                Tem a agenda instável e não sabe como captar pacientes. <br />
                <br /> Tem agenda cheia, mas percebe que tempo virou um recurso
                escasso.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>📈</div>
              <h5>
                Crescer aumentando apenas a quantidade de atendimentos
                individuais não é sustentável.
                <br />
                <br />
                Quer criar novos serviços, mas não sabe por onde começar.
              </h5>
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>⏰</div>
              <h5>
                Para você que quer desenvolver seu plano de diversificação e
                crescer com organização e tempo de qualidade.
              </h5>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* SEÇÃO: PARA QUEM NÃO É */}
          <div className={styles.titleBlock}>
            <h2>
              Para quem <span>não é:</span>
            </h2>
            <p className={styles.subTitle}>Este treinamento não é para quem:</p>
          </div>

          <div className={styles.containerSingleCard}>
            <div className={styles.cardBege}>
              <ul>
                <li>
                  Está buscando fórmulas prontas ou promessas rápidas de
                  faturamento
                </li>
                <li>
                  Acredita que crescer significa apenas atender mais pacientes e
                  normaliza a exaustão
                </li>
                <li>
                  Não está disposta(o) a repensar o próprio posicionamento
                  profissional
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* SEÇÃO: O QUE VOCÊ VAI APRENDER */}
          <div className={styles.titleBlock}>
            <h2>
              O que você vai <span>aprender:</span>
            </h2>
            <p className={styles.subTitle}>
              No Treinamento Consultório Sustentável, você vai aprender:
            </p>
          </div>

          <div className={styles.containerAprendizado}>
            <div className={styles.cardAprendizado}>
              <ul>
                <li>
                  Fazer um diagnóstico do seu atual modelo de negócio para viver
                  de clinicar
                </li>
                <li>
                  Como estruturar seu posicionamento profissional para sustentar
                  crescimento com qualidade
                </li>
                <li>
                  10 planos de voo - modelos possíveis de diversificação de
                  serviços
                </li>
                <li>
                  Como transformar seu conhecimento e experiência para ampliar
                  seu faturamento
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* SEÇÃO: EXPERIÊNCIA TCS */}
          <div className={styles.titleBlock}>
            <h2>
              Conheça como será sua <span>Experiência com o TCS:</span>
            </h2>
            <div className={styles.subTitleWrapper}>
              <p className={styles.subTitleHighlight}>
                Acesso imediato ao material gravado com os seguintes módulos:
              </p>
            </div>
          </div>

          <div className={styles.experienceLayout}>
            <div className={styles.photoContainer}>
              <div className={styles.mainPhotoWrapper}>
                <img
                  src="/foto1iria.jpeg"
                  alt="Experiência Principal"
                  className={styles.mainPhoto}
                />
                <img
                  src="/foto2iria.jpeg"
                  alt="Detalhe Experiência"
                  className={styles.overlapPhoto}
                />
              </div>
            </div>

            <div className={styles.cardExperiencia}>
              <ul>
                <li>Boas vindas</li>
                <li>
                  <strong>Módulo 01:</strong> Diagnóstico do seu modelo de
                  negócio
                </li>
                <li>
                  <strong>Módulo 02:</strong> Estruturação de Posicionamento com
                  qualidade
                </li>
                <li>
                  <strong>Módulo 03:</strong> 10 Planos de Voo com modelos de
                  diversificação
                </li>
                <li>
                  <strong>Fechamento</strong> sobre Empreendedorismo para viver
                  de clinicar
                </li>
                <li className={styles.conviteEspecial}>
                  🎁 É um convite especial para quem assistir até o final.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* SEÇÃO: INVESTIMENTO REVISADA */}
          <div className={styles.titleBlock}>
            <h2>Investimento</h2>
          </div>

          <div className={styles.investmentCard}>
            <div className={styles.priceContainer}>
              <span className={styles.oldPrice}>De: R$ 345,00</span>
              <p className={styles.installmentCall}>Por apenas:</p>
              <h3 className={styles.newPrice}>
                12x R$ <span className={styles.priceHighlight}>25,10</span>
              </h3>
              <p className={styles.atVista}>Ou R$ 247,00 à vista</p>
            </div>

            <ul className={styles.benefitsList}>
              <li>✔️ Acesso imediato ao conteúdo gravado</li>
              <li>✔️ PDFs estratégicos de apoio</li>
              <li>✔️ Acesso à aula prática complementar (Parte 2 – ao vivo)</li>
              <li>✔️ Acesso exclusivo ao nosso grupo VIP</li>
            </ul>

            <div className={styles.recuperacaoInfo}>
              <p>O investimento pode ser recuperado com:</p>
              <ul>
                <li>Um novo serviço implementado</li>
                <li>Uma nova proposta de atuação estratégica</li>
                <li>
                  Reorganização do seu modelo de negócio para viver de clinicar
                </li>
              </ul>
            </div>

            <p className={styles.emotionalReturn}>
              👉 O retorno não está só no financeiro, mas na qualidade da agenda
              e da vida.
            </p>

            <button className={styles.ctaButton} onClick={handleOpenModal}>
              QUERO ACESSAR
            </button>
          </div>

          {/* SEÇÃO: GARANTIA */}
          <div className={styles.garantiaContainer}>
            <div className={styles.garantiaIcon}>🛡️</div>
            <h4>Garantia incondicional de 7 dias</h4>
            <p>
              Você pode acessar o treinamento com tranquilidade. Se dentro de 7
              dias sentir que não faz sentido para o seu momento, é só solicitar
              o reembolso. Sem burocracia.
            </p>
          </div>

          <div className={styles.divider}></div>

          {/* SEÇÃO: FECHAMENTO EMOCIONAL */}
          <div className={styles.fechamentoText}>
            <p>
              Se você sente que já chegou longe, mas percebe que do jeito que
              está não sustenta o próximo nível, essa é a hora de estruturar seu
              crescimento.
            </p>
            <p className={styles.highlightText}>
              Com posicionamento, estratégia e clareza, é possível crescer sem
              perder o que mais importa.
            </p>

            <button className={styles.ctaButtonFinal} onClick={handleOpenModal}>
              QUERO ESTRUTURAR MEU POSICIONAMENTO E CRIAR NOVAS FONTES DE RENDA
              NO MEU CONSULTÓRIO!
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && <ModalForm onClose={handleCloseModal} />}
    </section>
  );
};

export default About;
