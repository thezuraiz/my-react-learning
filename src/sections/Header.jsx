import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    console.log("Clicked" + isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={`h-full w-1/2 bg-white z-10 fixed lg:hidden transition-all ease-in-out duration-500 ${
          isOpen ? "right-0" : "-right-120"
        }`}
      >
        <div className="p-7 border-b border-gray-200">
          <button
            className="flex justify-between items-center text-xs gap-2 font-bold text-gray-500 mb-5"
            onClick={toggleSidebar}
          >
            <IoClose className="text-base" />
            Close
          </button>
          <Link to={"/"}>
            <img
              className="relative"
              src="https://dealaday-images.eu-central-1.linodeobjects.com/5309fd5b3d244d1bf1dfe116e5c49063/test1679300288.svg"
              alt=""
              height={210}
            />
          </Link>
        </div>

        <ul className="text-lg text-gray-600 font-light border-b border-gray-200 py-7">
          <li className="my-3">
            <Link to="/" className="px-5 font-medium">
              Home
            </Link>
          </li>
          <li className="my-3">
            <Link to="/products" className="px-5 font-medium">
              Products
            </Link>
          </li>
          <li className="my-3">
            <Link to="/blogs" className="px-5 font-medium">
              Blogs
            </Link>
          </li>
        </ul>
        <ul className="text-lg text-gray-800 font-bold border-b border-gray-200 py-5">
          <li className="px-5 my-3">
            <a href="#" className="flex items-center gap-4">
              <FiUser className="text-xl" />
              Accounts
            </a>
          </li>
          <li className="px-5 my-3">
            <a href="#" className="flex items-center gap-4">
              <IoMdHeartEmpty className="text-xl" />
              Favorite (0)
            </a>
          </li>
        </ul>
      </nav>
      <nav className="p-2 bg-green-500 text-white text-center text-md font-poppins">
        Get 10% off your first order.{" "}
        <a href="/" className="text-black">
          Signup here
        </a>
      </nav>

      <header className="bg-[#101828]">
        <div className=" max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mx-auto text-white flex justify-between items-center lg:pt-5 px-3 py-3">
          <Link to="/">
            <img
              className="relative"
              src="https://dealaday-images.eu-central-1.linodeobjects.com/5309fd5b3d244d1bf1dfe116e5c49063/test1679300288.svg"
              alt=""
              height={210}
            />
          </Link>
          <ul className="justify-between items-center hidden lg:flex">
            <li>
              <Link to="/" className="px-5 font-medium hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="px-5 font-medium hover:text-blue-500"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="px-5 font-medium hover:text-blue-500"
              >
                Blogs
              </Link>
            </li>
          </ul>

          <Link to="/login" className="px-5 font-medium hover:text-blue-500">
            <img src="https://dealaday.co.nz/images/icon-user.svg" alt="" />
          </Link>

          <FiMenu
            className="lg:hidden text-3xl"
            onClick={() => toggleSidebar()}
          />
        </div>
      </header>
      <section className="lg:bg-[#101828] py-4">
        <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl lg:w-1/3  border-gray-500 border-1 flex items-center mx-auto rounded-lg font-light">
          <input
            type="text"
            className="placeholder:text-gray-500 placeholder:text-sm  text-gray-500  w-full py-2 border-r px-5 focus:outline-0"
            placeholder="Search for products and brands"
          />
          <button className="text-black lg:text-white px-3 ">
            <IoSearch />
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
