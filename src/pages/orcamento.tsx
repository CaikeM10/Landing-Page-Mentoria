import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import SwiperComponent from "@/components/Swiper";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  return (
    <section className={styles.container}>
      <Banner></Banner>
      <About></About>
      <SwiperComponent />
      <Footer></Footer>
    </section>
  );
}
