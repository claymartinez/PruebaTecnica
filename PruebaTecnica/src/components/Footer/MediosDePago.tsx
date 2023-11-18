import React, { FC } from "react";
import Amex from "../../assets/icons/Amex";
import AmericanExpress from "../../assets/icons/AmericanExpress";
import Maestro from "../../assets/icons/Maestro";
import MasterCard from "../../assets/icons/MasterCard";
import Paypal from "../../assets/icons/Paypal";
import Visa from "../../assets/icons/Visa";
import Oxxo from "../../assets/icons/Oxxo";

interface MediosDePagoProps {}

const MediosDePago: FC<MediosDePagoProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-[132px]">
      <div className="flex  flex-wrap h-full items-center justify-center gap-5 pt-6">
        <Amex />
        <AmericanExpress />
        <Maestro />
        <MasterCard />
        <Paypal />
        <Visa />
        <Oxxo />
      </div>
      <div className="flex h-full items-center justify-center ">
        <h1>
          COPYRIGHT © 2022 <strong>INVICTA MEXICO </strong>- TODOS LOS DERECHOS
          RESERVADOS
        </h1>
      </div>
    </div>
  );
};

export default MediosDePago;
