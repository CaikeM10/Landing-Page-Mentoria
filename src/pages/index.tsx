import Cost from "@/components/Cost";
import TikTok from "@/components/TikTok";
import Youtube from "@/components/YouTube";
import Course from "../components/Course";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const queryParams = "curso";
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <img src="/Logo.gif" />
          </div>
          <div className={styles.top}>
            <div className={styles.left}>
              <Course urlParams={queryParams} />
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
          </div>
        </div>
      </section>
    </>
  );
}
