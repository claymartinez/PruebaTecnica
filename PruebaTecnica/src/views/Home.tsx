import { FC } from "react";
import TesxtScrolling from "../components/TextScrolling/TesxtScrolling";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <TesxtScrolling />
      <NavBar />
      
      <Footer />
    </>
  );
};

export default Home;
