import { useEffect } from "react";

export default function CalendlyTest() {
  useEffect(() => {
    // Adiciona o script do Calendly ao carregar a página
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove o script ao desmontar a página
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Calendly Test Page</h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/leonardo-solidtech/reuniao-de-site"
        style={{
          minWidth: "320px",
          height: "700px",
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
}
