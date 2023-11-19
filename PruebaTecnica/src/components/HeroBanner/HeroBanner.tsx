import { FC, useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface SecondCarouselProps {}

const slidesList = [
  {
    url: "//invictamexico.com/cdn/shop/files/GENERAL_banner-principal-desk-1920x650_1.jpg?v=1700156573",
  },
  {
    url: "//invictamexico.com/cdn/shop/files/GRAN_GANGA_banner-principal-desk-1920x650.jpg?v=1699652974",
  },
  {
    url: "//invictamexico.com/cdn/shop/files/DESDE_999_banner-principal-desk-1920x650_384e775e-ebb2-4685-a203-9c6572ff9d57.jpg?v=1700149045",
  },
  {
    url: "https://invictamexico.com/cdn/shop/files/PRO_DIVER_banner-principal-desk-1920x650_808f1d20-48eb-42fd-be95-ad6620fffe32.jpg?v=1700150257",
  },
];

const mobileSlidesList = [
  {
    url: "https://invictamexico.com/cdn/shop/files/GRAN_GANGA_banner-principal-mobile-375X400.jpg?v=1699652991",
  },
  {
    url: "//invictamexico.com/cdn/shop/files/DESDE_999_banner-principal-mobile-375X400_c6dcd23a-600c-4368-a7c6-18a44154a1fd.jpg?v=1700149062",
  },
  {
    url: "https://invictamexico.com/cdn/shop/files/PRO_DIVER_banner-principal-mobile-375X400_e20fbedb-28b9-4012-adc6-7d07d2b40aa2.jpg?v=1700150268",
  },
  {
    url: "https://invictamexico.com/cdn/shop/files/GENERAL_banner-principal-mobile-375X400.jpg?v=1700156589",
  },
];

const HeroBanners: FC<SecondCarouselProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 600;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slidesList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <section className="w-full bg-black">
      <div className="relative group max-w-[1920px] max-h-[600px] m-auto">
        <button>
          <img
            className="w-full "
            src={
              isMobile
                ? mobileSlidesList[currentIndex].url
                : slidesList[currentIndex].url
            }
            alt="Banner"
            width={1920}
            height={500}
          />
        </button>

        <div className="hidden group-hover:block absolute top-[50%]  -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/50 text-background-dm cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%]  -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/50 text-background-dm cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </section>
  );
};

export default HeroBanners;
