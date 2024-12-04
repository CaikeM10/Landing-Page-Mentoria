import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import styles from "./styles.module.scss";

export default function SwiperComponent() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>
            o que nossos <span>clientes</span> dizem
          </h2>
          <p>
            Nossos clientes são a nossa maior fonte de motivação. Veja o que
            eles têm a dizer sobre as soluções digitais que criamos para seus
            negócios. Cada projeto é único, e a satisfação dos nossos clientes é
            o nosso maior objetivo.
          </p>
        </div>
        <div className={styles.swiperContainer}>
          <div className={styles.gradientLeft}></div>

          <Swiper
            slidesPerView={1.5} // Mostra 1.5 slides ao mesmo tempo
            spaceBetween={20} // Espaçamento entre os slides
            centeredSlides={true} // Centraliza o slide ativo
            initialSlide={1} // Começa no slide do meio
            onSlideChange={handleSlideChange}
            className={styles.customSwiper}
          >
            <SwiperSlide>
              <img src="/testimony1.jpg" alt="Client Feedback 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/testimony2.jpg" alt="Client Feedback 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/testimony3.jpg" alt="Client Feedback 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/testimony4.jpg" alt="Client Feedback 3" />
            </SwiperSlide>
          </Swiper>
          <div className={styles.gradientRight}></div>

          <div className={styles.pagination}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`${styles.paginationBullet} ${
                  index === activeIndex ? styles.paginationBulletActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
