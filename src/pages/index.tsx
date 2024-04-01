import Cost from "@/components/Cost";
import TikTok from "@/components/TikTok";
import Youtube from "@/components/YouTube";
import Course from "../components/Course";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <img src="/logoRei.png" />
          </div>
          <div className={styles.top}>
            <div className={styles.left}>
              <Course />
            </div>
            <div className={styles.right}>
              <TikTok />
              <Youtube />
            </div>
          </div>
          <div className={styles.bottom}>
            <Cost />
          </div>
          <div className={styles.footer}>
            <img src="/logoRei.png" />
            <p>SOLID TECH © CNPJ 38.405.446/0001-79</p>
          </div>
        </div>
      </section>
    </>
  );
}
