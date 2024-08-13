import { useState } from "react";
import "../styles/Navbar.css";
import { IoMdNotifications } from "react-icons/io";
import Notify from "../components/Notify";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [display, setDisplay] = useState(false);
  const obj = { display, setDisplay };

  const updateDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" activeClassName="active">
            Urban Glow
          </NavLink>{" "}
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
              <NavLink to="/service" activeClassName="active">
                Services
              </NavLink>
            </li>

            <li className="notify">
              <IoMdNotifications onClick={updateDisplay} />
            </li>
          </ul>
        </div>
      </div>

      {display && <Notify obj={obj} />}
    </>
  );
}
