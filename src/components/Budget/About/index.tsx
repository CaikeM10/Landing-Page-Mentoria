import { useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/css/navigation";
import "swiper/css";

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
                qualidade. Você cresceu na prática clínica mas ...
              </p>
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}> Percebe que:</h4>

                <ul className={styles.problemList}>
                  <li>Vive sobrecarregada.</li>
                  <li>Aceita demandas fora do seu foco.</li>
                  <li>
                    Ainda não consegue comunicar no digital a qualidade do seu
                    trabalho.
                  </li>
                  <li>Trabalha muito para sustentar o ritmo.</li>
                  <li>Não tem estrutura clara para expandir.</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h5 className={styles.cardText}>
                  <span className={styles.cardHighlight}>
                    E crescer sem estrutura cobra um preço alto:
                  </span>
                  <br />• Custa sua energia.
                  <br />• Cobra sua clareza.
                  <br />• Muitas vezes você se sente sem direção.
                  <br />• Custa o seu crescimento profissional com qualidade.
                  <br />• E acaba comprometendo sua qualidade de vida.
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
                Com o treinamento <span>Consultório Sustentável</span>, você
                será capaz de:
              </h2>
              <p className={styles.subTitle}>
                Organizar sua base estratégica de posicionamento para clinicar e
                crescer com qualidade.
              </p>
            </div>

            <div className={styles.containerSingleCard}>
              <div className={styles.cardBege}>
                <h3 className={styles.cardBegeTitle}>
                  Em apenas 3 horas de aulas práticas, você vai estruturar:{" "}
                </h3>
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
                      Alinhar serviços de diversificação.
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
                Veja Como Será o <br></br>
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
      {/* ===================== CARROSSEL – TRANSFORMAÇÃO ===================== */}
      <div className={styles.experienceCarousel}>
        <p className={styles.carouselTitle}>
          Veja como será a sua transformação no{" "}
          <span className={styles.carouselHighlight}>
            Consultório Sustentável
          </span>
        </p>

        <Swiper
          modules={[Autoplay, Navigation]} // 🔥 OBRIGATÓRIO
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 7000, // 7 segundos (lento e elegante)
            disableOnInteraction: false,
          }}
          navigation
        >
          <SwiperSlide>
            <img src="/carrosel1.webp" alt="Aula prática" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/carrosel2.webp" alt="Estrutura estratégica" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/carrosel3.webp" alt="Aplicação real" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/carrosel4.webp" alt="Transformação profissional" />
          </SwiperSlide>
        </Swiper>
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
                <li>3 horas de implementação estratégica em aulas práticas</li>
                <li>Material de apoio em PDF</li>
                <li> Desafio de aplicação</li>
                <li> 1 ano de acesso</li>
              </ul>

              <div className={styles.priceBox}>
                <p className={styles.priceCta}>Aproveite por apenas:</p>

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
                Aproveitar a oportunidade agora!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BLOCO – GARANTIA ===================== */}
      {/* ===================== BLOCO – GARANTIA ===================== */}
      <div className={styles.aboutLight}>
        <div className={styles.section}>
          {/* ⬇️ wrapper removido para reduzir espaçamento excessivo no desktop */}
          <div className={styles.garantiaContainer}>
            <img
              src="/7dias.webp"
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
    </section>
  );
};

export default About;
