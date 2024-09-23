// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function CatEdit() {
//   const navigate = useNavigate();

//   const{catID} = useParams();
//   const cat = async() => {
//     await axios.get(`http://localhost:9000/categories/${catID}`).then((res) => {
//         setProducts(res.data.products);
//         setCategory(res.data);

//         console.log(res.data);
        
//     });
//    };

//    useEffect(() => {
//     cat()
//    }, []);
//   // State for Category
//   const [category, setCategory] = useState({
//     id: "",
//     name: "",
//   });

//   // State for Products - Array to handle multiple products
//   const [products, setProducts] = useState([
//     {
//       id: "",
//       name: "",
//       price: "",
//       image: "",
//       description: "",
//       category: "",
//       sizes: "",
//       colors: "",
//       rating: "",
//       brand: "",
//     },
//   ]);

//   // Handler for Category Input Changes
//   const handleCategoryChange = (e) => {
//     const { name, value } = e.target;
//     setCategory((prevCategory) => ({
//       ...prevCategory,
//       [name]: value,
//     }));
//   };

//   // Handler for Product Input Changes
//   const handleProductChange = (index, e) => {
//     const { id, value } = e.target;
//     const updatedProducts = [...products];

//     updatedProducts[index][id] = value;
//     setProducts(updatedProducts);
//   };



//   // Handler to Remove a Product Field
//   const removeProductField = (index) => {
//     const updatedProducts = products.filter((_, i) => i !== index);
//     setProducts(updatedProducts);
//   };

//   // Form Submission Handler
//   const formSubmit = (e) => {
//     e.preventDefault();

   
//     // Prepare Products Array with sizes and colors as arrays
//     const formattedProducts = products.map((prod) => ({
//       id: prod.id,
//       name: prod.name,
//       price: parseFloat(prod.price),
//       image: prod.image,
//       description: prod.description,
//       category: prod.category,
//       sizes: prod.sizes,
//       colors: prod.colors,
//       rating: parseFloat(prod.rating),
//       brand: prod.brand,
//     }));

//     // Prepare the payload
//     const payload = {
//       ...category,
//       products: formattedProducts,
//     };

//     // POST request to add category with products
//     axios
//       .put(`http://localhost:9000/categories/${catID}`, payload)
//       .then((response) => {
//         console.log("Category Added:", response.data);
//         navigate("/categories");
//       })
//       .catch((error) => {
//         console.error("There was an error adding the category!", error);
//         alert("Failed to add category. Please try again.");
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Add New Category</h2>
//       <form onSubmit={formSubmit}>
//         {/* Category Details */}
//         <div className="mb-3">
//           <label htmlFor="category-id" className="form-label">
//             Category ID
//           </label>
//           <input
//             onChange={(e)=>handleCategoryChange(e)}
//             type="number"
//             className="form-control"
//             id="category-id"
//             name="id"
//             value={category.id}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="category-name" className="form-label">
//             Category Name
//           </label>
//           <input
//             onChange={(e)=>handleCategoryChange(e)}
//             type="text"
//             className="form-control"
//             id="category-id"
//             name="name"
//             value={category.name}
//             required
//           />
//         </div>

//         {/* Products Details */}
//         <h4 className="mt-4">Products</h4>
//         {products.map((product, index) => (
//           <div key={index} className="border p-3 mb-4">
//             <h5>Product {index + 1}</h5>
//             <div className="mb-3">
//               <label htmlFor={`product-id-${index}`} className="form-label">
//                 Product ID
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="number"
//                 className="form-control"
//                 id="id"
//                 value={product.id}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-name-${index}`} className="form-label">
//                 Product Name
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 value={product.name}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-price-${index}`} className="form-label">
//                 Product Price
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="number"
//                 className="form-control"
//                 id="price"
//                 value={product.price}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-image-${index}`} className="form-label">
//                 Product Image URL
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="text"
//                 className="form-control"
//                 id="image"
//                 value={product.image}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-desc-${index}`} className="form-label">
//                 Product Description
//               </label>
//               <textarea
//                 onChange={(e) => handleProductChange(index, e)}
//                 className="form-control"
//                 id="description"
//                 rows="3"
//                 value={product.description}
//                 required
//               ></textarea>
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-category-${index}`} className="form-label">
//                 Product Category
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="text"
//                 className="form-control"
//                 id="category"
//                 value={product.category}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-sizes-${index}`} className="form-label">
//                 Product Sizes (comma separated)
//               </label>
//               <input
//                 onChange={(e) => {
//                 const sizesString = e.target.value;
//                 const sizesArray = sizesString.split(",");
//               setProducts({ ...product, sizes: sizesArray});
//             }}
//                 type="text"
//                 className="form-control"
//                 id="sizes"
//                 value={product.sizes}
//                 placeholder="e.g., S, M, L, XL"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-colors-${index}`} className="form-label">
//                 Product Colors (comma separated)
//               </label>
//               <input
//                  onChange={(e) => {
//                 const colorsString = e.target.value;
//                 const colorsArray = colorsString.split(",");
//               setProducts({ ...product, colors: colorsArray});
//             }}
//                 type="text"
//                 className="form-control"
//                 id="colors"
//                 value={product.colors}
//                 placeholder="e.g., Red, Blue, Green"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-rating-${index}`} className="form-label">
//                 Product Rating
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="text"
//                 step="0.1"
//                 min="0"
//                 max="5"
//                 className="form-control"
//                 id="rating"
//                 value={product.rating}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor={`product-brand-${index}`} className="form-label">
//                 Product Brand
//               </label>
//               <input
//                 onChange={(e) => handleProductChange(index, e)}
//                 type="text"
//                 className="form-control"
//                 id="brand"
//                 value={product.brand}
//                 required
//               />
//             </div>

