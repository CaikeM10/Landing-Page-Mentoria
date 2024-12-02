import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import Services from "@/components/Budget/Services";
import SwiperComponent from "@/components/Budget/Swiper";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  return (
    <section className={styles.container}>
      <Banner></Banner>
      <About></About>
      <Services />
      <SwiperComponent />
      <Footer></Footer>
    </section>
  );
}
