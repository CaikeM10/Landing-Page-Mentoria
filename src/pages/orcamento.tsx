import Banner from "@/components/Orcamento/Banner";
import Footer from "@/components/Orcamento/Footer";
import SwiperComponent from "@/components/Swiper";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  return (
    <section className={styles.container}>
      <Banner></Banner>
      <SwiperComponent />
      <Footer></Footer>
    </section>
  );
}
