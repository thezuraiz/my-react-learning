import { useContext } from "react";
import { Dark } from "../hooks/useContext";
import { User } from "../hooks/useContext";

const ThemeLayout = () => {
  const isDark = useContext(Dark);
  const userName = useContext(User);
  return (
    <div
      className={`rounded-xl p-10 mx-auto ${
        isDark ? "bg-emerald-900 text-white" : "bg-emerald-500"
      }`}
    >
      Hello {userName}
    </div>
  );
};

export default ThemeLayout;
