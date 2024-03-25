import styles from "./style.module.scss";

const SectionTwo = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2>
              A diferença absurda entre o que você está <span>prestes a</span>
            </h2>
            <h2>
              <span>adiquirir com o Rei</span> e do que está fugindo ...
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.leftbox}>
              <div className={styles.title}>
                <h5>Curso meio boca</h5>
              </div>
              <div className={styles.cons}>
                <img src="" />
                <p>Faturamento incerto</p>
              </div>
              <div className={styles.cons}>
                <img src="" />
                <p>Professor que não vive o que ensina</p>
              </div>
              <div className={styles.cons}>
                <img src="" />
                <p>Falta de organização</p>
              </div>
              <div className={styles.cons}>
                <img src="" />
                <p>Curso básico</p>
              </div>
              <div className={styles.cons}>
                <img src="" />
                <p>Não ensina sobre o mercado real</p>
              </div>
              <div className={styles.cons}>
                <img src="" />
                <p>Sem suporte</p>
              </div>
            </div>
            <div className={styles.rightbox}>
              <div className={styles.title}>
                <h5>
                  Curso do <span>REI</span>
                </h5>
              </div>
              <div className={styles.pros}>
                <img src="" />
                <p>Faturamento alto</p>
              </div>
              <div className={styles.pros}>
                <img src="" />
                <p>Professor vive o que ensina</p>
              </div>
              <div className={styles.pros}>
                <img src="" />
                <p>Curso ponta a ponta</p>
              </div>
              <div className={styles.pros}>
                <img src="" />
                <p>Bônus sobre mercado de trabalho</p>
              </div>
              <div className={styles.pros}>
                <img src="" />
                <p>Suporte exclusivo do rei</p>
              </div>
              <div className={styles.logo}>
                <img src="/logo.svg" />
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button>
              <p>QUERO APRENDER COM O REI</p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionTwo;
