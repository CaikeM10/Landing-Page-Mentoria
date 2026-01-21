import { useState } from "react";
import styles from "./styles.module.scss";

const About = () => {
  // 🚀 Lógica de Redirecionamento Direto para o Checkout da Hubla
  const handleRedirectToCheckout = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
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
                • Você já vive de clinicar e sente que estagnou no modelo atual.
                <br />
                <br />
                • Tem agenda cheia, mas percebe que tempo virou um recurso
                escasso.
                <br />
                <br />• Ou tem a agenda instável e não sabe como captar
                pacientes.
              </h5>
            </div>

            <div className={styles.card}>
              <div className={styles.emoji}>⏰</div>
              <h5>
                • Para você que quer fortalecer seu posicionamento profissional,
                implementar novos serviços e aumentar seu faturamento no
                consultório.
              </h5>
            </div>
          </div>

          {/* 🚀 BOTÃO CTA ABAIXO DOS CARDS */}
          <div className={styles.ctaWrapperCards}>
            <button
              className={styles.ctaButtonGold}
              onClick={handleRedirectToCheckout}
            >
              QUERO FAZER O TREINAMENTO
            </button>
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

          {/* 🚀 DOBRA 04: QUEM VAI DIRECIONAR VOCÊ (ADICIONADO) */}
          <div className={styles.titleBlock}>
            <h3 className={styles.introTextWho}>
              Quem vai direcionar você nesse treinamento:
            </h3>
          </div>

          <div className={styles.whoSectionLayout}>
            <div className={styles.whoImages}>
              <img
                src="/Captura de tela 2025-10-03 191715.webp"
                alt="Íria Sabóia Principal"
                className={styles.imgMain}
                loading="lazy"
              />
              <img
                src="/Captura de tela 2025-10-03 191813.webp"
                alt="Íria Sabóia Detalhe"
                className={styles.imgOverlap}
                loading="lazy"
              />
            </div>
            <div className={styles.whoBioText}>
              <h2>
                Quem é <span>ÍRIA SABÓIA?</span>
              </h2>
              <p>
                Sou Íria Sabóia, psicóloga clínica há 11 anos, e mentora de
                carreira de profissionais liberais e empresas. Durante anos,
                vivi a sobrecarga que muitos profissionais da saúde conhecem
                bem, uma rotina exaustiva entre o serviço público e a clínica.
              </p>
              <p>
                Foi nesse momento de desequilíbrio que tomei uma decision que
                mudaria completamente o rumo da minha trajetória: empreender com
                propósito na prática clínica no presencial e no digital. Nasceu
                assim a Voares, um movimento que une ciência, autoconhecimento e
                estratégia para ajudar profissionais a construírem uma carreira
                sustentável, com liberdade e sentido.
              </p>
              <p>
                Em outubro de 2024, abrimos a primeira turma da Mentoria Voares,
                e desde então vivemos um ano de crescimento, conquistas e
                transformações reais na carreira de dezenas de profissionais.
              </p>
              <button
                className={styles.ctaButtonGoldSmall}
                onClick={handleRedirectToCheckout}
              >
                QUERO DIVERSIFICAR MEU CONSULTÓRIO
              </button>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* 🚀 SEÇÃO: EXPERIÊNCIA TCS (INVERTIDO - AGORA PRIMEIRO) */}
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
                  src="/foto1iria.webp"
                  alt="Experiência"
                  className={styles.mainPhoto}
                  loading="lazy"
                />
                <img
                  src="/foto2iria.webp"
                  alt="Detalhe"
                  className={styles.overlapPhoto}
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.cardExperiencia}>
              <ul>
                <li>Boas vindas</li>
                <li>
                  <strong>Módulo 01:</strong> Diagnóstico do seu modelo de
                  negócio.
                </li>
                <li>
                  <strong>Módulo 02:</strong> Estruturação de Posicionamento.
                </li>
                <li>
                  <strong>Módulo 03:</strong> 10 Modelos de diversificações de
                  serviços.
                </li>
                <li>
                  <strong>Fechamento</strong> sobre Empreendedorismo.
                </li>
                <li className={styles.conviteEspecial}>
                  Convite especial para quem assistir até o final.
                </li>
              </ul>
            </div>
          </div>

          {/* 🚀 DOBRA 05: DEPOIMENTOS (ADICIONADO ABAIXO DA EXPERIÊNCIA) */}
          <div className={styles.titleBlock} style={{ marginTop: "50px" }}>
            <h2>
              Veja o depoimento de quem acessou o{" "}
              <span>Treinamento Consultório Sustentável</span>
            </h2>
          </div>

          <div className={styles.depoimentoContainer}>
            <img
              src="/ALUNATCS.jpeg"
              alt="Depoimento Aluno"
              className={styles.feedbackImage}
              loading="lazy"
            />
            <div className={styles.ctaWrapperCards}>
              <button
                className={styles.ctaButtonGold}
                onClick={handleRedirectToCheckout}
              >
                QUERO FAZER O TREINAMENTO
              </button>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* 🚀 SEÇÃO: O QUE VOCÊ VAI APRENDER (INVERTIDO - AGORA DEPOIS) */}
          <div className={styles.titleBlock}>
            <h2>
              Veja tudo que você vai receber no{" "}
              <span>Treinamento Consultório Sustentável: </span>
            </h2>
          </div>

          <div className={styles.containerAprendizado}>
            <div className={styles.cardAprendizado}>
              <ul>
                <li>
                  Aulas práticas para gerar clareza e direcionar seu novo modelo
                  de negócio para viver de clinicar com organização, mais
                  faturamento e tempo de qualidade
                </li>
                <li>
                  Material de apoio para estruturar com segurança seu novo plano
                  de diversificação de serviços.
                </li>
                <li>
                  E aulão com Íria Sabóia, online e ao vivo, para tirar todas
                  suas dúvidas sobre a implementação.
                </li>
              </ul>
            </div>
          </div>

          {/* 🚀 BOTÃO CTA ABAIXO DO APRENDIZADO */}
          <div className={styles.ctaWrapperAprendizado}>
            <button
              className={styles.ctaButtonGold}
              onClick={handleRedirectToCheckout}
            >
              GARANTA O SEU ACESSO
            </button>
          </div>

          <div className={styles.divider}></div>

          {/* SEÇÃO: INVESTIMENTO */}
          <div className={styles.titleBlock}>
            <h2>Investimento</h2>
          </div>

          <div className={styles.investmentCard}>
            <div className={styles.priceContainer}>
              <span className={styles.oldPrice}>De: R$ 747,00</span>
              <p className={styles.installmentCall}>Por apenas:</p>
              <h3 className={styles.newPrice}>
                12x R$ <span className={styles.priceHighlight}>8,84</span>
              </h3>
              <p className={styles.atVista}>Ou R$ 87,00 à vista</p>
            </div>
            <ul className={styles.benefitsList}>
              <li>✔️ Acesso imediato ao conteúdo</li>
              <li>✔️ PDFs estratégicos de apoio</li>
              <li>✔️ Acesso à aula prática</li>
              <li>✔️ Grupo VIP exclusivo</li>
            </ul>

            <div className={styles.recuperacaoInfo}>
              <p>O investimento pode ser recuperado com:</p>
              <ul>
                <li>Um novo serviço implementado</li>
                <li>Uma nova proposta de atuação</li>
                <li>Reorganização do seu modelo de negócio</li>
              </ul>
            </div>

            <p className={styles.emotionalReturn}>
              👉 O retorno está na qualidade da agenda e da vida.
            </p>

            <button
              className={styles.ctaButton}
              onClick={handleRedirectToCheckout}
            >
              QUERO ACESSAR
            </button>
          </div>

          {/* GARANTIA */}
          <div className={styles.garantiaContainer}>
            <div className={styles.garantiaIcon}>🛡️</div>
            <h4>Garantia incondicional de 7 dias</h4>
            <p>
              Se em 7 dias não fizer sentido, solicitamos o reembolso sem
              burocracia.
            </p>
          </div>

          <div className={styles.divider}></div>

          {/* FECHAMENTO */}
          <div className={styles.fechamentoText}>
            <p>
              Se você percebe que o modelo atual não sustenta o próximo nível,
              essa é a hora.
            </p>
            <p className={styles.highlightText}>
              Cresça sem perder o que mais importa.
            </p>

            <button
              className={styles.ctaButtonFinal}
              onClick={handleRedirectToCheckout}
            >
              Quero estruturar meu consultório
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
