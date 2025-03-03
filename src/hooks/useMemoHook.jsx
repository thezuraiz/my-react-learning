import { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  function increment() {
    setCounterOne((prev) => prev + 1);
  }

  function decrement() {
    setCounterTwo((e) => e - 1);
  }

  let isEven = useMemo(() => {
    for (let i = 0; i < 900000000; i++) {}
    return counterOne % 2 == 0;
  }, [counterOne]);
  return (
    <div className="w-1/4 mx-auto bg-red-200 m-5 p-5 rounded-lg">
      <h3 className="font-medium text-center text-2xl">
        Count One: {isEven ? "Even" : "Odd"}{" "}
      </h3>
      <div className="flex justify-between items-center">
        <button
          className="px-4 py-2 rounded-xl bg-green-500 m-5 cursor-pointer border "
          onClick={increment}
        >
          Increment: {counterOne}
        </button>
        <button
          className="px-4 py-2 rounded-xl bg-green-500 m-5 cursor-pointer border "
          onClick={decrement}
        >
          Decrement: {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default UseMemoHook;
