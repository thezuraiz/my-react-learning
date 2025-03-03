/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import NavBar from "../component/NavBar";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [counttwo, setCountTwo] = useState(10);
  const increment = useCallback(() => {
    return "Count: " + count;
  }, [
    counttwo, // If I un comment countTwo! It will rerender
  ]);
  return (
    <div>
      {/* The NavBar component is memoized and will only re-render when its props change */}
      {/* <NavBar abc={123} /> */}
      {/* But know Function is rerendering! */}
      <NavBar increment={increment} />
      {/* Now its not rerender due to useCallBack it memorize it */}
      <h3>Count: {count}</h3>
      <div>
        <button
          className="px-5 py-2 bg-emerald-600 rounded-xl m-4 text-white cursor-pointer"
          onClick={() => setCount((e) => e + 1)}
        >
          Increment
        </button>
        <button
          className="px-5 py-2 bg-emerald-600 rounded-xl m-4 text-white cursor-pointer"
          onClick={() => setCount((e) => e - 1)}
        >
          Decrement
        </button>
      </div>
      <button
        className="px-5 py-2 bg-emerald-600 rounded-xl m-4 text-white cursor-pointer"
        onClick={() => setCountTwo((e) => e - 1)}
      >
        Decrement Two {counttwo}
      </button>
    </div>
  );
};

export default UseCallBackHook;
