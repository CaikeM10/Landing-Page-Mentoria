import React, { useEffect } from "react";
import styles from "./styles.module.scss"; // Import the CSS module
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ZoomEffect = () => {
  useEffect(() => {
    let scrollTriggerInstance: typeof ScrollTrigger | null = null;

    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      scrollTriggerInstance = ScrollTriggerModule.ScrollTrigger;

      gsapModule.default.registerPlugin(scrollTriggerInstance);
      const isMobile = window.innerWidth <= 768;

      // Set different xPercent and yPercent based on device
      const scale = isMobile ? 170 : 700;
      const xPercent = isMobile ? -500 : -4300;
      const yPercent = isMobile ? -4500 : -50;
      // Clear previous triggers to avoid multiple executions
      scrollTriggerInstance.getAll().forEach((trigger) => trigger.kill());

      gsapModule.default.to("#zoom-text", {
        scale3d: 100,
        scale,
        duration: 3,
        xPercent,
        yPercent,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: "#zoom-in",
          pin: true,
          end: `+=${innerHeight}`,
          scrub: 0.5,
        },
      });

      gsapModule.default.fromTo(
        "#next-text",
        { y: "1300%", opacity: 0 }, // Start far below the viewport
        {
          y: "0%", // Move to the current position
          opacity: 1, // Make it fully visible
          scrollTrigger: {
            trigger: "#zoom-in",
            start: "top 20%", // Start the animation towards the end of the zoom
            end: "top -20%", // Delay the end point to extend the effect duration
            scrub: true,
          },
          ease: "power3.out",
        }
      );

      // Then, increase the opacity of individual words as they appear
      gsapModule.default.fromTo(
        "#next-text span",
        { opacity: 0.3, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Reveal the words one by one
          scrollTrigger: {
            trigger: "#zoom-in",
            start: "top 0%",
            end: "bottom -10%",
            scrub: true,
          },
          ease: "power3.out",
        }
      );
    };

    loadGSAP();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => {
      if (word.includes("<br/>")) {
        return (
          <React.Fragment key={i}>
            <br />
            <span style={{ opacity: 0.3 }}>
              {word.replace("<br/>", "")}&nbsp;
            </span>
          </React.Fragment>
        );
      } else {
        return (
          <span key={i} style={{ opacity: 0.3 }}>
            {word}&nbsp;
          </span>
        );
      }
    });
  };

  return (
    <div>
      <section id="zoom-in" className={styles.zoomSection}>
        <h2 id="zoom-text" className={styles.zoomText}>
          O que <span>você</span> irá aprender?
        </h2>
        <p id="next-text" className={styles.nextText}>
          {splitText(
            "Impulsione sua carreira <br/>com nosso curso completo! <br/>Aprenda Figma, Wordpress, <br/>HTML, CSS, JavaScript, <br/>e técnicas de venda. <br/>Cada módulo garante um aprendizado <br/>prático e eficiente. <br/>Domine habilidades valiosas <br/>e alcance o sucesso no mundo digital."
          )}
        </p>
        <p id="next-text" className={styles.nextTextMobile}>
          {splitText(
            "Impulsione sua carreira <br/>com nosso curso completo! <br/>Aprenda Figma, Wordpress, <br/>HTML, CSS, JavaScript, <br/>e técnicas de venda. <br/>Cada módulo <br/>garante um aprendizado <br/>prático e eficiente. <br/>Domine habilidades <br/>valiosas <br/>e alcance o sucesso digital."
          )}
        </p>
      </section>
    </div>
  );
};

export default ZoomEffect;
