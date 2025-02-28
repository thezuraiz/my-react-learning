import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";
const Card = (props) => {
  const { name, price, original_price } = props;
  const [click, setClick] = useState(false);

  return (
    <div className="p-6 border border-gray-200 rounded-2xl relative group min-w-70">
      <img
        className="w-full transform transition duration-500 ease-in-out group-hover:scale-110"
        src="https://dealaday-images.eu-central-1.linodeobjects.com/2683f10bde07984e524f91f1dcd1d7d5/U-2411.jpeg"
        alt=""
      />
      <div className="mt-5">
        <h3>{name}</h3>
        <h5 className="text-xl font-bold text-blue-400 mt-3">
          ${price}
          <span className="text-lg font-bold text-black line-through ml-2">
            ${original_price}
          </span>
        </h5>
      </div>
      <button
        className="cursor-pointer"
        onClick={() => setClick((prev) => !prev)}
      >
        {click ? (
          <IoMdHeart className="text-2xl absolute bottom-2 right-2 text-red-500  duration-300" />
        ) : (
          <IoMdHeartEmpty className="text-2xl absolute bottom-2 right-2 duration-300" />
        )}
      </button>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  original_price: PropTypes.number.isRequired,
};

export default Card;
