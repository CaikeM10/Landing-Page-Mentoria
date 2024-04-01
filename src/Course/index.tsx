import styles from "./styles.module.scss";

const Course = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.logoSection}>
          <img src="/logoRei.png" />
        </div>
        <div className={styles.bodySection}>
          <div className={styles.cardBlock}>
            <img src="/arrow.svg" />
            <h2>Formação Webp</h2>
            <p>
              Nesse curso você vai aprender tudo que você precisa para sair do
              zero, e aprender programação.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
