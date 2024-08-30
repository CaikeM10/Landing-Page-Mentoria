import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import Modulos from "@/components/Modulos";
import MovingBars from "@/components/MovingBars";
import PageTitle from "@/components/PageTitle";
import Price from "@/components/Price";
import Questions from "@/components/Questions";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import StickFooter from "@/components/StickFooter";
import Students from "@/components/Swiper";
import ZoomEffect from "@/components/ZoomEffect";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [canScrollUpPastHorizontalPage, setCanScrollUpPastHorizontalPage] =
    useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("ViewContent");
    }
  }, []);

  const handleScrollToEnd = () => {
    setHasScrolledToEnd(true);
    setCanScrollUpPastHorizontalPage(false);
  };

  const handleScrollToStart = () => {
    setHasScrolledToEnd(false);
    setCanScrollUpPastHorizontalPage(true);
  };
  const pageTitle = "facebook-ads";
  return (
    <>
      <PageTitle title={pageTitle} />
      <Header />
      <SectionOne title={pageTitle} />
      <SectionTwo title={pageTitle} />
      <MovingBars />
      <Guarantee />
      <Students title={pageTitle} />
      <ZoomEffect />
      <Modulos />
      <Price title={pageTitle} />
      <Questions />
      <Footer />
      <StickFooter title={pageTitle} />
    </>
  );
}
