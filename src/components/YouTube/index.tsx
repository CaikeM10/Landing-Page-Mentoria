import styles from "./styles.module.scss";

const Youtube = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src="/youtube.svg" />
          </div>
          <div className={styles.text}>
            <h2>Perfil no Youtube</h2>
            <h5>Vídeos e lives gratuitas</h5>
          </div>
        </div>
      </section>
    </>
  );
};
export default Youtube;
