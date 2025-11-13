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
    // ⭐️ AJUSTE CRÍTICO: DATA ALVO MUDADA PARA 27 DE OUTUBRO DE 2025 (20h)
    // new Date(ano, mês_zero_base, dia, hora, minuto, segundo)
    const targetDate = new Date(2025, 9, 27, 20, 0, 0);

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
        {/* BLOCO ANINHADO: Usa justify-content: space-between no CSS */}
        <div className={styles.centerGroup}>
          {/* 💥 AJUSTE CRÍTICO: Textos em <p> e <span> separados para forçar a quebra no CSS */}
          <div className={styles.title}>
            <p></p>
            <span></span>
          </div>

          <div className={styles.countDown}>
            <>
              <p></p>
            </>
            <span></span>
            <>
              <p></p>
            </>
            <span></span>
            <>
              <p></p>
            </>
            <span></span>
            <>
              <p> </p>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderFixed;
