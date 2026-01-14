import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const metaPixelId = "744710918557341"; // Pixel do Instagram existente
  const themeColor = "#725542";

  return (
    <Html lang="pt-br">
      <Head>
        {/* FAVICONS E METAS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content={themeColor} />

        {/* 1. SCRIPT DO FACEBOOK/INSTAGRAM (Já estava lá) */}
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

        {/* 2. SCRIPT DO MICROSOFT CLARITY (O que ele mandou agora) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v0s1t5mgtw");
            `,
          }}
        />

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
