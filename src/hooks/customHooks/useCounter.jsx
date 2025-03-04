import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
  //   console.log("IV: ", step, initialValue);
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  return [count, increment, decrement];
};

export default useCounter;
