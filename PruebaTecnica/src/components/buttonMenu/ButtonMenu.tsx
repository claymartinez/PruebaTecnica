import { FC } from "react";
import { useState } from "react";
import listas from "./listas";
import formatoNombre from "../../utils/formatoNombre";
import ButtonMenuClose from "../../assets/icons/ButtonMenuClose";

interface ButtonMenuProps {
  name: string;
}

const ButtonMenu: FC<ButtonMenuProps> = ({ name }) => {
  const [mostrarRelojes, setMostrarRelojes] = useState(false);
  const lista = listas[name];

  const variantStyle =
    name === "Relojes"
      ? "bg-[#FFED01]"
      : name === "Technomarine"
      ? "bg-[#1E82D7]"
      : name === "BuenFin"
      ? "bg-[#FF0000]"
      : "";

  return (
    <div
      className="relative ms:inline-block text-left"
      onMouseEnter={() => setMostrarRelojes(true)}
      onMouseLeave={() => setMostrarRelojes(false)}
    >
      <div className="flex justify-center items-center ">
        <div className="flex-col">
          <button className="text-white focus:outline-none ">
            {formatoNombre(name)}
          </button>
          <div className={`w-full h-1 m-auto ${variantStyle}`}></div>
        </div>
        <ButtonMenuClose />
      </div>

      {mostrarRelojes && (
        <div>
          <div className="origin-top- absolute left-0 w-40 shadow-lg bg-[#212529] ">
            <div className="py-1">
              <ul>
                {listas[name].map((opcion, index) => (
                  <li
                    key={index}
                    className="block px-4 py-2 text-sm text-zinc-400 hover:text-white"
                  >
                    {opcion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonMenu;
