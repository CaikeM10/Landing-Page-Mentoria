import styles from "./styles.module.scss";

export default function Who() {
  // 🚀 Lógica de redirecionamento direto para o Checkout da Hubla
  const handlePurchaseRedirect = () => {
    window.location.href = "https://pay.hub.la/52qai6fJYxYKj0s17HZd";
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.images}>
            <img src="/Captura de tela 2025-10-03 191715.webp" alt="three" />
            <img src="/Captura de tela 2025-10-03 191813.webp" alt="one" />
          </div>
          <div className={styles.text}>
            <h2>
              Quem é <span>ÍRIA SABÓIA?</span>
            </h2>
            <p>
              Sou psicóloga clínica há mais de 11 anos, com consultório
              presencial e online, fundadora da Voares, empresa dedicada ao
              desenvolvimento de profissionais e empresas para gerar crescimento
              com propósito e qualidade.
            </p>
            <p>
              Ao longo da minha trajetória, vivi na prática os desafios de
              crescer na clínica e foi justamente essa experiência que me levou
              a desenvolver um método de organização estratégica para viver de
              clinicar.
            </p>
            <p>
              Desde 2024, já acompanhei dezenas de profissionais na construção
              de um modelo de carreira com posicionamento estruturado, com
              direção, consistência e crescimento sustentável.
            </p>
            <p>
              Hoje, ajudo profissionais da saúde a organizarem seu
              posicionamento para viver de clinicar com segurança, liberdade e
              qualidade.
            </p>

            {/* 💥 Botão agora redireciona diretamente */}
            <button onClick={handlePurchaseRedirect}>
              Quero diversificar meu consultório
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
