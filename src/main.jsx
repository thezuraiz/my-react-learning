import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import UseLayoutEffect from "./hooks/useLayoutEffect";
import CustomHook from "./component/CustomHook";
// import App from "./App.jsx";
// import UseRefHook from "./hooks/useRefHook";
// import UseImperativeHandleHook from "./hooks/useImperativeHandleHook";
// import UseEffectComponent from "./props/useEffect";
// import UseContextHook from "./hooks/useContext";
// import UseReducerHook from "./hooks/useReducer";
// import UseMemoHook from "./hooks/useMemoHook";
// import UseCallBackHook from "./hooks/useCallBackHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomHook />
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeHandleHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseEffectComponent /> */}
      {/* <App />useEffectComponent*/}
    </BrowserRouter>
  </StrictMode>
);
