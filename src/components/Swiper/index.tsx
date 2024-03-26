import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

const Students = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>
              Alguns <span>resultados de alunos </span>que as vezes nem
            </h2>
            <h2> finalizaram o curso</h2>
          </div>
          <div className={styles.swiper}>
            <Swiper
              modules={[Navigation, EffectCoverflow, Autoplay]}
              effect={"coverflow"}
              slidesPerView={3}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              loop={true}
              centeredSlides={true}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student1.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student2.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student3.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student4.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student1.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student2.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student3.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student4.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student1.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student2.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student3.svg" />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img src="/student4.svg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.button}>
            <button>
              <p>GARANTIR MINHA VAGA</p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Students;
