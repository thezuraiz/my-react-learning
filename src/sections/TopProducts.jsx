import { products } from "../constant";
import Card from "../component/card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import PropTypes from "prop-types";
const TopProducts = ({ heading }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <section className="py-2 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mx-auto my-4 ">
      <div className=" flex justify-between items-center">
        <div className="flex items-center gap-6 m-3">
          <h1 className="text-3xl font-bold">{heading}</h1>
          <h5 className="text-base font-bold underline">See All</h5>
        </div>
        <div className="md:flex gap-2 hidden">
          <button
            onClick={scrollLeft}
            className="h-10 w-10 bg-gray-300 text-white flex items-center justify-center rounded-full  transition-transform transform hover:scale-110 hover:bg-gray-700 active:scale-95"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={scrollRight}
            className="h-10 w-10 bg-gray-300 text-white flex items-center justify-center rounded-full  transition-transform transform hover:scale-110 hover:bg-gray-700 active:scale-95"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-5 p-3 lg:m-7 lg:mx-30  whitespace-nowrap scroll-smooth snap-mandatory snap-x overflow-x-auto"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {products.map((e) => (
          <Card
            key={e.name}
            {...e}
            thumbnail="https://dealaday-images.eu-central-1.linodeobjects.com/2683f10bde07984e524f91f1dcd1d7d5/U-2411.jpeg"
          />
        ))}
      </div>
    </section>
  );
};
TopProducts.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default TopProducts;
