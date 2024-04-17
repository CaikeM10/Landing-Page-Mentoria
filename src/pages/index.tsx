import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import Modulos from "@/components/Modulos";
import MovingBars from "@/components/MovingBars";
import Parallax from "@/components/Parallax";
import Price from "@/components/Price";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import Students from "@/components/Swiper";
import { useState } from "react";

export default function Home() {
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [canScrollUpPastHorizontalPage, setCanScrollUpPastHorizontalPage] =
    useState(true);

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
    </>
  );
}
