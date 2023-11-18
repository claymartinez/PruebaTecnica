import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="w-full bg-black">
      <a
        className="h-[300px] bg-cover bg-center bg-no-repeat bg-fixed bg-banner flex items-center justify-center max-w-[1920px] mx-auto"
        href="#"
        target="_blank"
      ></a>
    </section>
  );
};

export default Banner;
