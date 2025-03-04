import Header from "./sections/header";
import Footer from "./sections/footer";

import Blogs from "./pages/Blogs";
import ProductPage from "./pages/products";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import UseParamHook from "./hooks/customHooks/useParamHook";
import Home from "./pages/Home";

import LoginUsinAuthentication from "./pages/authentication/LoginUsinAuthentication";
import UserProvider from "./context/UserContext";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";
  const isLogin = window.localStorage.getItem("isLogin");
  console.log("---->", isLogin);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/users/:id" element={<UseParamHook />} />

          <Route
            path="products"
            element={
              isLogin === true ? (
                <ProductPage />
              ) : (
                <Navigate to="/login" replace={false} />
              )
            }
          />
          <Route
            path="login"
            element={
              isLogin === true ? (
                <Navigate to="/" />
              ) : (
                <LoginUsinAuthentication />
              )
            }
          />
        </Routes>
      </UserProvider>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
