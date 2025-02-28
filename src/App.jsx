import Header from "./sections/header";
import Footer from "./sections/footer";
import Home from "./pages/home";
import Blogs from "./pages/Blogs";
import ProductPage from "./pages/products";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/authentication/login";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="login" element={<Login />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
