import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
const AlterProduct = () => {
    // const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location

    const { products, filteredData, deleteProductById, setFilteredData } = useContext(AppContext); // Ensure deleteProduct is available in context

    const filterbyCategory = (cat) => {
        setFilteredData(
            products.filter(
                (data) => data.category.toLowerCase() === cat.toLowerCase()
            )
        );
    };

    const handleDelete = async (productId) => {
        const result = await deleteProductById(productId); // Call the delete function with the product ID
        if (result && result.message === "Product has been deleted") {
            console.log("Product deleted successfully");
            // Optionally, you can refresh the filtered data or remove the deleted product from the UI
            setFilteredData(filteredData.filter(product => product._id !== productId));
        } else {
            console.error("Failed to delete product");
        }
    };

    return (
        <>
            {location.pathname === "/alterProduct" && (
                <div className="sub_bar">
                    <div className="items" onClick={() => setFilteredData(products)}>
                        All
                    </div>
                    <div className="items" onClick={() => filterbyCategory("mobiles")}>
                        Mobiles
                    </div>
                    <div className="items" onClick={() => filterbyCategory("laptops")}>
                        Laptops
                    </div>
                    <div className="items" onClick={() => filterbyCategory("smartwatches")}>
                        Smartwatches
                    </div>
                    <div className="items" onClick={() => filterbyCategory("headphones")}>
                        Headphones
                    </div>
                    <div className="items" onClick={() => filterbyCategory("Home-Appliances")}>
                        Home Appliances
                    </div>
                </div>
            )}
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row container d-flex justify-content-center align-items-center my-5">
                    {filteredData?.map((product) => (
                        <div
                            key={product._id}
                            className="my-3 col-md-4 d-flex justify-content-center align-items-center"
                        >
                            <div
                                className="card bg-white text-light text-center"
                                style={{ width: "18rem" }}
                            >
                                <div className="d-flex justify-content-center align-items-center p-3">
                                    <img
                                        src={product.imgSrc}
                                        className="card-img-top"
                                        alt="..."
                                        style={{
                                            backgroundColor: "black",
                                            width: "200px",
                                            height: "200px",
                                            borderRadius: "10px",
                                            border: "2px solid black",
                                        }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "black" }}>{product.title}</h5>
                                    <div className="my-3">
                                        <div className="my-3">
                                            <button
                                                className="btn btn-danger button-spacing"
                                                onClick={() => handleDelete(product._id)} // Pass the product ID here
                                            >
                                                Delete
                                            </button>
                                            </div>
                                            <div className="my-3">
                                            <button
                                                className="btn btn-warning button-spacing"
                                                onClick={() => navigate(`/`)} // Pass the product ID here
                                            >
                                               Update
                                            </button>
                                            </div>
                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlterProduct;