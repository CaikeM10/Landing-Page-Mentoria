import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import SwiperComponent from "@/components/Budget/Swiper";
import Who from "@/components/Budget/Who";
import FAQ from "@/components/Budget/FAQ/faq";
import Support from "@/components/Budget/Support/support";
import StickFooter from "@/components/Portuguese/StickFooter";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  const pageTitle = "curso";

  return (
    <section className={styles.container}>
      {/* HERO / TOPO */}
      <section className={styles.sectionBrown}>
        <Banner />
      </section>

      {/* ABOUT – FUNDO BRANCO */}
      <section className={styles.sectionWhite}>
        <About />
      </section>

      {/* WHO – FUNDO MARROM */}
      <section className={styles.sectionBrown}>
        <Who />
      </section>

      {/* DEPOIMENTOS / SWIPER – FUNDO BRANCO */}
      <section className={styles.sectionWhite}>
        <SwiperComponent />
      </section>

      {/* FAQ + SUPORTE – FUNDO MARROM */}
      <section className={styles.sectionBrown}>
        <FAQ />
        <Support />
      </section>

      {/* FOOTER – FUNDO MARROM */}
      <section className={styles.sectionBrown}>
        <Footer />
      </section>

      {/* STICKY FOOTER (FIXO) */}
      <StickFooter title={pageTitle} buttonText="Garantir o Treinamento" />
    </section>
  );
}
