import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import HeaderFixed from "@/components/Budget/HeaderFixed";
import SwiperComponent from "@/components/Budget/Swiper";
import Who from "@/components/Budget/Who";
import StickFooter from "@/components/Portuguese/StickFooter";
import styles from "@/styles/orcamento.module.scss";
import VideoSection from "@/videoSection";
// Importação do componente que contém o vídeo e o botão de vendas
import VideoFooter from "@/VideoFooter";

export default function Desafio() {
  const pageTitle = "curso";

  return (
    <section className={styles.container}>
      <HeaderFixed />
      <Banner />

      {/* Vídeo principal de introdução */}
      <VideoSection />

      <About />
      <SwiperComponent />
      <Who />

      {/* Seção de depoimentos/carrossel */}

      {/* O vídeo de 1 minuto e CTA de vendas posicionado aqui */}
      <VideoFooter />

      <Footer />
      <StickFooter title={pageTitle} buttonText="SAIBA MAIS AQUI" />
    </section>
  );
}
