import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  // subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg">
      <div className="logo-container flex items-center space-x-3">
        <img
          className="transition-transform duration-300 hover:scale-105 h-20 w-20 rounded-full"
          src={LOGO_URL}
        />
        <div className="hidden sm:block">
          <h1 className="text-2xl font-display font-bold text-orange-700">
            FoodWeb
          </h1>
          <p className="text-xs text-orange-700/80">Delicious delivered</p>
        </div>
      </div>

      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">OnlineStatus: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>

          <button
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md transition"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
