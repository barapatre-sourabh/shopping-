import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const ProductRegister = () => {
  const { addProduct } = useContext(AppContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    imgSrc: '',
    title: '',
    description: '',
    category: '',
    price: '',
    qty: '',
  });
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const {title,description,price,category,qty,imgSrc } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("Your form has been submited")

   const result = await addProduct(title,description,price,category,qty,imgSrc);

   
   if(result.success){
    navigate("/adminDashboard")
   }

    // console.log(formData);
  };
  return (
    <>
      <div
        className="container my-5 p-4"
        style={{
          width: "600px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">Product Register</h1>
        <form onSubmit={submitHandler} className="my-3">
          <div className="mb-3">
            <label htmlFor="imgSrc" className="form-label">
              Image URL
            </label>
            <input
              name="imgSrc"
              value={formData.imgSrc}
              onChange={onChangerHandler}
              type="text"
              className="form-control"
              id="imgSrc"
              aria-describedby="imgSrcHelp"
              required
            />
          </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          name="title"
          value={formData.title}
          onChange={onChangerHandler}
          type="text"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          name="description"
          value={formData.description}
          onChange={onChangerHandler}
          type="text"
          className="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={onChangerHandler}
          className="form-control"
          id="category"
          aria-describedby="categoryHelp"
          required
        >
          <option value="">Select a category</option>
          <option value="mobiles">Mobiles</option>
          <option value="headphones">Headphones</option>
          <option value="home-appliances">Home Appliances</option>
          <option value="smartwatches">Smartwatches</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          name="price"
          value={formData.price}
          onChange={onChangerHandler}
          type="number"
          className="form-control"
          id="price"
          aria-describedby="priceHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          Quantity
        </label>
        <input
          name="quantity"
          value={formData.quantity}
          onChange={onChangerHandler}
          type="number"
          className="form-control"
          id="quantity"
          aria-describedby="quantityHelp"
          required
        />
      </div>
          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            
          </div>
          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-dark"
            onClick={()=>{
                navigate("/adminDashboard")
            }}>
              Dashboard
            </button>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductRegister;
