import Header from "./sections/header";
import Footer from "./sections/footer";

import Blogs from "./pages/Blogs";
import ProductPage from "./pages/products";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import UseParamHook from "./hooks/customHooks/useParamHook";
import Home from "./pages/Home";

import LoginUsinAuthentication from "./pages/authentication/LoginUsinAuthentication";
import UserProvider from "./context/UserContext";
import { useEffect } from "react";
import Product from "./sections/Product";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";
  let isLogin = false;
  useEffect(() => {
    const user = localStorage.getItem("userProfile");
    const accessToken = user ? JSON.parse(user).accessToken : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isLogin = !!accessToken;
    console.log("---->", isLogin);
  });

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/users/:id" element={<UseParamHook />} />

          <Route path="products" element={<ProductPage />} />
          <Route
            path="login"
            element={
              !isLogin ? <Navigate to="/" /> : <LoginUsinAuthentication />
            }
          />
        </Routes>
      </UserProvider>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
