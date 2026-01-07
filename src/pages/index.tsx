import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import HeaderFixed from "@/components/Budget/HeaderFixed";
import SwiperComponent from "@/components/Budget/Swiper";
import Who from "@/components/Budget/Who";
import StickFooter from "@/components/Portuguese/StickFooter";
import styles from "@/styles/orcamento.module.scss";
import VideoSection from "@/videoSection";
// 🚀 Importação do componente que contém o vídeo e o botão de vendas
import VideoFooter from "@/VideoFooter";

export default function Desafio() {
  const pageTitle = "curso";

  return (
    <section className={styles.container}>
      {/* 🟢 Botão flutuante do WhatsApp com o balão solicitado */}
      <a
        href="https://chat.whatsapp.com/FyXUnWPrZ5g3nif7Wx7DL1"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Balão de fala posicionado acima do ícone */}
        <span className={styles.tooltip}>
          Após concluir a inscrição clique aqui <br></br> e entre no grupo vip!
        </span>
        <img src="/whats2.svg" alt="WhatsApp" />
      </a>

      <HeaderFixed />
      <Banner />

      {/* Vídeo principal de introdução */}
      <VideoSection />

      <About />
      <Who />

      {/* Seção de depoimentos/carrossel */}
      <SwiperComponent />

      {/* 🚀 O vídeo de 1 minuto e CTA de vendas posicionado aqui */}
      <VideoFooter />

      <Footer />
      <StickFooter title={pageTitle} buttonText="SAIBA MAIS AQUI" />
    </section>
  );
}
