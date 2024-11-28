import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";
import { useNavigate} from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
 
 
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  console.log("latestOrder", latestOrder);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center text-dark">Your order has been confirm,</h1>
        <h3 className="text-center text-dark">It will delivered soon</h3>
      </div>

      <div className="container">
        <table className="table table-bordered border-dark bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-light text-dark text-center">
                OrderItems
              </th>

              <th scope="col" className="bg-light text-dark text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-light text-dark">
                {/* <TableProduct cart={cart} /> */}
                <ShowOrderProduct items={latestOrder?.orderItems} />
              </td>
              <td className="bg-light text-dark">
                <ul style={{ fontWeight: "bold" }}>
                  <li>OrderId : {latestOrder?.orderId}</li>
                  <li>PaymentId : {latestOrder?.paymentId}</li>
                  <li>PaymentStatus : {latestOrder?.payStatus}</li>
                  <li>Name : {latestOrder?.userShipping?.fullName}</li>
                  <li>Phone : {latestOrder?.userShipping?.phoneNumber}</li>
                  <li>Country : {latestOrder?.userShipping?.country}</li>
                  <li>State : {latestOrder?.userShipping?.state}</li>
                  <li>PinCode : {latestOrder?.userShipping?.pincode}</li>
                  <li>Near By : {latestOrder?.userShipping?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container text-center my-5">
        <button
          className="btn btn-secondary btn-lg"
          style={{ fontWeight: "bold" }}
          onClick={() => {
           
            navigate("/");
          }}
        >
        Shop More
        </button>
      </div>

    </>
  );
};

export default OrderConfirmation;
