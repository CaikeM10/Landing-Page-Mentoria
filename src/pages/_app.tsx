import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <link rel="icon" href="/favicon.ico" sizes="any" />;
    </>
  );
}
