import router from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

const Course = () => {
  const [lightPosition, setLightPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const scaleFactor = 1.05;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const overlaySize = 100; // Half the overlay size for centering
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const adjustedX = (event.clientX - left) / scaleFactor;
    const adjustedY = (event.clientY - top) / scaleFactor;

    setLightPosition({
      x: adjustedX - overlaySize,
      y: adjustedY - overlaySize,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setLightPosition((prevPosition) => ({ ...prevPosition, visible: false }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/conversion", {
        eventName: "Entrou em Contato",
        eventTime: Math.floor(Date.now() / 1000),
        actionSource: "website",
        testEventCode: "TEST7466",
        userData: {
          email: "user@example.com",
          firstName: "John",
          lastName: "Doe",
          phone: "1234567890",
          gender: "male",
          dateOfBirth: "1990-01-01",
          city: "CityName",
          state: "StateName",
          zipCode: "12345",
          country: "CountryName",
        },
      });
      console.log("Event sent successfully!", response.data);
    } catch (error) {
      console.error("Failed to send event", error);
    }
    router.push("/curso");
  };

  return (
    <>
      <section
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className={styles.lightEffect}
          style={{
            background: `radial-gradient(circle closest-side, rgba(255, 255, 255, 0.3), transparent)`,
            transform: `translate(${lightPosition.x}px, ${lightPosition.y}px)`,
            opacity: lightPosition.visible ? 1 : 0,
          }}
        />
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src="/newicon.png" />
          </div>
          <div className={styles.text}>
            <h2>Aprenda por R$17,00</h2>
            <h5>
              Nesse curso você vai aprender tudo que você precisa para sair do
              zero, e aprender programação.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};
export default Course;
