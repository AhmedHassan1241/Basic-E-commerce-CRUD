import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCat() {
  const navigate = useNavigate();

  // State for Category
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });

  // State for Products - Array to handle multiple products
  const [products, setProducts] = useState([
    {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
      category: "",
      sizes: "",
      colors: "",
      rating: "",
      brand: "",
    },
  ]);

  // Handler for Category Input Changes
  const handleCategoryChange = (e) => {
    const { id, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [id]: value,
    }));
  };

  // Handler for Product Input Changes
  const handleProductChange = (index, e) => {
    const { id, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index][id] = value;
    setProducts(updatedProducts);
  };

  // Handler to Add a New Product Field
  const addProductField = () => {
    setProducts([
      ...products,
      {
        id: "",
        name: "",
        price: "",
        image: "",
        description: "",
        category: "",
        sizes: "",
        colors: "",
        rating: "",
        brand: "",
      },
    ]);
  };

  // Handler to Remove a Product Field
  const removeProductField = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  // Form Submission Handler
  const formSubmit = (e) => {
    e.preventDefault();

    // Validate Category Fields
    if (!category.id || !category.name) {
      alert("Please fill out all category fields.");
      return;
    }

    // Validate Products Fields
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (
        !product.id ||
        !product.name ||
        !product.price ||
        !product.image ||
        !product.description ||
        !product.category ||
        !product.sizes ||
        !product.colors ||
        !product.rating ||
        !product.brand
      ) {
        alert(`Please fill out all fields for product ${i + 1}.`);
        return;
      }
    }

    // Prepare Products Array with sizes and colors as arrays
    const formattedProducts = products.map((prod) => ({
      id: prod.id,
      name: prod.name,
      price: parseFloat(prod.price),
      image: prod.image,
      description: prod.description,
      category: prod.category,
      sizes: prod.sizes.split(",").map((size) => size.trim()),
      colors: prod.colors.split(",").map((color) => color.trim()),
      rating: parseFloat(prod.rating),
      brand: prod.brand,
    }));

    // Prepare the payload
    const payload = {
      ...category,
      products: formattedProducts,
    };

    // POST request to add category with products
    axios
      .post("http://localhost:9000/categories", payload)
      .then((response) => {
        console.log("Category Added:", response.data);
        navigate("/categories");
      })
      .catch((error) => {
        console.error("There was an error adding the category!", error);
        alert("Failed to add category. Please try again.");
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New Category</h2>
      <form onSubmit={formSubmit}>
        {/* Category Details */}
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Category ID
          </label>
          <input
            onChange={handleCategoryChange}
            type="number"
            className="form-control"
            id="id"
            value={category.id}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Category Name
          </label>
          <input
            onChange={handleCategoryChange}
            type="text"
            className="form-control"
            id="name"
            value={category.name}
            required
          />
        </div>

        {/* Products Details */}
        <h4 className="mt-4">Products</h4>
        {products.map((product, index) => (
          <div key={index} className="border p-3 mb-4">
            <h5>Product {index + 1}</h5>
            <div className="mb-3">
              <label htmlFor={`product-id-${index}`} className="form-label">
                Product ID
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="number"
                className="form-control"
                id="id"
                value={product.id}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-name-${index}`} className="form-label">
                Product Name
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                className="form-control"
                id="name"
                value={product.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-price-${index}`} className="form-label">
                Product Price
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="number"
                className="form-control"
                id="price"
                value={product.price}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-image-${index}`} className="form-label">
                Product Image URL
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                className="form-control"
                id="image"
                value={product.image}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-desc-${index}`} className="form-label">
                Product Description
              </label>
              <textarea
                onChange={(e) => handleProductChange(index, e)}
                className="form-control"
                id="description"
                rows="3"
                value={product.description}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor={`product-category-${index}`} className="form-label">
                Product Category
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                className="form-control"
                id="category"
                value={product.category}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-sizes-${index}`} className="form-label">
                Product Sizes (comma separated)
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                className="form-control"
                id="sizes"
                value={product.sizes}
                placeholder="e.g., S, M, L, XL"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-colors-${index}`} className="form-label">
                Product Colors (comma separated)
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                className="form-control"
                id="colors"
                value={product.colors}
                placeholder="e.g., Red, Blue, Green"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-rating-${index}`} className="form-label">
                Product Rating
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                step="0.1"
                min="0"
                max="5"
                className="form-control"
                id="rating"
                value={product.rating}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-brand-${index}`} className="form-label">
                Product Brand
              </label>
              <input
                onChange={(e) => handleProductChange(index, e)}
                type="text"
                className="form-control"
                id="brand"
                value={product.brand}
                required
              />
            </div>

            {/* Button to Remove Product Field */}
            {products.length > 1 && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeProductField(index)}
              >
                Remove Product
              </button>
            )}
          </div>
        ))}

        {/* Button to Add New Product Field */}
        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addProductField}
        >
          Add Another Product
        </button>

        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCat;
