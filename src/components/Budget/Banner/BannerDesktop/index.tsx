import { useState } from "react";
import ModalForm from "../../Modal";
import styles from "./styles.module.scss";

// Placeholder para os Ícones (Necessário para o código compilar)
const IconCalendar = ({ className }: { className: string }) => (
  <i className={className}>🗓️</i>
);
const IconPlay = ({ className }: { className: string }) => (
  <i className={className}>▶️</i>
);

const BannerDesktop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.flexTitle}>
            <div className={styles.titleBanner}>
              <div className={styles.gridBackground}>
                <button className={styles.orcamento}>
                  • Veja mais abaixo! •
                </button>
                <h1>
                  {/* LINHA 1: Consultório Sustentável! (com o "Seu" colado no final) */}
                  <span className={styles.destaque}>
                    Consultório Sustentável,
                  </span>
                  {/* 💥 O PONTO CHAVE: O texto "Seu" está AQUI, fora de um span, colado. */}
                  <br /> novo modelo de negócio
                  <br /> {/* ⬅️ QUEBRA DE LINHA CRÍTICA AQUI */}
                  para viver de clinicar.
                </h1>

                {/* ... (O restante do conteúdo) ... */}
                <img src="/line.svg" alt="Linha decorativa ciano" />
                <p className={styles.description}>
                  Um novo plano de voo para equilibrar sua agenda, aumentar a
                  lucratividade do consultório e fortalecer sua autoridade na
                  profissão, sem abrir mão do que mais importa: o seu tempo de
                  qualidade.
                </p>

                {/* BLOCO DE INFORMAÇÕES DO EVENTO */}
                <div className={styles.eventInfo}>
                  <div className={styles.eventDetail}>
                    <IconCalendar className={styles.icon} />
                    <span>Dia 20 de Outubro, às 20h.</span>
                  </div>
                  <div className={styles.eventDetail}>
                    <IconPlay className={styles.icon} />
                    <span>
                      Aulão inédito – ao vivo & gratuito apenas para inscritos.
                    </span>
                  </div>
                </div>

                <button className={styles.button} onClick={handleModalOpen}>
                  QUERO GARANTIR MINHA VAGA!
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            {/* caminho da imagem */}
            <img
              src="/imgBannersemfundo.png"
              alt="Palestrante sorrindo ao lado de um notebook Apple"
            />
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default BannerDesktop;
