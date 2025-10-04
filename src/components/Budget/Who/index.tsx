import { useState } from "react";
import ModalForm from "../Modal";
import styles from "./styles.module.scss";

export default function Who() {
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
          <div className={styles.images}>
            <img src="/Captura de tela 2025-10-03 191715.png" alt="three" />
            <img src="/Captura de tela 2025-10-03 191813.png" alt="one" />
          </div>
          <div className={styles.text}>
            <h3>sobre</h3>
            <h2>
              quem é <span>ÍRIA SABÓIA?</span>
            </h2>
            <p>
              Psicóloga clínica há mais de 10 anos, dediquei minha carreira à
              prática clínica e hoje vivo de clinicar com qualidade, liberdade e
              equilíbrio entre minha vida pessoal e profissional. Assim como
              você, comecei minha trajetória em um vínculo CLT, mas percebi
              rapidamente que, para alcançar crescimento contínuo e exercer meu
              trabalho com excelência, precisaria me dedicar integralmente à
              prática clínica.
            </p>
            <p>
              Sempre acreditei que a formação profissional é o principal
              investimento para o sucesso. Por isso, desde o início da minha
              carreira, priorizei os estudos e sigo buscando o máximo em
              formação continuada para manter minha jornada em constante
              transformação.
            </p>
            <p>
              Depois de seis anos presa a múltiplos vínculos CLT, trabalhando
              mais de 40 horas por semana, tomei a decisão corajosa de criar meu
              Plano Viver de Clinicar. Em menos de seis meses, ao me dedicar
              exclusivamente à prática clínica, alcancei mais resultados do que
              em todos os anos anteriores. Meu próximo passo foi transformar meu
              consultório em uma empresa. Assim nasceu a Voares, que não é
              apenas um CNPJ, mas o símbolo de uma nova mentalidade e propósito.
            </p>

            <button onClick={handleModalOpen}>
              QUERO GARANTIR MINHA VAGA!
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
}
