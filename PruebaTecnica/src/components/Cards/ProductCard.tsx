import FormatPrice from "../../utils/formatPrice";
import Star from "../../assets/icons/Star";
import New from "../../assets/New";

interface ProductCardProps {
  id: string;
  imageSrc: string;
  color: string;
  description: string;
  price: number;
  offer: number;
}

const ProductCard = ({
  color,
  description,
  price,
  offer,
  imageSrc,
  id,
}: ProductCardProps) => {
  return (
    <a
      className="px-10 py-6 shadow-md hover:shadow-xl rounded-md overflow-hidden bg-white w-[270px] min-h-[415px] relative space-y-3"
      href={`#`}
    >
     
        <New />
      
      <img
        src={imageSrc}
        alt="Cubre Volante"
        width={500}
        height={500}
        className="w-full aspect-square"
      />
      <div className="h-28 flex flex-col justify-evenly">
        <div className="flex">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <h3 className="line-clamp-2"> {description}</h3>
        <h3 className="font-semibold mb-2 line-clamp-3 text-black h-20">
          {color}
        </h3>
        <div className="flex items-center justify-start gap-3">
          <p className="line-through text-sm text-black">{`${FormatPrice(
            price
          )}`}</p>
          <p className="font-semibold text-lg text-red-600">{`${FormatPrice(
            price - price * offer
          )}`}</p>
        </div>
      </div>
      <button className="py-2 bg-black text-white font-semibold w-full">
        Añadir al Carrito
      </button>
    </a>
  );
};

export default ProductCard;
