import { useRef } from "react";
import UseImperativeComponent from "../component/UseImperativeComponent";

const UseImperativeHandleHook = () => {
  console.log("Re rendered");
  let ref = useRef();
  return (
    <div>
      <UseImperativeComponent ref={ref} />
      <button
        onClick={() => {
          ref.current.increment();
        }}
      >
        Increment from parent
      </button>
    </div>
  );
};

export default UseImperativeHandleHook;