//             {/* Button to Remove Product Field */}
//             {products.length > 1 && (
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => removeProductField(index)}
//               >
//                 Remove Product
//               </button>
//             )}
//           </div>
//         ))}

//         {/* Button to Add New Product Field */}
//         {/* <button
//           type="button"
//           className="btn btn-secondary mb-3"
//           onClick={addProductField}
//         >
//           Edit Product
//         </button> */}

//         {/* Submit Button */}
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit Edit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CatEdit;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CatEdit() {
  const navigate = useNavigate();
  const { catID } = useParams();

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
      sizes: [],
      colors: [],
      rating: "",
      brand: "",
    },
  ]);

  // Fetch Category Data on Component Mount
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/categories/${catID}`);
        const fetchedCategory = {
          id: res.data.id,
          name: res.data.name,
        };
        setCategory(fetchedCategory);

        // Convert sizes and colors from arrays to comma-separated strings for input fields
        const fetchedProducts = res.data.products.map((prod) => ({
          ...prod,
          sizes: prod.sizes, // Keep as array in state
          colors: prod.colors, // Keep as array in state
        }));
        setProducts(fetchedProducts);

        console.log(res.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
        alert("Failed to fetch category data. Please try again.");
      }
    };

    fetchCategory();
  }, [catID]);

  // Handler for Category Input Changes
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  // Handler for Product Input Changes
  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
  };

  // Handler to Add a New Product Field


  // Handler to Remove a Product Field
  const removeProductField = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  // Form Submission Handler
  const formSubmit = (e) => {
    e.preventDefault();


    // Prepare Products Array with sizes and colors as arrays
    const formattedProducts = products.map((prod) => ({
      id: prod.id,
      name: prod.name,
      price: parseFloat(prod.price),
      image: prod.image,
      description: prod.description,
      category: prod.category,
      sizes: prod.sizes, // Already arrays
      colors: prod.colors, // Already arrays
      rating: parseFloat(prod.rating),
      brand: prod.brand,
    }));

    // Prepare the payload
    const payload = {
      ...category,
      products: formattedProducts,
    };

    // PUT request to update category with products
    axios
      .put(`http://localhost:9000/categories/${catID}`, payload)
      .then((response) => {
        console.log("Category Updated:", response.data);
        navigate("/categories");
      })
     
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Category</h2>
      <form onSubmit={formSubmit}>
        {/* Category Details */}
        <div className="mb-3">
          <label htmlFor="category-id" className="form-label">
            Category ID
          </label>
          <input
            onChange={handleCategoryChange}
            type="number"
            className="form-control"
            id="category-id"
            name="id"
            value={category.id}
            required
            // If you don't want the ID to be editable, uncomment the line below
            // disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category-name" className="form-label">
            Category Name
          </label>
          <input
            onChange={handleCategoryChange}
            type="text"
            className="form-control"
            id="category-name"
            name="name"
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
                id={`product-id-${index}`}
                name="id"
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
                id={`product-name-${index}`}
                name="name"
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
                id={`product-price-${index}`}
                name="price"
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
                id={`product-image-${index}`}
                name="image"
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
                id={`product-desc-${index}`}
                name="description"
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
                id={`product-category-${index}`}
                name="category"
                value={product.category}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-sizes-${index}`} className="form-label">
                Product Sizes (comma separated)
              </label>
              <input
                onChange={(e) => {
                  const sizesArray = e.target.value.split(",").map((size) => size.trim());
                  const updatedProducts = [...products];
                  updatedProducts[index].sizes = sizesArray;
                  setProducts(updatedProducts);
                }}
                type="text"
                className="form-control"
                id={`product-sizes-${index}`}
                name="sizes"
                value={product.sizes.join(", ")}
                placeholder="e.g., S, M, L, XL"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`product-colors-${index}`} className="form-label">
                Product Colors (comma separated)
              </label>
              <input
                onChange={(e) => {
                  const colorsString = e.target.value;
                  const colorsArray = colorsString.split(",").map((color) => color.trim());
                  const updatedProducts = [...products];
                  updatedProducts[index].colors = colorsArray;
                  setProducts(updatedProducts);
                }}
                type="text"
                className="form-control"
                id={`product-colors-${index}`}
                name="colors"
                value={product.colors.join(", ")}
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
                type="number"
                step="0.1"
                min="0"
                max="5"
                className="form-control"
                id={`product-rating-${index}`}
                name="rating"
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
                id={`product-brand-${index}`}
                name="brand"
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

        {/* Button to Add New Product Field
        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addProductField}
        >
          Add Another Product
        </button> */}

        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CatEdit;
