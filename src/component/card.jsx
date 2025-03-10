import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { id, title, price, discountPercentage = "40", thumbnail } = props;
  const [click, setClick] = useState(false);

  return (
    <Link to={`/products/${id}`}>
      <div className="p-6 border border-gray-200 rounded-2xl relative min-w-70">
        <img
          className="w-full transform transition duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
          src={
            thumbnail ??
            "https://dealaday-images.eu-central-1.linodeobjects.com/2683f10bde07984e524f91f1dcd1d7d5/U-2411.jpeg"
          }
          alt=""
        />
        <div className="mt-5">
          <h3>{title ?? "Logitech Webcam - C270  or C310"}</h3>
          <h5 className="text-xl font-bold text-blue-400 mt-3">
            ${Math.round(price - (discountPercentage / 100) * price)}
            <span className="text-lg font-bold text-black line-through ml-2">
              ${price}
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
    </Link>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  discountPercentage: PropTypes.number.isRequired,
};

export default Card;
