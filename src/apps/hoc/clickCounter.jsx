/* eslint-disable react/prop-types */

import WrapCounter from "./WrapCounter";

const ClickCounter = (props) => {
  let { count, handleCount } = props;
  return (
    <div className="p-5 m-5 mx-auto bg-slate-200 container text-center rounded-xl">
      <h3>{count}</h3>
      <button
        onClick={handleCount}
        className="rounded-lg px-4 py-1.5 bg-yellow-50 cursor-pointer mt-5"
      >
        Click Me
      </button>
    </div>
  );
};

export default WrapCounter(ClickCounter);
