import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../style sheets/NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={40} color="#fff" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
