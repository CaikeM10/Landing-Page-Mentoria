import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const HeaderFixed = () => {
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Efeito para mudar o estilo quando o usuário rolar a página
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para a contagem regressiva
  useEffect(() => {
    // ⭐️ DATA ALVO: 20 de Outubro de 2025, 20:00:00 (20h)
    const targetDate = new Date(2025, 9, 20, 20, 0, 0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.content}>
        {/* 💥 CORREÇÃO 1: LOGO DA ÍRIA SABÓIA (Colocado na primeira coluna) */}

        {/* CORREÇÃO 2: Bloco Central para o Horário/Contador */}
        <div className={styles.centerGroup}>
          <div className={styles.title}>
            <p>O EVENTO </p>
            <span>COMEÇA EM :</span>
          </div>
          <div className={styles.countDown}>
            <div className={styles.block}>
              <p>{timeLeft.days} DIAS</p>
            </div>
            <span>:</span>
            <div className={styles.block1}>
              <p>{timeLeft.hours}H</p>
            </div>
            <span>:</span>
            <div className={styles.block2}>
              <p>{timeLeft.minutes} MIN</p>
            </div>
            <span>:</span>
            <div className={styles.block3}>
              <p>{timeLeft.seconds} SEG</p>
            </div>
          </div>
        </div>

        {/* CORREÇÃO 3: Elemento de preenchimento (Spacer) na última coluna */}
        <div className={styles.spacer}></div>
      </div>
    </section>
  );
};

export default HeaderFixed;
