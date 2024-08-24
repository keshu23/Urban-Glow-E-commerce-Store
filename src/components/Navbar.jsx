import { useSelector } from "react-redux";
import "../styles/Navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const items = useSelector((state) => state.cart);


  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" activeClassName="active" className="text-purple-500">
            Urban Glow
          </NavLink>
        </div>

        <div className="navbar-list">
          <ul className="navbar-items">
            <li>
              <NavLink to="/home">Home </NavLink>
            </li>
            <li>
              <NavLink to="/product" activeClassName="active">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName="active" className="text-lg">
                Cart
              </NavLink>
            </li>

            <li className="ml-10 text-cyan-800">Cart-Items: {items.length}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

