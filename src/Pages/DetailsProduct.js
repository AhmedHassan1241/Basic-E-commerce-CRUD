import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProduct = () => {
  const urL = "http://localhost:9000/products";
  let { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`${urL}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return (
    <>
      <div className="card h-100 w-auto" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top mt-4"
          alt="..."
          style={{ maxHeight: "400px", maxWidth: "400px", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="">
            <b>Name : </b>
            {product.name}
          </h5>
          <p className="">
            <b>Description :</b> {product.description}
          </p>
          <p className="">
            <b>Price : </b>
            {product.price}
          </p>
          <p className="">
            <b>Category : </b>
            {product.category}
          </p>
          <p className="d-flex align-items-center mb-2">
          <strong>Sizes:</strong>
          {product.sizes && product.sizes.length > 0 ? (
            <ul className="d-flex justify-content-around w-25 list-unstyled mb-0">
              [{product.sizes.map((size, index) => (
                <li key={index} className="card-text mx-2 bg-info p-1 rounded-2">
                  {size}
                </li>
              ))}]
            </ul>
          ) : (
            <span className="ml-2">No sizes available.</span>
          )}
        </p>
        <p className="d-flex align-items-center">
          <strong>Colors :</strong>
          {product.colors && product.colors.length > 0 ? (
            <ul className="d-flex justify-content-around w-25 list-unstyled mb-0">
              [{product.colors.map((color, index) => (
                <li key={index} className="card-text mx-2 bg-info p-1 rounded-2">
                  {color}
                </li>
              ))}]
            </ul>
          ) : (
            <span className="ml-2">No Color available.</span>
          )}
        </p>
        <p><strong>Rating : </strong>{product.rating}</p>
        <p><strong>Brand : </strong>{product.brand}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
