import { useDebugValue, useEffect } from "react";

const UseDebugHook = (value) => {
  useDebugValue(`value: ${value}`);
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default UseDebugHook;
