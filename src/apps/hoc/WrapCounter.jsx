import { useState } from "react";

const WrapCounter = (OldComponent) => {
  return function CounterApp(props) {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount((prev) => prev + 2);
    };

    return <OldComponent count={count} handleCount={handleCount} {...props} />;
  };
};

export default WrapCounter;
