import './AnimalShow.css';
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";

const svgImage = {
  bird,
  cow,
  horse,
  dog,
  gator,
  cat,
};
function Animalshow({ type }) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    }
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt="animals" src={svgImage[type]} />
          <img className='heart' alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
  );
}
export default Animalshow;
