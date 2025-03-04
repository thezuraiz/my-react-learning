import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { createRoot } from "react-dom/client";
// import UseFetchHook from "./hooks/customHooks/UseFetchHook";
// import UseParamHook from "./hooks/customHooks/useParamHook";
// import FormHandling from "./component/FormHandling";
// import UseStateHook from "./hooks/useStateHook";
// import UseLayoutEffect from "./hooks/useLayoutEffect";
// import CustomHook from "./component/CustomHook";
import App from "./App.jsx";
// import UseCounterComponent from "./component/UseCounterComponent.jsx";
// import UseRefHook from "./hooks/useRefHook";
// import UseImperativeHandleHook from "./hooks/useImperativeHandleHook";
// import UseEffectComponent from "./props/useEffect";
// import UseContextHook from "./hooks/useContext";
// import UseReducerHook from "./hooks/useReducer";
// import UseMemoHook from "./hooks/useMemoHook";
// import UseCallBackHook from "./hooks/useCallBackHook";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <UseCounterComponent /> */}
    {/* <UseFetchHook /> */}
    {/* <FormHandling /> */}
    {/* <UseStateHook /> */}
    {/* <CustomHook /> */}
    {/* <UseLayoutEffect /> */}
    {/* <UseImperativeHandleHook /> */}
    {/* <UseRefHook /> */}
    {/* <UseCallBackHook /> */}
    {/* <UseMemoHook /> */}
    {/* <UseReducerHook /> */}
    {/* <UseContextHook /> */}
    {/* <UseEffectComponent /> */}

    <App />
  </BrowserRouter>
);
