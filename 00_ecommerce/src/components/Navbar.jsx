import React from "react";
import Logo from "../assets/images/muraqqa_logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-4 fixed top-0  bg-gray-200">
      <img src={Logo} alt="" className="w-36" />
      <div className="flex gap-4">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/products">Products</Link>
        </h1>
        <h1>
          <Link to="/user/Ahsan_Siddiqui">My profile</Link>
        </h1>
        <h1>
          <Link to="/cart">Cart</Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
