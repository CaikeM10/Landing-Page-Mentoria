import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import Modulos from "@/components/Modulos";
import MovingBars from "@/components/MovingBars";
import Parallax from "@/components/Parallax";
import Price from "@/components/Price";
import Questions from "@/components/Questions";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import StickFooter from "@/components/StickFooter";
import Students from "@/components/Swiper";
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

  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <MovingBars />
      <Guarantee />
      <Students />
      <Parallax />
      <Modulos />
      <Price />
      <Questions />
      <Footer />
      <StickFooter />
    </>
  );
}
