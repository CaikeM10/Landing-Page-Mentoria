import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  // Definindo o Pixel ID em uma variável para maior clareza e manutenção
  const metaPixelId = "744710918557341";

  return (
    <Html lang="en">
      <Head>
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

        {/* NOTA: Seus links de Favicon (que discutimos) devem ser adicionados aqui também! */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
