import { FC } from "react";
import Links from "./Links";
import LinksSiguenos from "./LinksSiguenos";
import MediosDePago from "./MediosDePago";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full h-[555px]">
      <div
        className="w-full h-[423px] bg-center bg-no-repeat bg-cover py-5 flex justify-center"
        style={{
          backgroundImage:
            'url("https://invictamexico.com/cdn/shop/files/Group_265.webp?v=1661896065")',
        }}
      >
        <div className="max-w-[1440px] grid grid-rows-2 h-full mx-[136px] w-full">
          <div className="grid grid-1 justify-center mb-[30px] order-2 items-end md:items-start md:order-1">
            <image className=" w-[200px] h-20">
              <img
                srcSet="//invictamexico.com/cdn/shop/files/Invicta-logo.webp?v=1660079718&amp;width=200, //invictamexico.com/cdn/shop/files/Invicta-logo.webp?v=1660079718&amp;width=400 2x"
                src="//invictamexico.com/cdn/shop/files/Invicta-logo.webp?v=1660079718&amp;width=400"
                alt=""
                loading="lazy"
                width="100%"
                height="100%"
                className=";"
              ></img>
            </image>
          </div>

          <div className="md:grid md:grid-cols-4 text-white order-1 md:order-2 flex flex-col items-center">
            <Links name="Invencible en detalle" />

            <Links name="Servicio al cliente" />

            <Links name="Encuentranos" />

            <LinksSiguenos />
          </div>
        </div>
      </div>
      <MediosDePago />
    </footer>
  );
};

export default Footer;
