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
    <nav className="bg-white" id="navbar-default">
      <div className="flex justify-end">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:p-4 w-8/12 md:w-7/12">
          <span
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              src="https://img.freepik.com/premium-vector/clean-ecommerce-website-logo_741109-36.jpg?ga=GA1.1.992465823.1728379062&semt=ais_hybrid"
              className="h-8"
              alt="SabaFab"
            />
            <span className="self-center text-2xl md:text-4xl protest-strike-regular">
              SabaFab
            </span>
          </span>
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
      <div className="hidden w-full p-2 md:block">
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
