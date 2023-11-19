"use client";
import { useRef, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type CarouselProps = {
  children: React.ReactNode[];
  items?: 1 | 2 | 3 | 4 | 5 | 9;
  auto?: boolean;
};

const Carousel = ({ children, items = 4, auto = false }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsView =
    items === 1
      ? "min-w-full"
      : items === 2
      ? "min-w-full ms:min-w-[calc(100%/2)]"
      : items === 3
      ? "min-w-full ms:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)]"
      : items === 5
      ? "min-w-[calc(100%/5)]"
      : items === 9
      ? "min-w-full ms:min-w-[calc(100%/2)]  md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/9)]"
      : "min-w-full ms:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/4)]";

  function next() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children?.length > 0) {
      const firstElement = carouselRef?.current?.children[0];
      carouselRef.current.style.transition = "300ms ease-out all";

      const size = carouselRef.current.children[0].clientWidth;

      carouselRef.current.style.transform = `translatex(-${size}px)`;

      const transicion = () => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = "translatex(0px)";

        carouselRef.current.appendChild(firstElement);
        carouselRef.current.removeEventListener("transitionend", transicion);
      };

      carouselRef.current.addEventListener("transitionend", transicion);
    }
  }
  function previus() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children.length > 0) {
      const endElement =
        carouselRef.current.children[carouselRef.current.children.length - 1];
      carouselRef.current.insertBefore(
        endElement,
        carouselRef?.current?.firstChild
      );

      carouselRef.current.style.transition = "none";

      const size = carouselRef.current.children[0].clientWidth;
      carouselRef.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = "300ms ease-out all";
        carouselRef.current.style.transform = "translatex(0)";
      }, 30);
    }
  }

  if (!children.length) return null;

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        next();
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [auto]);

  return (
    <>
      <div
        className={`flex gap-1 relative items-center
       px-2 max-w-[1920px] mx-auto`}
      >
        <button
          onClick={() => previus()}
          className={`w-10 apect-square rounded-full p-2 bg-white text-[#000] shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg transition-all`}
        >
          <BsChevronCompactLeft size="100%" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={carouselRef}
            className="flex flex-nowrap justify-start min-h-[50px]"
          >
            {children.map((child: any, i) => {
              return (
                <div
                  key={i}
                  className={`
                    ${itemsView} px-1 grid place-content-center overflow-hidden`}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => next()}
          className={` w-10 apect-square rounded-full p-2 bg-white text-[#000] shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg transition-all`}
        >
          <BsChevronCompactRight size="100%" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
