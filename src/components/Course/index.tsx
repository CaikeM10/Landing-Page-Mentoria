import styles from "./styles.module.scss";

const Course = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src="/arrow.svg" />
          </div>
          <div className={styles.text}>
            <h2>Do zero aos sites</h2>
            <h5>
              Nesse curso você vai aprender tudo que você precisa para sair do
              zero, e aprender programação.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};
export default Course;
