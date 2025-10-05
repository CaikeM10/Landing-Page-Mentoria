import { useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export default function SwiperDesktop() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>
            o que nossas <span>alunas</span> dizem
          </h2>
          <p>
            Conheça a experiência de quem já esteve comigo em treinamentos e
            mentorias:
          </p>
        </div>
        <div className={styles.swiperContainer}>
          <div className={styles.gradientLeft}></div>

          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            // loop={true}
            onSlideChange={handleSlideChange}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            autoplay={{
              delay: 3000, // Tempo entre os slides em milissegundos
              disableOnInteraction: false, // Continua autoplay mesmo após interação
            }}
            modules={[Autoplay]}
            className={styles.customSwiper}
          >
            <SwiperSlide>
              <img src="/aluno1.jpg" alt="Aluno Feedback 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/aluno2.jpg" alt="Aluno Feedback 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/aluno3.jpg" alt="Aluno Feedback 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/aluno4.jpg" alt="Aluno Feedback 4" />
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
