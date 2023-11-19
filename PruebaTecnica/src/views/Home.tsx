import { FC } from "react";
import TesxtScrolling from "../components/TextScrolling/TesxtScrolling";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroBanners from "../components/HeroBanner/HeroBanner";
import BannerParallax from "../components/BannerParallax/BannerParallax";
import ContainerCard from "../components/ContainerCards/ContainerCard";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <TesxtScrolling />
      <NavBar />
      <HeroBanners />
      <BannerParallax />
      <ContainerCard />
      <Footer />
    </>
  );
};

export default Home;
