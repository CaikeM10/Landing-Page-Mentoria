import Cost from '@/components/Cost';
import TikTok from '@/components/TikTok';
import Youtube from '@/components/YouTube';
import Course from '../components/Course';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <img src="/Logo.gif" />
          </div>
          <div className={styles.top}>
            <div className={styles.left}>
              <Course />
            </div>
            <div className={styles.right}>
              <Cost />

              <Youtube />
            </div>
          </div>
          <div className={styles.bottom}>
            <TikTok />
          </div>
          <div className={styles.footer}>
            <img src="/Logo.gif" />
            <p>SOLID TECH © CNPJ 38.405.446/0001-79</p>
          </div>
        </div>
      </section>
    </>
  );
}
