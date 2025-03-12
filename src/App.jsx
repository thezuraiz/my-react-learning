import Header from "./sections/Header";
import Footer from "./sections/footer";

import Blogs from "./pages/Blogs";
import ProductPage from "./pages/Products";
import { Routes, Route, useLocation } from "react-router-dom";

import UseParamHook from "./hooks/customHooks/useParamHook";
import Home from "./pages/Home";
import Product from "./sections/Product";
import Login from "./pages/authentication/login";
import ProtectedRoute from "./component/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<ProtectedRoute Component={Blogs} />} />

        <Route path="/products/:id" element={<Product />} />
        <Route path="/users/:id" element={<UseParamHook />} />

        <Route path="products" element={<ProductPage />} />
        <Route path="login" element={<Login />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
