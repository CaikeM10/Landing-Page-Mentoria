import { useState } from "react";
import styles from "./styles.module.scss";

const About = () => {
  const handleRedirectToCheckout = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <section className={`sectionWhite ${styles.container}`}>
      {/* ===================== BLOCO 1 – FUNDO CLARO ===================== */}
      <div className={styles.aboutLight}>
        <div className={styles.section}>
          <div className={styles.sectionLine}></div>
          <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
              <h2>
                E se eu te dizer o que <span> realmente está acontecendo?</span>
              </h2>
              <p className={styles.subTitle}>
                Você atende. Tem pacientes. Tem responsabilidade. Investe em
                formação. É uma profissional ética e competente. Tem entrega com
                qualidade. Você cresceu.
              </p>
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Mas percebe que:</h4>
                <h5 className={styles.cardText}>
                  • Vive sobrecarregada.
                  <br />• Aceita demandas fora do seu foco.
                  <br />• Cresce, mas sem organização estratégica.
                  <br />• Trabalha muito para sustentar o ritmo.
                  <br />• Não tem estrutura clara para expandir.
                </h5>
              </div>

              <div className={styles.card}>
                <h5 className={styles.cardText}>
                  <span className={styles.cardMiniTitle}>
                    Sua clínica está ativa. <br></br>Está crescendo.<br></br>{" "}
                    Mas você está sobrecarregada.
                  </span>
                  <br />
                  <strong>E isso não é falta de capacidade.</strong>
                  <br />É porque sua base ainda não está estruturada para
                  sustentar esse crescimento com qualidade.
                </h5>
              </div>

              <div className={styles.card}>
                <h5 className={styles.cardText}>
                  <span className={styles.cardHighlight}>
                    E crescer sem estrutura cobra um preço:
                  </span>
                  <br />• Não é imediato. É silencioso.
                  <br />• Custa sua energia.
                  <br />• Cobra sua clareza.
                  <br />• Muitas vezes você se sente sem direção.
                  <br />• E acaba perdendo sua qualidade de vida.
                </h5>
              </div>
            </div>

            <div className={styles.ctaWrapperCards}>
              <button
                className={styles.ctaButtonGold}
                onClick={handleRedirectToCheckout}
              >
                Quero mudar essa condição agora!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BLOCO 2 – FUNDO MARROM ===================== */}
      <div className={styles.aboutDark}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
              <h2>
                O que você vai fazer no <span>Consultório Sustentável</span>
              </h2>
              <p className={styles.subTitle}>
                Em 3 horas práticas, você vai organizar a base estratégica da
                sua clínica para crescer com qualidade
                <br />
                <strong> sem depender apenas de esforço excessivo.</strong>
              </p>
            </div>

            <div className={styles.containerSingleCard}>
              <div className={styles.cardBege}>
                <h3 className={styles.cardBegeTitle}>Você vai estruturar:</h3>
                <ul className={styles.cardBegeList}>
                  <li>
                    <span className={styles.itemTitle}>
                      Seu posicionamento profissional
                    </span>
                    <span className={styles.itemDescription}>
                      Definir com clareza como quer ser reconhecida.
                    </span>
                  </li>
                  <li>
                    <span className={styles.itemTitle}>Seu público ideal</span>
                    <span className={styles.itemDescription}>
                      Organizar sua agenda com intenção.
                    </span>
                  </li>
                  <li>
                    <span className={styles.itemTitle}>
                      Seus serviços de expansão
                    </span>
                    <span className={styles.itemDescription}>
                      Alinhar oferta e precificação.
                    </span>
                  </li>
                  <li>
                    <span className={styles.itemTitle}>
                      Sua direção estratégica
                    </span>
                    <span className={styles.itemDescription}>
                      Crescer com clareza, não no impulso.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.ctaWrapperCards}>
              <button
                className={styles.ctaButtonGold}
                onClick={handleRedirectToCheckout}
              >
                Quero estruturar minha clínica
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BLOCO 3 – FUNDO CLARO ===================== */}
      <div className={styles.aboutLight}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.paraQuemWrapper}>
              <div className={styles.card}>
                <h3 className={styles.paraQuemTitle}>Para quem é</h3>

                <ul className={styles.paraQuemList}>
                  <li>Profissionais da saúde que já atendem</li>
                  <li>Estão com agenda ativa</li>
                  <li>Sentem sobrecarga ou crescimento desorganizado</li>
                  <li>Querem crescer com qualidade e não apenas volume</li>
                  <li>Desejam estruturar autoridade e sustentabilidade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BLOCO 4 – EXPERIÊNCIA TCS ===================== */}
      <div className={styles.aboutDark}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
              <h2>
                veja como será o <br></br>
                <span>Treinamento Consultório Sustentável</span>
              </h2>
            </div>

            <div className={styles.experienceLayout}>
              {/* IMAGENS */}
              <div className={styles.experienceImages}>
                <img
                  src="/foto1iria.webp"
                  alt="Experiência TCS"
                  className={styles.imageMain}
                />
                <img
                  src="/foto2iria.webp"
                  alt="Aula prática"
                  className={styles.imageOverlay}
                />
              </div>

              {/* CARD */}
              <div className={styles.experienceCard}>
                <ul>
                  <li>Boas-vindas</li>
                  <li> 3 horas de aulas práticas</li>
                  <li>Exercícios estruturados</li>
                  <li>Material de apoio em PDF</li>
                  <li>1 ano de acesso</li>
                  <li className={styles.bonus}>
                    🎁 Bônus: Desafio 10 dias de aplicação estratégica (por
                    tempo limitado)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BLOCO 4 – INVESTIMENTO ===================== */}
      <div className={styles.aboutLight}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
              <h2>
                E qual é o <span>investimento</span> para viver essa
                transformação?
              </h2>
            </div>

            <div className={styles.investmentCardPremium}>
              <p className={styles.investmentIntro}>
                Se você fosse contratar uma consultoria individual para
                estruturar posicionamento, público e crescimento estratégico, o
                investimento seria facilmente acima de{" "}
                <strong>R$ 1.000,00</strong>.
              </p>

              <p className={styles.investmentIntro}>
                Mas aqui você tem acesso ao método completo do
                <strong> Consultório Sustentável</strong>.
              </p>

              <ul className={styles.investmentBenefits}>
                <li>
                  ✔ 3 horas de implementação estratégica em aulas práticas
                </li>
                <li>✔ Material de apoio em PDF</li>
                <li>✔ Desafio de aplicação</li>
                <li>✔ 1 ano de acesso</li>
              </ul>

              <div className={styles.priceBox}>
                <span className={styles.oldPrice}>De R$ 197,00</span>

                <div className={styles.mainPrice}>
                  <span className={styles.installments}>12x</span>
                  <span className={styles.priceValue}>R$ 9,86</span>
                </div>

                <p className={styles.cashPrice}>ou R$ 97,00 à vista</p>
              </div>

              <p className={styles.investmentNote}>
                Bem menos que o valor de um atendimento.
                <br />
                <strong>
                  Mas com impacto direto na forma como você organiza todos os
                  seus próximos voos de crescimento.
                </strong>
              </p>

              <button
                className={styles.ctaInvestment}
                onClick={handleRedirectToCheckout}
              >
                Quero minha transformação agora!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BLOCO – GARANTIA ===================== */}
      <div className={styles.aboutLight}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.garantiaContainer}>
              <img
                src="/7dias.png"
                alt="Garantia incondicional de 7 dias"
                className={styles.garantiaImage}
              />

              <h3>E se eu me arrepender depois?</h3>

              <p>
                Você tem <strong>7 dias</strong> para assistir e aplicar.
                <br />
                Se não fizer sentido para você, pode solicitar reembolso.
              </p>

              <span className={styles.garantiaHighlight}>
                Sem risco. Sem burocracia.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
