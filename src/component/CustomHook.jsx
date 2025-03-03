import { useState } from "react";
import UseLoggerCustomHook from "../hooks/customHooks/useLoggerCustomHook";

const CustomHook = () => {
  const [input, setInput] = useState("");
  UseLoggerCustomHook(input);
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
