import styles from "./styles.module.scss";

const StickFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo2.svg" />
        </div>
        <div className={styles.button}>
          <button>
            <p>ME INSCREVER</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickFooter;
