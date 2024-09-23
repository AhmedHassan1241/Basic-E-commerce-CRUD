import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "Non",
    price: 0,
    image: "wwww",
    description: "",
    category: "",
    categoryId:"",
    sizes: 0,
    colors: "Red",
    rating: 4.8,
    brand: "adidas",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/products", {
        // id:50,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
        categoryId:product.categoryId,
        sizes: product.sizes,
        colors: product.categoryo,
        rating: product.rating,
        brand: product.brand,
    })
      .then((data) => {console.log(data)
        navigate('/products')
      });
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <form onSubmit={formSubmit}>
        {/* <div className="mb-3">
          <label htmlFor="productID" className="form-label">
            Product ID
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, id: e.target.value });
            }}
            type="number"
            className="form-control"
            id="productID"
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
            type="number"
            className="form-control"
            id="productPrice"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Product Image Link
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, image: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productImage"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Product Description
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productDesc"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCat" className="form-label">
            Product Category
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, category: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productCat"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCatID" className="form-label">
            Product CategoryID
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, categoryId: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productCatID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductSize" className="form-label">
            Product Size
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, sizes: e.target.value });
            }}
            type="text"
            className="form-control"
            id="ProductSize"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productColor" className="form-label">
            Product Color
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, colors: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productColor"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productRate" className="form-label">
            Product Rating
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, ration: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productRate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productBrand" className="form-label">
            Product Brand
          </label>
          <input
            onChange={(e) => {
              setProduct({ ...product, brand: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productBrand"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
