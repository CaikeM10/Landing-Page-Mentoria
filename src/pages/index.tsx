import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import MovingBars from "@/components/MovingBars";
import HorizontalScrollPage from "@/components/NewTest";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import Students from "@/components/Swiper";
import Who from "@/components/Who";

export default function Home() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <MovingBars />
      <Guarantee />
      <Students />
      <Who />

      <HorizontalScrollPage />
    </>
  );
}
