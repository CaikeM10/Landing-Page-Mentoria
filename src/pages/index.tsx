import About from "@/components/About";
import Bonus from "@/components/Bonus";
import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import MovingBars from "@/components/MovingBars";
import Price from "@/components/Price";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import HorizontalScrollPage from "@/components/SideSlide";
import Students from "@/components/Swiper";
import Who from "@/components/Who";
import { useState } from "react";

export default function Home() {
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [canScrollUpPastHorizontalPage, setCanScrollUpPastHorizontalPage] =
    useState(true);

  const handleScrollToEnd = () => {
    setHasScrolledToEnd(true);
    setCanScrollUpPastHorizontalPage(false); // Prevent scrolling up past HorizontalScrollPage
  };

  const handleScrollToStart = () => {
    setHasScrolledToEnd(false);
    setCanScrollUpPastHorizontalPage(true); // Allow scrolling up past HorizontalScrollPage
  };

  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <MovingBars />
      <Guarantee />
      <Students />
      <Who />

      <HorizontalScrollPage
        onScrollEnd={handleScrollToEnd}
        onScrollStart={handleScrollToStart}
      />
      {hasScrolledToEnd && (
        <>
          <Bonus />
          <Price />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}
