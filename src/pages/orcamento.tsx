import LoadingSpinner from "@/components/LoadingSpinner";
import styles from "@/styles/orcamento.module.scss";
import axios from "axios";
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { Howl } from "howler";
import router from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(MotionPathPlugin);

export default function Desafio() {
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;

  useEffect(() => {
    gsap.to("#animatedImage", {
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "none",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((module) => {
          const ReactPixel = module.default;
          ReactPixel.track("PageView", {
            content_name: "Orçamento Page",
            page_category: "Budget",
            page_url: window.location.href,
          });
        })
        .catch((err) => console.error("Failed to load Facebook Pixel", err));
    }
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const hoverSound = new Howl({
    src: ["/sounds/buttonSound.mp3"],
    volume: 0.5,
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSubmit = async () => {
  //   setLoading(true);
  //   const isValidEmail = emailRegex.test(formData.email);
  //   const isValidPhone = phoneRegex.test(formData.phone);

  //   if (!isValidEmail) {
  //     toast.error("Por favor, insira um email válido.");
  //     setLoading(false);
  //     return;
  //   }
  //   if (!isValidPhone) {
  //     toast.error("Por favor, insira um número de telefone válido.");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     if (typeof window !== "undefined") {
  //       import("react-facebook-pixel")
  //         .then((module) => {
  //           const ReactPixel = module.default;
  //           ReactPixel.track("Budget", {
  //             content_name: "Orçamento",
  //             currency: "BRL",
  //           });
  //         })
  //         .catch((err) =>
  //           console.error(
  //             "Failed to track form submission with Facebook Pixel",
  //             err
  //           )
  //         );
  //     }
  //     const response = await axios.post("/api/budget", formData);
  //     if (response.status === 201) {
  //       let redirectUrl = "https://wa.link/4ktma1";

  //       router.push(redirectUrl);
  //       toast.success(
  //         "Registrado com sucesso! Realize o orçamento no whatsapp."
  //       );
  //       setFormData({
  //         email: "",
  //         phone: "",
  //       });
  //     }
  //   } catch (error: any) {
  //     console.error(
  //       "Erro ao registrar tente novamente!",
  //       error.response?.data || error.message
  //     );
  //     toast.error("Erro ao registrar o site. Por favor, tente novamente.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async () => {
    let redirectUrl = "https://wa.link/4ktma1";
    window.location.href = redirectUrl;
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className={styles.container}>
        <ToastContainer />
        <div className={styles.content}>
          <div className={styles.topBanner}>
            <div className={styles.formWrap}>
              <div className={styles.rightForm}>
                <h1>REALIZE UM ORÇAMENTO</h1>
                <div className={styles.form}>
                  <p className={styles.customText}>
                    Entre em contato conosco para um orçamento personalizado!
                  </p>

                  <button
                    className={styles.button}
                    onMouseEnter={() => hoverSound.play()}
                    onMouseDown={() => hoverSound.play()}
                    onClick={handleSubmit}
                  >
                    <span className={styles.line}></span>
                    REALIZAR ORÇAMENTO!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.topBannerMobile}>
            <h1>REALIZE UM ORÇAMENTO</h1>
          </div>
          <div className={styles.slider}>
            <div className={styles.slideTrack}>
              {Array.from({ length: 50 }).map((_, index) => (
                <div key={index} className={styles.slide}>
                  {index % 2 === 0 ? (
                    <img src={`/svg${((index / 2) % 3) + 1}.svg`} alt="" />
                  ) : (
                    <p>
                      {index % 6 === 1
                        ? "AUMENTE O FATURAMENTO DA SUA EMPRESA!"
                        : index % 6 === 3
                        ? "CRIADOR DE SITES"
                        : "ENTRE EM CONTATO!"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              <h1>AUMENTE SEU FATURAMENTO!</h1>
              <h2>AUMENTE SEU FATURAMENTO!</h2>
              <div className={styles.formMobile}>
                <p className={styles.customText}>
                  Entre em contato conosco para um orçamento personalizado!
                </p>

                <button
                  className={styles.button}
                  onMouseEnter={() => hoverSound.play()}
                  onMouseDown={() => hoverSound.play()}
                  onClick={handleSubmit}
                >
                  <span className={styles.line}></span>
                  REALIZAR ORCAMENTO!
                </button>
              </div>
              <p>
                Nossa empresa é especialista na criação de sites, com o objetivo
                de aumentar o faturamento de nossos clientes.
              </p>
              <p>
                Temos uma equipe especializada em SEO, Marketing Digital e
                Criação de sites, fazemos integração com pixel, gtm e assim por
                diante.
              </p>
              <p>
                Aumente o faturamento de sua empresa, entre em contato conosco e
                solicite um orçamento.
              </p>
              <button
                className={styles.button}
                onMouseEnter={() => hoverSound.play()}
                onMouseDown={() => hoverSound.play()}
                style={{ maxWidth: "500px" }}
                // onClick={handleClick}
              >
                <span className={styles.line}></span>
                ENTRE EM CONTATO
              </button>
            </div>
            <div className={styles.divisor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="1"
                viewBox="0 0 1145 1"
                fill="none"
              >
                <path d="M0 0.5H1145" stroke="#01B7D0" id="path" />
              </svg>
              <img
                className={styles.reactImage}
                id="animatedImage"
                src="/react.webp"
                alt="Animated"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
            <label>
              ESTE SITE NÃO É DA META: Este site não faz parte do site da Meta
              Platforms, Inc. Além disso, este site NÃO é endossado pela Meta de
              nenhuma maneira. FACEBOOK é uma marca comercial independente da
              Meta Platforms, Inc.
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
