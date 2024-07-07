import SmoothScroll from '@/components/Lenis';
import '@/styles/globals.scss';
import 'animate.css/animate.compat.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import Head from next/head

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
                />
                <meta
                    name="og:description"
                    content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
                />

                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/nextgain-37481.appspot.com/o/Screenshot%202024-04-01%20at%2022.58.47.png?alt=media&token=c87429da-d568-4acc-9b39-e4cb579bb9ac"
                />

                <title>Do Zero aos Sites</title>
            </Head>
            <SmoothScroll />
            <Component {...pageProps} />
        </>
    );
}
