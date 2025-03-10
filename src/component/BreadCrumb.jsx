import { Link, useLocation } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";
const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div className="bg-gray-100 ">
      <nav className="flex space-x-2 text-gray-700 text-sm py-3 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mx-auto font-medium">
        <Link to="/" className="">
          Home
        </Link>
        {paths.map((path, index) => {
          const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <span key={index} className="flex items-center">
              <span className="mx-2">
                <TbMathGreater />
              </span>
              <Link to={fullPath} className=" capitalize font-medium">
                {decodeURIComponent(path)}
              </Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
