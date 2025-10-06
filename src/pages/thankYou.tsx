import { useRouter } from "next/router";
import styles from "../styles/thankYou.module.scss";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Obrigada!</h1>
        <p>
          Clique no botão e entre no grupo exclusivo para receber novidades e
          ter acesso ao link da aula no dia 20/10. Te vejo lá!
        </p>
        <button
          onClick={() =>
            router.push(
              "https://chat.whatsapp.com/DcpKUyQw8L6FOpVLNcReO6?mode=ems_copy_t"
            )
          }
        >
          Entre no grupo exclusivo.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <path
              d="M72,104a32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16a32,32,0,0,1-32,32A80,80,0,0,1,72,104Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <path
              d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
