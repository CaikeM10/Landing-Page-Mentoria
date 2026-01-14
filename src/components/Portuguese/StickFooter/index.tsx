import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface StickFooterProps {
  title: string;
  buttonText: string;
}

const StickFooter = ({ title, buttonText }: StickFooterProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Lógica de visibilidade mantida: surge após 400px e some no rodapé
      if (scrollTop > 400 && scrollTop + windowHeight < fullHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 🚀 Lógica de redirecionamento direto para a Hubla (Substituindo Kiwify e Modal)
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <div
      className={styles.container}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
    >
      <div className={styles.content}>
        <div className={styles.button}>
          {/* 💥 Botão agora chama o redirecionamento direto */}
          <button onClick={handlePurchaseRedirect} id="iniciar-checkout">
            <p>
              {buttonText} <img src="buttonArrow.svg" alt="Seta" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickFooter;
