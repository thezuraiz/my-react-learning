import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  let ref = useRef();
  useEffect(() => {
    console.log("Render by Use Effect");
  }, []);

  useLayoutEffect(() => {
    console.log("Render by Use Layout");
    ref.current.style.backgroundColor = "yellow";
    ref.current.style.color = "black";
    console.log(ref.current.style.backgroundColor);
    // It render before printing this function
  }, []);

  return (
    <div className="p-5 bg-emerald-500 rounded-xl m-5 text-white" ref={ref}>
      Use Layout Effect
    </div>
  );
};

export default UseLayoutEffect;
