import { useDispatch, useSelector } from "react-redux";

const CounterAppUsingRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-1/3 mx-auto my-10 p-5 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center gap-3">
        <h1>Counter App</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="px-3 py-1 rounded-lg bg-emerald-500 cursor-pointer text-white"
          >
            +
          </button>
          <span className="text-black font-medium text-3xl">{count}</span>
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="px-3 py-1 rounded-lg bg-emerald-500 cursor-pointer text-white"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterAppUsingRedux;
