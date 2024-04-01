import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss';

const Students = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );

    useEffect(() => {
        let lastKnownScrollPosition = 0;
        let ticking = false;

        const handleScroll = () => {
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (swiperInstance) {
                        const windowHeight = window.innerHeight;
                        const totalScrollHeight =
                            document.body.offsetHeight - windowHeight;
                        const deviceWidth = window.innerWidth;
                        const scrollSensitivity = deviceWidth <= 738 ? 3 : 2;
                        const scrollFraction =
                            (lastKnownScrollPosition / totalScrollHeight) *
                            scrollSensitivity;
                        const maxSlideIndex = swiperInstance.slides.length - 1;
                        const targetSlideIndex = Math.min(
                            Math.round(maxSlideIndex * scrollFraction),
                            maxSlideIndex
                        );

                        swiperInstance.slideTo(targetSlideIndex, 1000);
                    }
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [swiperInstance]);

    return (
        <>
            <main className={styles.container}>
                <div className={styles.content}>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className={styles.title}>
                            <h2>
                                Alguns <span>resultados de alunos </span>que as
                                vezes nem finalizaram o curso
                            </h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className={styles.swiper}>
                            <Swiper
                                modules={[
                                    Navigation,
                                    EffectCoverflow,
                                    Autoplay,
                                ]}
                                onSwiper={setSwiperInstance}
                                effect={'coverflow'}
                                slidesPerView={3}
                                speed={1000}
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
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className={styles.button}>
                            <button>
                                <p>GARANTIR MINHA VAGA</p>
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
        </>
    );
};

export default Students;
