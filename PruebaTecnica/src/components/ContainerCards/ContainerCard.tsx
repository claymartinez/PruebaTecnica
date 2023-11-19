"use client";
import ProductCard from "../Cards/ProductCard";
import productos from "../../mockData/mockProducts";
import Carousel from "../Carousel/Carousel";

export type ProductsProps = {
  id: string;
  color: string;
  description: string;
  price: number;
  image: string[];
};

const ContainerCard = () => {
  const products = productos.slice(0, 10);

  return (
    <div className="mb-8 w-full">
      <div className="flex justify-center text-black font-bold border-b-4 border-b-yellow-400 max-w-[1920px] m-auto py-5 mb-6">
        <h2 className="text-2xl">RELOJES DESTACADOS</h2>
      </div>
      <Carousel auto={true}>
        {products.map((producto: ProductsProps) => {
          const { color, id, price, image, description } = producto;
          return (
            <ProductCard
              description={description}
              id={id}
              key={id}
              color={color}
              price={price}
              offer={0.1}
              imageSrc={image[0]}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
export default ContainerCard;
