import { FC } from "react";
import Logo from "../../assets/icons/Logo";
import Lupa from "../../assets/icons/Lupa";
import Perfil from "../../assets/icons/Perfil";
import Mensajes from "../../assets/icons/Mensajes";
import HamburguesaClose from "../../assets/icons/HamburguesaClose";
import ButtonMenu from "../buttonMenu/ButtonMenu";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <nav className="flex bg-black w-full justify-center">
      <div className="flex items-center w-full max-w-[1200px] h-[89px] bg-black px-[50px] justify-between ms:gap-5 py-[10px] ms:py-[20px]">
        <div className="flex flex-1 ms:hidden">
          <button className="">
            <HamburguesaClose />
          </button>
        </div>
        <div className="flex flex-[2] ms:flex-[0] w-[207px] h-[69px] items-center justify-center">
          <button className="flex max-w-[200px] max-h-[54px] ms:min-w-[200px] ms:min-h-[54px] items-center justify-center">
            <Logo />
          </button>
        </div>
        <div className="hidden ms:flex ms:flex-wrap ms:gap-4 text-sm">
          <ButtonMenu name="Relojes"/>
          <ButtonMenu name="EdicionEspecial" />
          <ButtonMenu name="Accesorios" />
          <ButtonMenu name="Technomarine" />
          <ButtonMenu name="BuenFin" />
        </div>
        <div className="flex flex-1 ms:flex-[0] justify-end">
          <button className="">
            <Lupa />
          </button>
          <button>
            <Perfil />
          </button>
          <button>
            <Mensajes />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
