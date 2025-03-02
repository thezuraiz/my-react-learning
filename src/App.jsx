import Header from "./sections/header";
import Footer from "./sections/footer";
import Home from "./pages/home";
import Blogs from "./pages/Blogs";
import ProductPage from "./pages/products";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/authentication/login";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";
  const isLogin = window.localStorage.getItem("isLogin");
  console.log("---->", isLogin);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
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
          element={isLogin === true ? <Navigate to="/" /> : <Login />}
        />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
