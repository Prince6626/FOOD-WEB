import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const[btnName, setBtnName] = useState("Login")

    const OnlineStatus = useOnlineStatus();

    // subscribing to the store using selector

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return(
        <div className="flex justify-between bg-orange-100 sm:bg-yellow-100 lg:bg-green-50 shadow-lg">
            <div className="logo-container">
                <img 
                className="w-30 rounded-full h-28" 
                src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">
                        OnlineStatus: {OnlineStatus ? "✅" : "🔴"}
                    </li>
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
                    
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md transition"
                        onClick={()=>{
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;