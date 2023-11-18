import { FC } from "react";
import LinksRoutes from "./LinksRoutes";

interface LinksProps {
  name: string;
}

const Links: FC<LinksProps> = ({ name }) => {
  const selectedLinks = LinksRoutes.find(
    (linkGroup) => linkGroup.name === name
  );

  return (
    <>
      <div className="mb-[30px]">
        <h1 className="font-bold mb-3">
          <a href="">{name}</a>
        </h1>

        <ul
          className={`hidden md:flex  ${
            name === "Siguenos" ? "flex-row" : "flex-col"
          }  `}
        >
          {selectedLinks?.links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Links;
