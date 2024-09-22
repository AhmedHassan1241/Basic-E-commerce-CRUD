import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const UrlJson = "http://localhost:9000/products";
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch(`${UrlJson}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };

   function deleteProduct(product) {
    Swal.fire({
      title: `Are You Sure To Delete:${product.name}"?`,
      showCancelButton:true
    }).then((data)=>{
        if(data.isConfirmed){
             fetch(`${UrlJson}/${product.id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then(() => getAllProducts());
        }
    })
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="ms-1">
      <h1>Products Page</h1>
      <Link className="btn btn-success" to={"/products/add"}>
        Add New Product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id} className="">
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description.slice(0, 20)} ...</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-1"
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info btn-sm m-1"
                    to={`/products/${product.id}`}
                  >
                    View
                  </Link>
                  <Link className="btn btn-primary btn-sm m-1" to={`/products/edit/${product.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
