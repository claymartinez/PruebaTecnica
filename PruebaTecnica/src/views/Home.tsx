import { FC } from "react";
import TesxtScrolling from "../components/TextScrolling/TesxtScrolling";
import NavBar from "../components/NavBar/NavBar";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <TesxtScrolling />
      <NavBar />
    </>
  );
};

export default Home;
