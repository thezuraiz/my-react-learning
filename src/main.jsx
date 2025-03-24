// import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { createRoot } from "react-dom/client";
// import UseFetchHook from "./hooks/customHooks/UseFetchHook";
// import UseParamHook from "./hooks/customHooks/useParamHook";
// import FormHandling from "./component/FormHandling";
// import UseStateHook from "./hooks/useStateHook";
// import UseLayoutEffect from "./hooks/useLayoutEffect";
// import CustomHook from "./component/CustomHook";
// import App from "./App.jsx";
// // import CounterAppUsingRedux from "./component/CounterAppUsingRedux.jsx";
// import { Provider } from "react-redux";

// import userStore from "./store/userRedux.jsx";
// import store from "./context/reduxStore.jsx";
// import UseCounterComponent from "./component/UseCounterComponent.jsx";
// import UseRefHook from "./hooks/useRefHook";
// import UseImperativeHandleHook from "./hooks/useImperativeHandleHook";
// import UseEffectComponent from "./props/useEffect";
// import UseContextHook from "./hooks/useContext";
// import UseReducerHook from "./hooks/useReducer";
// import UseMemoHook from "./hooks/useMemoHook";
// import UseCallBackHook from "./hooks/useCallBackHook";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Slide, ToastContainer } from "react-toastify";
// import TodoApp from "./apps/todo_app.jsx";
import CounterApp from "./apps/hoc/CounterApp.jsx";

// const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <CounterApp />
  // <BrowserRouter>
  //   {/* <Provider store={store}>
  //     <CounterAppUsingRedux />
  //   </Provider> */}

  //   {/* <UseCounterComponent /> */}
  //   {/* <UseFetchHook /> */}
  //   {/* <FormHandling /> */}
  //   {/* <UseStateHook /> */}
  //   {/* <CustomHook /> */}
  //   {/* <UseLayoutEffect /> */}
  //   {/* <UseImperativeHandleHook /> */}
  //   {/* <UseRefHook /> */}
  //   {/* <UseCallBackHook /> */}
  //   {/* <UseMemoHook /> */}
  //   {/* <UseReducerHook /> */}
  //   {/* <UseContextHook /> */}
  //   {/* <UseEffectComponent /> */}
  //   <Provider store={userStore}>
  //     <QueryClientProvider client={queryClient}>
  //       {/* <App /> */}
  //       <TodoApp />
  //       <ToastContainer
  //         position="bottom-left"
  //         autoClose={2000}
  //         hideProgressBar={false}
  //         newestOnTop
  //         closeOnClick={false}
  //         rtl={false}
  //         pauseOnFocusLoss
  //         draggable
  //         pauseOnHover
  //         theme="light"
  //         transition={Slide}
  //       />
  //       <ReactQueryDevtools initialIsOpen={false} />
  //     </QueryClientProvider>
  //   </Provider>
  // </BrowserRouter>
);
