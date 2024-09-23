import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Categories = () => {
  const UrlJson = "http://localhost:9000/categories";
  const [categories,setCategories] = useState([])
  const getAllCategories =async()=>{
    await axios.get(UrlJson)
    .then((res=>setCategories(res.data)))
  }
    
  async function deleteCat(cat){
    Swal.fire({
      title: `Are You Sure To Delete: ${cat.name}"?`,
      showCancelButton:true
    }).then((data)=>{
        if(data.isConfirmed){
             axios.delete(`${UrlJson}/${cat.id}`)
              .then(() => getAllCategories());
        }
    })
  }

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="ms-1">
      <h1>Categories Page</h1>
      <Link to="/categories/add" className="btn btn-secondary m-3">Add Catergory</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Products Name</th>
            <th>Operations</th>

          </tr>
        </thead>
        <tbody>
        {categories.map((cat)=>{
return(
          <tr key={cat.id}>
            <td>{cat.id}</td>
            <td>{cat.name}</td>
            <td>[{cat.products.map((product)=>product.name+" , ")}]</td>
            <td style={{minWidth:"180px"}}>
              <button className="btn btn-sm btn-danger me-1" onClick={()=>deleteCat(cat)}>Delete</button>
              <Link to={`/categories/${cat.id}`} className="btn btn-sm btn-info me-1">View</Link>
              <Link to={`/categories/edit/${cat.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
            </td>
          
          </tr>
        )})
          }
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
