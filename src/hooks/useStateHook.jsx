import { useState } from "react";

const UseStateHook = () => {
  const [data, setData] = useState({ name: "Value", count: 0 });
  return (
    <div className="p-10 rounded-xl bg-emerald-400 mx-auto my-20 w-1/3 text-white text-center">
      <h3>{data.name}</h3>
      <h3 className="text-2xl font-bold">{data.count}</h3>
      <button
        className="px-4 py-2 rounded-xl bg-emerald-200 text-black font-medium cursor-pointer m-2"
        onClick={() =>
          setData((prev) => ({ name: "Increment", count: prev.count + 1 }))
        }
      >
        Increment
      </button>
      <button
        className="px-4 py-2 rounded-xl bg-emerald-200 text-black font-medium cursor-pointer m-2"
        onClick={() =>
          setData((prev) => ({ name: "Decrement", count: prev.count - 1 }))
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default UseStateHook;
