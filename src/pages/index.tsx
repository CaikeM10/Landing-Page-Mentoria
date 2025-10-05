import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import HeaderFixed from "@/components/Budget/HeaderFixed";
import Services from "@/components/Budget/Services";
import SwiperComponent from "@/components/Budget/Swiper";
import Who from "@/components/Budget/Who";
import StickFooter from "@/components/Portuguese/StickFooter";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  const pageTitle = "curso";

  return (
    <section className={styles.container}>
      <a
        href="//chat.whatsapp.com/DcpKUyQw8L6FOpVLNcReO6?mode=ems_copy_t"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whats2.svg" alt="WhatsApp" />
      </a>
      <HeaderFixed />
      <Banner></Banner>
      <About></About>
      <Who />
      <Services />
      <SwiperComponent />
      <Footer></Footer>
      <StickFooter title={pageTitle} buttonText="SAIBA MAIS AQUI" />
    </section>
  );
}
