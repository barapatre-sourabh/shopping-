import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  const navigate = useNavigate();
  // const [adminName, setAdminName] = useState('');
  // const [productName, setProductName] = useState('');
  // const [removeProductName, setRemoveProductName] = useState('');
  // const [updateProductName, setUpdateProductName] = useState('');
  // const [newProductName, setNewProductName] = useState('');
  // const [removeAdminName, setRemoveAdminName] = useState('');

  // const handleAddAdmin = () => {
  //   console.log('Adding Admin:', adminName);
  //   setAdminName('');
  // };

  // const handleAddProduct = () => {
  //   console.log('Adding Product:', productName);
  //   setProductName('');
  // };

  // const handleRemoveProduct = () => {
  //   console.log('Removing Product:', removeProductName);
  //   setRemoveProductName('');
  // };

  // const handleUpdateProduct = () => {
  //   console.log('Updating Product:', updateProductName, 'to', newProductName);
  //   setUpdateProductName('');
  //   setNewProductName('');
  // };

  // const handleRemoveAdmin = () => {
  //   console.log('Removing Admin:', removeAdminName);
  //   setRemoveAdminName('');
  // };

  return (
   <div className="container text-dark">
      <h1>Admin Dashboard</h1>

      <div className="section">
        <h2></h2>
        <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning"
            onClick={()=>navigate('/adminRegister')}
            style={{fontWeight:'bold'}}
            >Add New Admin</button>
          </div>
       
      </div>

      <div className="section">
        <h2></h2>
        <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning"
            onClick={()=>navigate('/productRegister')}
            style={{fontWeight:'bold'}}
            >Add Product</button>
          </div>
          </div>

    <div className="section">
        <h2></h2>
        <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning"
            onClick={()=>navigate('/alterProduct')}
            style={{fontWeight:'bold'}}
            >Remove Products</button>
          </div>
          </div>

      <div className="section">
        <h2></h2>
        <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning"
            onClick={()=>navigate('/alterProduct')}
            style={{fontWeight:'bold'}}
            >Update Product</button>
          </div>
          </div>
         

      <div className="section">
        <h2></h2>
          <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning"
            onClick={()=>navigate('/')}
            style={{fontWeight:'bold'}}
            >Remove Admin</button>
          </div>
    </div>
    </div>
  );
};


export default AdminDashboard;