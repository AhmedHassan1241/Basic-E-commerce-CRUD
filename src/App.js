import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Side from "./components/Side";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import DetailsProduct from "./Pages/DetailsProduct";
import EditProduct from "./Pages/EditProduct";
import Categories from './Pages/Categories';
import CatDetails from "./Pages/CatDetails";
import AddCat from "./Pages/AddCat";
import CatEdit from "./Pages/CatEdit";


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
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productId" element={<DetailsProduct />} />
              <Route path="edit/:productId" element={<EditProduct />} />
            </Route>
            <Route path="/categories" element={<Outlet />}>
              <Route path="" element={<Categories />} />
              <Route path=":catID" element={<CatDetails/>} />
              <Route path="add" element={<AddCat/>} />
              <Route path="edit/:catID" element={<CatEdit/>} />

            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
