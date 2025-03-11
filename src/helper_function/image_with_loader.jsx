import { useState } from "react";
import PropTypes from "prop-types";

const ImageWithLoader = ({ src, alt = "product_img" }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="overflow-hidden rounded-lg">
      {loading && (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}
      <img
        className={`w-full  transition-all duration-700 ease-in-out hover:scale-110 cursor-pointer ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageWithLoader;
