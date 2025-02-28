import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { products } from "../constant";
import Card from "../component/card";
const ProductPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFiltersBar = () => {
    console.log("Clicked " + filterOpen);
    setFilterOpen(!filterOpen);
  };
  return (
    <>
      <nav
        className={` p-5 lg:hidden fixed h-screen bg-white w-1/2 sm:w-1/3 z-10 transition-all ease-in-out duration-500 top-0 ${
          filterOpen ? "right-0" : "-right-120"
        } `}
      >
        <button
          className="flex justify-between items-center text-xs gap-2 font-bold text-gray-500 mb-5"
          onClick={toggleFiltersBar}
        >
          <IoClose className="text-base" />
          Close
        </button>

        <h4 className="font-semibold mb-4">Categories</h4>
        <ul>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light " htmlFor="">
              Pet Products
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Travelling
            </label>
          </li>

          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Pet Products
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Travelling
            </label>
          </li>

          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Pet Products
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Travelling
            </label>
          </li>

          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Pet Products
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Travelling
            </label>
          </li>

          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Pet Products
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Travelling
            </label>
          </li>

          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Pet Products
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label className="ml-4 font-light" htmlFor="">
              Travelling
            </label>
          </li>
        </ul>
      </nav>
      <main className="mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl my-8 transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-start sm:flex-row gap-2 justify-between sm:items-center mb-5">
          <h1 className="text-3xl font-bold">All Products</h1>
          <div className="flex gap-5">
            <div className="border border-gray-200 rounded-lg  px-4 lg:px-2 py-2 lg:py-1 flex lg:hidden">
              <h5
                className="font-normal flex justify-center items-center gap-2"
                onClick={toggleFiltersBar}
              >
                <CiFilter />
                Filter
              </h5>
            </div>
            <div className="border border-gray-200 rounded-lg px-3 lg:px-2 py-2 lg:py-1">
              <select name="cars" id="cars">
                <option value="volvo">Default</option>
                <option value="saab">Recently Added</option>
                <option value="mercedes">Price: Low to High</option>
                <option value="audi">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <section className="grid my-5 lg:grid-cols-4 gap-5 grid-cols-3">
          <div className="border border-gray-200 rounded-2xl p-8 lg:block hidden ">
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light " htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>
            </ul>
            <h4 className="font-semibold my-4">Brands</h4>
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light " htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>

              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Pet Products
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label className="ml-4 font-light" htmlFor="">
                  Travelling
                </label>
              </li>
            </ul>
            <h4 className="font-semibold my-4">Price Range</h4>
            <input type="range" className="w-full" />
          </div>
          <div className="col-span-3 border-gray-400 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-5">
            {products.map((e) => (
              <Card key={e.name} {...e} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
