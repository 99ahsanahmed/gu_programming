import React from "react";
import Logo from "../assets/images/muraqqa_logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-4 fixed top-0 bg-white z-20">
      <img src={Logo} alt="" className="w-36" />
      <div className="flex gap-4 items-center">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/products">Products</Link>
        </h1>
        <h1>
          <Link to="/user/Ahsan_Siddiqui">
            <img
              src="https://cdn-icons-png.freepik.com/256/17740/17740782.png?ga=GA1.1.2050797821.1733834117&semt=ais_hybrid"
              alt="user_icon"
              className="w-5"
            />
          </Link>
        </h1>
        <h1>
          <Link to="/cart">
            <img
              src="https://cdn-icons-png.freepik.com/256/17658/17658761.png?ga=GA1.1.2050797821.1733834117&semt=ais_hybrid"
              alt="cart_icon"
              className="w-5"
            />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
