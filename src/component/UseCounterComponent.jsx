import useCounter from "../hooks/customHooks/useCounter";

const UseCounterComponent = () => {
  const [counter, increment, decrement] = useCounter(0, 10);
  return (
    <div className="h-screen flex justify-between items-center">
      <div className="rounded-xl container bg-emerald-400 h-1/3 mx-auto w-1/3 p-10 text-center">
        <h3 className="font-medium text-white text-5xl">Count: {counter}</h3>
        <div className="flex gap-10 justify-evenly items-center mt-5">
          <button
            className="font-medium text-white text-5xl cursor-pointer"
            onClick={increment}
          >
            +
          </button>
          <button
            className="font-medium text-white text-5xl cursor-pointer"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseCounterComponent;
