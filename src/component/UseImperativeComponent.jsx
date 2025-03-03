import { forwardRef, useImperativeHandle, useState } from "react";

const UseImperativeComponent = forwardRef((props, ref) => {
  const [value, setValue] = useState(0);

  function increment() {
    setValue((prev) => prev + 1);
  }

  useImperativeHandle(ref, () => ({
    increment, // Correctly exposing the function
  }));

  return (
    <div className="flex m-5 gap-5">
      <h3>{value}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

UseImperativeComponent.displayName = "UseImperativeComponent";

export default UseImperativeComponent;
