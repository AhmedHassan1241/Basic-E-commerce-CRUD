import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  let { productId } = useParams();
  let navigate = useNavigate();
  const urL = "http://localhost:9000/products";
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get(`${urL}/${productId}`).then((res) => setProduct(res.data));
  }, [productId]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${urL}/${productId}`, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
        sizes: product.sizes,
        colors: product.colors,
        rating: product.rating,
        brand: product.brand,
      })
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };

  return (
    <>
    <div className="text-center p-3 bg-danger-subtle rounded-3">
    <h1>Edit Product : "{product.name}"</h1>
    </div>
    <div className="w-50 mx-auto mt-3"> 
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productID" className="form-label">
            Product ID
          </label>
          <input
            value={product.id}
            onChange={(e) => {
              setProduct({ ...product, id: e.target.value });
            }}
            type="number"
            className="form-control"
            id="productID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            value={product.name}
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
            value={product.price}
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
            value={product.image}
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
            value={product.description}
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
            value={product.category}
            onChange={(e) => {
              setProduct({ ...product, category: e.target.value });
            }}
            type="text"
            className="form-control"
            id="productCat"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductSize" className="form-label">
            Product Size
          </label>
          <input
            value={product.sizes}
            onChange={(e) => {
                const sizesString = e.target.value;
                const sizesArray = sizesString.split(",");
              setProduct({ ...product, sizes: sizesArray});
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
            value={product.colors}
            onChange={(e) => {
                const colorString=e.target.value
                ;
                const colorsArray= colorString.split(",")
              setProduct({ ...product, colors: colorsArray });
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
                    value={product.rating}
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
                    value={product.brand}
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
    </>
  );
}

export default EditProduct;
