import { FC } from "react";

interface TesxtScrollingProps {}

const TesxtScrolling: FC<TesxtScrollingProps> = ({}) => {
  return (
    <div className="bg-black relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt error consectetur at ex, vitae eaque, ullam expedita ipsam
          perferendis beatae aliquid officia rerum nihil quam suscipit veniam
          minima? Repudiandae, iusto quo ipsam tempora eaque maiores ratione
          debitis cumque, reprehenderit vel obcaecati! Deserunt eos architecto,
          dolore minima asperiores ratione consectetur! Autem mollitia
          consequatur et praesentium suscipit voluptatum veritatis in blanditiis
          accusamus alias aspernatur, facilis nulla soluta placeat
          reprehenderit. Praesentium atque consequuntur eaque. Accusamus
          praesentium repudiandae inventore ipsum quod maxime mollitia dolore
          quam officiis sequi? Explicabo dolor libero ipsa, delectus quisquam
          laudantium nesciunt, odio nam saepe voluptas eos hic veritatis enim.
        </p>
      </div>
    </div>
  );
};

export default TesxtScrolling;
