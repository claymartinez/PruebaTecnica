import { FC } from 'react'
import Facebook from '../../assets/icons/Facebook';
import Instagram from '../../assets/icons/Instagram';
import Pinterest from '../../assets/icons/Pinterest';
import Youtube from '../../assets/icons/Youtube';

interface LinksSiguenosProps {
  
}

const LinksSiguenos: FC<LinksSiguenosProps> = ({  }) => {
  return (
    <div className="mb-[30px]">
      <h1 className="font-bold mb-3">
        <a href="">Siguenos</a>
      </h1>

      <ul className="hidden md:flex  flex-row gap-3">
        <li>
          <a href="#">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="#">
            <Pinterest />
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="#">
            <Youtube />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LinksSiguenos;