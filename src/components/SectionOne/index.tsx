import ScrollAnimation from "react-animate-on-scroll";
import styles from "./styles.module.scss";

const SectionOne = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <ScrollAnimation animateIn="fadeIn">
            <div className={styles.leftside}>
              <img className={styles.logo} src="/newLogo.svg" />
              <h1>
                Tudo o que você precisa saber para mudar de vida e{" "}
                <span className={styles.auroraSpan}>
                  ganhar mais de 5 mil reais por semana
                </span>{" "}
                criando sites da sua casa.
              </h1>
              <h5>
                Aprenda com quem vive o que fala, a fazer da sua casa o que vai
                mudar a sua vida! Você já pode começar hoje fazendo sites de
                casa e ganhar mais de R$10mil por mês apartir dos próximos 30
                dias.
              </h5>
              <button>
                <p>QUERO MUDAR DE VIDA</p>
              </button>
              <div className={styles.discount}>
                <img src="/discountTag.svg" />
                <p>Apenas R$ 16,99.</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className={styles.rightside}>
              <div className={styles.backgroundImages}>
                <img src="/pix1.svg" alt="Background 1" />
                <img src="/pix2.svg" alt="Background 2" />
                <img src="/pix3.svg" alt="Background 3" />
                <img src="/pix4.svg" alt="Background 4" />
              </div>
              <img
                src="/herbertOnly.svg"
                alt="Herbert"
                className={styles.herbert}
              />
            </div>
          </ScrollAnimation>
        </div>
      </main>
    </>
  );
};

export default SectionOne;
