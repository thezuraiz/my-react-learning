import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ApiLoader from "../component/Loader";
import Breadcrumb from "../component/BreadCrumb";
import TopProducts from "./TopProducts";

import { FaRegStar } from "react-icons/fa";

const Product = () => {
  const params = useParams();

  const id = params.id;
  let fetchProducts = async () => {
    let products = await axios.get(`https://dummyjson.com/products/${id}`);
    return products.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });
  let products = async (newProduct) => {
    await axios.put(`https://dummyjson.com/products/${id}`, newProduct);
    return products.data;
  };
  let mutation = useMutation({
    mutationFn: products,
    onMutate: async (newProduct) => {
      console.log("onMutate", newProduct);

      // let products = await axios.put(
      //   `https://dummyjson.com/products/${id}`,
      //   newProduct
      // );
      return newProduct;
    },
  });

  if (isLoading)
    return (
      <div className="h-1/3 container mx-auto text-center p-10">
        <ApiLoader />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  if (mutation.isLoading)
    return (
      <div className="h-1/3 container mx-auto text-center p-10">
        <ApiLoader />
      </div>
    );

  if (mutation.isError)
    return "An error has occurred: " + mutation.error.message;

  return (
    <>
      <Breadcrumb />
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mx-auto py-10">
        <h3 className="text-4xl">{data.title}</h3>
        <ul className="flex my-4 gap-3 text-sm">
          <li>
            Brand:
            <span className="text-blue-300"> {data.brand}</span>
          </li>
          <li className="border-l border-gray-300 px-3">
            SKU: <span>{data.sku}</span>
          </li>
        </ul>

        <div className="flex justify-between p-3 gap-3 items-stretch flex-col sm:flex-row">
          <div className="border border-gray-200 rounded-xl w-full">
            <img
              src={data.thumbnail}
              alt=""
              width={500}
              className="object-cover  hover:scale-110 transition-all duration-500 ease-in-out mx-auto h-full"
            />
          </div>
          <div className="border border-gray-200 rounded-xl w-full p-5 flex justify-around flex-col">
            <h5 className="text-4xl font-bold text-blue-500 mb-3">
              $
              {Math.round(
                data.price - (data.discountPercentage / 100) * data.price
              )}
              <span className="text-2xl font-semibold text-gray-500 line-through ml-2">
                ${data.price}
              </span>
            </h5>
            <hr className=" text-gray-200" />
            <span>
              <h3 className="text-lg font-semibold my-2">
                Category:
                <span className="text-base font-normal mx-1">
                  {data.category}
                </span>
              </h3>
              <h3 className="text-lg font-semibold my-2 flex items-center">
                Ratings:
                <span className="text-base font-normal mx-1 items-center">
                  {data.rating} <FaRegStar className="inline text-center" />
                </span>
              </h3>
              <h3 className="text-lg font-semibold my-2">
                In Stock:
                <span className="text-base font-normal mx-1">{data.stock}</span>
              </h3>
              <h3 className="text-lg font-semibold my-2">
                Tags:
                <span className="text-base font-normal mx-1">
                  {data.tags.map((e, index) => {
                    return (
                      <span key={e}>
                        {e}
                        {index < data.tags.length - 1 && ", "}
                      </span>
                    );
                  })}
                </span>
              </h3>
            </span>
            <hr className=" text-gray-200" />
            <span>
              <h3 className="text-2xl font-semibold my-4">Desciption</h3>
              <p className="text-base">{data.description}</p>
            </span>
            <hr className=" text-gray-200" />
            <span className="flex justify-around gap-3 mt-2">
              <button
                className="rounded-lg text-white px-8 font-medium py-2 bg-amber-500 cursor-pointer "
                onClick={() => {
                  let body = {
                    title: "",
                    description: "",
                    price: 0,
                    stock: 0,
                    rating: 0,
                    discountPercentage: 0,
                    category: "",
                    tags: [],
                    brand: "",
                    sku: "",
                    thumbnail: "",
                  };
                  mutation.mutate(body);
                }}
              >
                Add to Cart
                {mutation.isPending && <ApiLoader isexpended={false} />}
              </button>
              <button className="rounded-lg text-white px-8 font-medium py-2 bg-emerald-400 cursor-pointer ">
                Check Out
              </button>
            </span>
          </div>
        </div>
      </div>
      <TopProducts heading="Most Popular" />
    </>
  );
};

export default Product;
