import SmoothScroll from "@/components/Portuguese/Lenis";
import "@/styles/globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import "animate.css/animate.compat.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  async function fetchUserDetails(): Promise<UserData> {
    return {
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
    };
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchUserDetails();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/" sizes="any" />
        <meta
          name="description"
          content="Entre na minha mentoria especializada e veja como viver de clinicar"
        />
        <meta
          name="og:description"
          content="Entre na minha mentoria especializada e veja como viver de clinicar"
        />
        <meta
          property="og:image"
          content="/Captura de tela 2025-10-03 191935.png"
        />
        <title>Consultório Sustentável | íria Sabóia. </title>
      </Head>
      <SmoothScroll />
      <GoogleAnalytics gaId="G-32JCH9GGY4" />
      <Component {...pageProps} />
    </>
  );
}
