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
            <img src="/Captura de tela 2025-10-03 191715.WebP" alt="three" />
            <img src="/Captura de tela 2025-10-03 191813.WebP" alt="one" />
          </div>
          <div className={styles.text}>
            <h2>
              Quem é <span>ÍRIA SABÓIA?</span>
            </h2>
            <p>
              Sou Íria Sabóia, psicóloga clínica há 11 anos, e mentora de
              carreira de profissionais liberais e empresas. Durante anos, vivi
              a sobrecarga que muitos profissionais da saúde conhecem bem, uma
              rotina exaustiva entre o serviço público e a clínica.
            </p>
            <p>
              Foi nesse momento de desequilíbrio que tomei uma decisão que
              mudaria completamente o rumo da minha trajetória: empreender com
              propósito na prática clínica no presencial e no digital. Nasceu
              assim a Voares, um movimento que une ciência, autoconhecimento e
              estratégia para ajudar profissionais a construírem uma carreira
              sustentável, com liberdade e sentido.
            </p>
            <p>
              Em outubro de 2024, abrimos a primeira turma da Mentoria Voares, e
              desde então vivemos um ano de crescimento, conquistas e
              transformações reais na carreira de dezenas de profissionais.
              Hoje, seguimos fortalecendo o nosso propósito para ajudar
              profissionais a viverem suas realizações profissionais com
              propósito, estabilidade e qualidade de vida.
            </p>
            <p>
              Porque crescer não é sobre fazer mais, e sim sobre voar na direção
              certa.
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
