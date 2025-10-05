import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  // Definindo o Pixel ID em uma variável para maior clareza e manutenção
  const metaPixelId = "744710918557341";

  //
  const themeColor = "#725542";

  return (
    <Html lang="pt-br">
      {" "}
      {/* Ajustei o idioma para português */}
      <Head>
        {/* FAVICON PADRÃO (Para navegadores modernos) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* ÍCONES PNG (Para diferentes resoluções) */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* APPLE TOUCH ICON (Para iPhones/iPads na tela inicial) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* MANIFEST (Para Progressive Web Apps - PWA e Android) */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* METATAG: Define a cor da barra de endereço em navegadores Android */}
        <meta name="theme-color" content={themeColor} />

        {/* ================================================= */}
        {/* FIM DA INJEÇÃO DE FAVICONS */}
        {/* ================================================= */}

        {/* Meta Pixel Script Principal (JS) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[]; 
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}'); 
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Bloco noscript (Imagem de fallback para usuários sem JS) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt="Meta Pixel"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
