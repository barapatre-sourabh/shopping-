import React, {useEffect, useState } from "react";


const ShowOrderProduct = ({ items }) => {
 
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (items) {
      for (let i = 0; i < items?.length; i++) {
        qty += items[i].qty;
        price += items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [items]);

  return (
    <>
      <table className="table table-bordered border-dark bg-light text-center text-dark">
        <thead>
          <tr>
            <th scope="col" className="text-dark">
              Product Img
            </th>
            <th scope="col" className="text-dark">
              Title
            </th>
            <th scope="col" className="text-dark">
              Price
            </th>
            <th scope="col" className="text-dark">
              Qty
            </th>
            
          </tr>
        </thead>
        <tbody>
          {items?.map((product) => (
            <tr key={product._id}>
              <th scope="row" className="text-dark">
                <img
                  src={product.imgSrc}
                  style={{ width: "50px", height: "50px" }}
                />
              </th>
              <td className="text-dark">{product.title}</td>
              <td className="text-dark">{product.price}</td>
              <td className="text-dark">{product.qty}</td>
             
            </tr>
          ))}

          <tr>
            <th scope="row" className="text-dark"></th>
            <td className="text-dark">
              {" "}
              <button
                className="btn btn-primary"
                style={{ fontWeight: "bold" }}
              >
                Total
              </button>{" "}
            </td>
            <td className="text-dark">
              {" "}
              <button
                className="btn btn-warning"
                style={{ fontWeight: "bold" }}
              >
                {price}
              </button>
            </td>
            <td className="text-dark">
              <button className="btn btn-info" style={{ fontWeight: "bold" }}>
                {qty}
              </button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ShowOrderProduct;
