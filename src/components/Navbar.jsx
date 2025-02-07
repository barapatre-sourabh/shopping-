import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();

  const { setFilteredData, products, logout, isAuthenticatedA, isAuthenticated, cart } =
    useContext(AppContext);

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="nav-sticky-top">
        <nav>
          <div className="nav_bar">
            <Link
              to={"/"}
              className="left"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h3>Mk-Deals</h3>
            </Link>
            {isAuthenticated && (
              <form className="search_bar" onSubmit={submitHandler}>
                <span className="material-symbols-outlined">search</span>{" "}
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search Products..."
                />
              </form>
            )}
            <div className="right">
              {isAuthenticated && (
                <>
                  <Link
                    to={"/cart"}
                    type="button"
                    className="btn btn-light position-relative mx-3"
                  >
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>

                    {cart?.items?.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart?.items?.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </Link>

                  <Link to={"/profile"} className="btn btn-success mx-3">
                    profile
                  </Link>
                </>
              )}
              {(isAuthenticated || isAuthenticatedA) && (
                <>
                  <button
                    className="btn btn-warning mx-3"
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    logout
                  </button>
                </>
              )}

              {!isAuthenticated && !isAuthenticatedA && (
                <>
                  <Link to={"/login"} className="btn btn-secondary mx-3">
                    login
                  </Link>
                  <Link to={"/register"} className="btn btn-info mx-3">
                    register
                  </Link>
                </>
              )}
            </div>
            <div className="hamburger-menu" onClick={toggleSidebar}>
              <GiHamburgerMenu />
            </div>
          </div>

          {location.pathname === "/" && (
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
                smartwatches
              </div>
              <div className="items" onClick={() => filterbyCategory("headphones")}>
                Headphones
              </div>
              <div className="items" onClick={() => filterbyCategory("Home-Appliances")}>
                Home-Appliances
              </div>
            </div>
          )}
        </nav>
      </div>

      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-header">
            <FaTimes onClick={toggleSidebar} />
          </div>
          <div className="sidebar-content">
            {isAuthenticated && (
              <>
                <Link to={"/cart"} className="sidebar-link" onClick={toggleSidebar}>
                  Cart
                </Link>
                <Link to={"/profile"} className="sidebar-link" onClick={toggleSidebar}>
                  Profile
                </Link>
              </>
            )}
            {(isAuthenticated || isAuthenticatedA) && (
              <button
                className="sidebar-link"
                onClick={() => {
                  logout();
                  navigate("/");
                  toggleSidebar();
                }}
              >
                Logout
              </button>
            )}
            {!isAuthenticated && !isAuthenticatedA && (
              <>
                <Link to={"/login"} className="sidebar-link" onClick={toggleSidebar}>
                  Login
                </Link>
                <Link to={"/register"} className="sidebar-link" onClick={toggleSidebar}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;