import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import UseEffectComponent from "./props/useEffect";
// import UseContextHook from "./hooks/useContext";
// import UseReducerHook from "./hooks/useReducer";
import UseMemoHook from "./hooks/useMemoHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UseMemoHook />
      {/* <UseReducerHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseEffectComponent /> */}
      {/* <App />useEffectComponent*/}
    </BrowserRouter>
  </StrictMode>
);
