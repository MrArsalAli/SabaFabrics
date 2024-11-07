import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import Button from "./Button.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { AuthContext } from "../Context/AuthContext.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../pages/utils/firebase.js";

function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  function handleSignout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex justify-end">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:p-4 w-8/12 md:w-7/12">
          <span
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              src="https://img.freepik.com/premium-vector/clean-ecommerce-website-logo_741109-36.jpg?ga=GA1.1.992465823.1728379062&semt=ais_hybrid"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl md:text-4xl whitespace-nowrap dark:text-white protest-strike-regular">
              SabaFab
            </span>
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex gap-6">
              {/* <li>
                <SearchOutlined
                  style={{ fontSize: 22 }}
                  className="inline-flex items-center cursor-pointer border-0 py-1 focus:outline-none rounded text-base mt-4 md:mt-0 icon"
                />
              </li> */}
              <li>
                {currentUser ? (
                  <Button onClick={() => handleSignout()} text={"Logout"} />
                ) : (
                  <UserOutlined
                    onClick={() => navigate("/signup")}
                    style={{ fontSize: 22 }}
                    className="cursor-pointer icon"
                  />
                )}
              </li>
              <li>
                <Badge count={cartItems.length}>
                  <ShoppingOutlined
                    onClick={() => navigate("/cart")}
                    style={{ fontSize: 22 }}
                    className="cursor-pointer icon"
                  />
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="hidden w-full p-2 md:block md:w-auto">
        <ul className="flex justify-center gap-8">
          <li
            onClick={() => navigate("newarrivals")}
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-emerald-300"
          >
            NEW ARRIVALS
          </li>
          <li
            onClick={() => navigate("fabric")}
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-emerald-300"
          >
            FABRIC
          </li>
          <li
            onClick={() => navigate("products")}
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-emerald-300"
          >
            PRODUCTS
          </li>
          <li
            onClick={() => navigate("contact")}
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-emerald-300"
          >
            CONTACT
          </li>
          <li
            onClick={() => navigate("aboutus")}
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-emerald-300"
          >
            ABOUT US
          </li>
          <li
            onClick={() => navigate("sale")}
            className="text-lg font-semibold text-emerald-600 cursor-pointer hover:text-emerald-300"
          >
            SALE
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
