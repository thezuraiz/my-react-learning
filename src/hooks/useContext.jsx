import ThemeLayout from "../sections/themeLayout";
import { createContext, useState } from "react";

const Dark = createContext();
const User = createContext();
const UseContextHook = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsDark((e) => !e)}
        className="px-5 py-2 rounded-lg font-bold cursor-pointer bg-green-500 m-5"
      >
        {isDark ? "Dark" : "Light"}
      </button>
      <Dark.Provider value={isDark}>
        <User.Provider value="Zuraiz Khan">
          <ThemeLayout />
        </User.Provider>
      </Dark.Provider>
    </>
  );
};

export default UseContextHook;
export { Dark, User };
