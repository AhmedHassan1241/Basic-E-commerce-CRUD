import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Side from "./components/Side";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import DetailsProduct from "./Pages/DetailsProduct";
import EditProduct from "./Pages/EditProduct";

function App() {
  return (
    <>
      <Nav />
      <div className="row">
        <div className="col-2 sidebar">
          {" "}
          <Side />{" "}
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:productId" element={<DetailsProduct />} />
            <Route path="/products/edit/:productId" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
