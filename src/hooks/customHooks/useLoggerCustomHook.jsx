import { useEffect } from "react";

function UseLoggerCustomHook(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
export default UseLoggerCustomHook;
