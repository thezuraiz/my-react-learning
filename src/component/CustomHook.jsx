import { useState } from "react";
import UseLoggerCustomHook from "../hooks/customHooks/useLoggerCustomHook";

const CustomHook = () => {
  const [input, setInput] = useState("");
  UseLoggerCustomHook(input);
  // This custom hook logs the input value to the console, visible in React DevTools and only work in custom hooks
  return (
    <div className="m-10 flex gap-10 items-center bg-emerald-500 p-5 rounded-xl text-white">
      <label>Enter Email</label>
      <input
        type="text"
        className="rounded-lg border m-5 px-3 py-1"
        placeholder="Email"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default CustomHook;
