import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImageWithLoader from "../helper_function/image_with_loader";
const Card = (props) => {
  const { id, title, price, discountPercentage = "40", thumbnail } = props;
  const [click, setClick] = useState(false);

  return (
    <Link to={`/products/${id}`}>
      <div className="p-6 border border-gray-200 rounded-2xl relative">
        <ImageWithLoader src={thumbnail} />
        <div className="mt-5">
          <h3 className="line-clamp-1">
            {title ?? "Logitech Webcam - C270  or C310"}
          </h3>
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
