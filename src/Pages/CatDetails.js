import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CatDetails = () => {
  let { catID } = useParams();
  const UrlJson = "http://localhost:9000/categories";
  const [catProducts, setCatProducts] = useState("");
  const category = async() => {
   await axios.get(`${UrlJson}/${catID}`).then((res) => setCatProducts(res.data));
  };
  useEffect(() => {
    category()
  }, [catID]);

  console.log(catProducts);

  return (
    <>
      <div className="text-center p-3 bg-danger-subtle rounded-3">
        <h1>Deatils Of Category : "{catProducts.name}"</h1>
      </div>
       {catProducts.products && catProducts.products.length > 0 ? 
       (
         <div className="container">
          <div className="row">
      {catProducts.products.map((cat, index) => 
         (
            <div className="col-12 col-md-6 col-lg-4 g-2 " key={index}>
          <div
            className="card h-100 w-auto"
            key={index}
            style={{ width: "18rem" }}
          >
            <img
              src={cat.image}
              className="card-img-top mt-4"
              alt="..."
              style={{ maxHeight: "400px", maxWidth: "400px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="">
                <b>Name : </b>
                {cat.name}
              </h5>
              <p className="">
                <b>Description :</b> {cat.description}
              </p>
              <p className="">
                <b>Price : </b>
                {cat.price}
              </p>
              <p className="">
                <b>Category : </b>
                {cat.category}
              </p>
              <p className="d-flex align-items-center mb-2">
                <strong>Sizes:</strong>
                {cat.sizes && cat.sizes.length > 0 ? (
                  <ul className="d-flex justify-content-around w-25 list-unstyled mb-0">
                    [
                    {cat.sizes.map((size, index) => (
                      <li
                        key={index}
                        className="card-text mx-2 bg-info p-1 rounded-2"
                      >
                        {size}
                      </li>
                    ))}
                    ]
                  </ul>
                ) : (
                  <span className="ml-2">No sizes available.</span>
                )}
              </p>
              <p className="d-flex align-items-center">
                <strong>Colors :</strong>
                {cat.colors && cat.colors.length > 0 ? (
                  <ul className="d-flex justify-content-around w-25 list-unstyled mb-0">
                    [
                    {cat.colors.map((color, index) => (
                      <li
                        key={index}
                        className="card-text mx-2 bg-info p-1 rounded-2"
                      >
                        {color}
                      </li>
                    ))}
                    ]
                  </ul>
                ) : (
                  <span className="ml-2">No Color available.</span>
                )}
              </p>
              <p>
                <strong>Rating : </strong>
                {cat.rating ? cat.rating : "Not Rated"}
              </p>
              <p>
                <strong>Brand : </strong>
                {cat.brand ? cat.brand : "Unknown"}
              </p>
            </div>
          </div>
          </div>
        )
      )}
      </div>
      </div>
      ):("")
      }
    </>
  );
};

export default CatDetails;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CatDetails = () => {
//   const { catID } = useParams();
//   const UrlJson = "http://localhost:9000/categories";
//   const [catProducts, setCatProducts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(`${UrlJson}/${catID}`);
//         setCatProducts(response.data);
//       } catch (err) {
//         setError("Failed to fetch category details. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategory();
//   }, [catID]);

//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <div className="spinner-border text-danger" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p>Loading category details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="alert alert-danger text-center mt-5" role="alert">
//         {error}
//       </div>
//     );
//   }

//   if (!catProducts) {
//     return (
//       <div className="alert alert-warning text-center mt-5" role="alert">
//         No category details available.
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="text-center p-3 bg-danger-subtle rounded-3 mb-4">
//         <h1>Details Of Category: "{catProducts.name}"</h1>
//       </div>

//       {catProducts.products && catProducts.products.length > 0 ? (
//         <div className="container">
//           <div className="row">
//             {catProducts.products.map((cat) => (
//               <div key={cat.id || cat.name} className="col-lg-4 col-md-6 mb-4">
//                 <div className="card h-100">
//                   <img
//                     src={cat.image}
//                     className="card-img-top mt-4"
//                     alt={cat.name}
//                     style={{ maxHeight: "400px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       <strong>Name:</strong> {cat.name}
//                     </h5>
//                     <p className="card-text">
//                       <strong>Description:</strong> {cat.description || "No description available."}
//                     </p>
//                     <p className="card-text">
//                       <strong>Price:</strong> ${cat.price}
//                     </p>
//                     <p className="card-text">
//                       <strong>Category:</strong> {cat.category}
//                     </p>

//                     {/* Sizes */}
//                     <div className="d-flex align-items-center mb-2">
//                       <strong>Sizes:</strong>
//                       {cat.sizes && cat.sizes.length > 0 ? (
//                         <ul className="d-flex flex-wrap ms-2 list-unstyled">
//                           {cat.sizes.map((size) => (
//                             <li
//                               key={size}
//                               className="bg-info text-white p-1 m-1 rounded"
//                               style={{ minWidth: "40px", textAlign: "center" }}
//                             >
//                               {size}
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <span className="ms-2">No sizes available.</span>
//                       )}
//                     </div>

//                     {/* Colors */}
//                     <div className="d-flex align-items-center mb-2">
//                       <strong>Colors:</strong>
//                       {cat.colors && cat.colors.length > 0 ? (
//                         <ul className="d-flex flex-wrap ms-2 list-unstyled">
//                           {cat.colors.map((color) => (
//                             <li
//                               key={color}
//                               className="bg-info text-white p-1 m-1 rounded"
//                               style={{ minWidth: "40px", textAlign: "center" }}
//                             >
//                               {color}
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <span className="ms-2">No colors available.</span>
//                       )}
//                     </div>

//                     <p className="card-text">
//                       <strong>Rating:</strong> {cat.rating ? cat.rating : "Not Rated"}
//                     </p>
//                     <p className="card-text">
//                       <strong>Brand:</strong> {cat.brand ? cat.brand : "Unknown"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="alert alert-info text-center" role="alert">
//           No products available in this category.
//         </div>
//       )}
//     </>
//   );
// };

// export default CatDetails;
