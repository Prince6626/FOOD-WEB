import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const OnlineStatus = useOnlineStatus();

  // subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="bg-green-100 shadow-lg relative">
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left Side - Hamburger + Online Status */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-7 h-7 space-y-1 p-1 rounded-md hover:bg-orange-200/50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-orange-800 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-orange-800 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-orange-800 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Online Status - Compact */}
          <div className="flex items-center space-x-1">
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                OnlineStatus ? "bg-green-400" : "bg-red-400"
              }`}
            ></div>
            <span className="text-xs text-gray-600 hidden sm:inline">
              {OnlineStatus ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="logo-container flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
          <div className="hidden sm:block text-center md:text-right">
            <h1 className="text-xl md:text-2xl font-display font-bold text-orange-700 leading-tight">
              FoodWeb
            </h1>
            <p className="text-xs text-orange-700/70">Delicious delivered</p>
          </div>
          <img
            className="transition-transform duration-300 hover:scale-105 h-12 w-12 md:h-16 md:w-16 rounded-full ring-2 ring-orange-200 hover:ring-orange-300"
            src={LOGO_URL}
            alt="FoodWeb Logo"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Cart - Prominent */}
          <div className="md:hidden">
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 bg-orange-200 hover:bg-orange-300 rounded-full transition-colors duration-200 group"
              aria-label={`Cart with ${cartItems.length} items`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                🛒
              </span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-5 animate-pulse">
                  {cartItems.length > 99 ? "99+" : cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-1">
              <li>
                <Link
                  to="/"
                  className="px-4 py-2 rounded-md hover:bg-orange-200/50 transition-colors duration-200 text-gray-700 hover:text-orange-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="px-4 py-2 rounded-md hover:bg-orange-200/50 transition-colors duration-200 text-gray-700 hover:text-orange-800"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-md hover:bg-orange-200/50 transition-colors duration-200 text-gray-700 hover:text-orange-800"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/grocery"
                  className="px-4 py-2 rounded-md hover:bg-orange-200/50 transition-colors duration-200 text-gray-700 hover:text-orange-800"
                >
                  Grocery
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="relative px-4 py-2 rounded-md hover:bg-orange-200/50 transition-colors duration-200 text-gray-700 hover:text-orange-800 flex items-center space-x-1"
                >
                  <span>Cart</span>
                  {cartItems.length > 0 && (
                    <span className="bg-orange-500 text-white text-xs font-semibold rounded-full px-2 py-0.5 min-w-6 text-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </li>

              <li className="ml-2">
                <Link to="/login">
                  <button
                    className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
                    onClick={() => {
                      btnName === "Login"
                        ? setBtnName("Logout")
                        : setBtnName("Login");
                    }}
                  >
                    {btnName}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm border-t border-orange-200 transition-all duration-300 ease-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 hover:bg-orange-50 transition-colors duration-200 border-b border-orange-100/50 text-gray-700 hover:text-orange-800 font-medium"
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 hover:bg-orange-50 transition-colors duration-200 border-b border-orange-100/50 text-gray-700 hover:text-orange-800 font-medium"
            >
              ℹ️ About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 hover:bg-orange-50 transition-colors duration-200 border-b border-orange-100/50 text-gray-700 hover:text-orange-800 font-medium"
            >
              📞 Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 hover:bg-orange-50 transition-colors duration-200 border-b border-orange-100/50 text-gray-700 hover:text-orange-800 font-medium"
            >
              🛍️ Grocery
            </Link>
          </li>
          <li className="p-4">
            <Link to="/login">
              <button
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-full transition-all duration-200 w-full font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                  setIsMenuOpen(false);
                }}
              >
                {btnName}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
