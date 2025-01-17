import React from "react";
import "../App.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="p-2 mt-8 bg-emerald-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex justify-between">
            <div className="flex flex-col mb-0">
              <span className="flex">
                <MailOutlined className="text-xl md:text-3xl md:py-2" />
                <p className="text-sm font-medium md:text-lg md:font-bold p-3">
                  customercare@sabafabrics.com
                </p>
              </span>
              <span className="flex">
                <PhoneOutlined className="text-xl md:text-3xl md:py-2" />
                <p className="text-sm font-medium md:text-lg md:font-bold p-3">
                  0340-2196848
                </p>
              </span>
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <span
                onClick={() => navigate("/")}
                className="flex items-center  cursor-pointer"
              >
                <img
                  src="https://img.freepik.com/premium-vector/clean-ecommerce-website-logo_741109-36.jpg?ga=GA1.1.992465823.1728379062&semt=ais_hybrid"
                  className="h-8"
                  alt="Flowbite Logo"
                />
                <span className="text-xl md:text-4xl protest-strike-regular">
                  SabaFab
                </span>
              </span>
            </div>
            <div className="hidden md:hidden lg:grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="md:mb-6 md:text-base md:font-bold text-gray-900 uppercase">
                  Shop
                </h2>
                <ul className="text-gray-900">
                  <li className="mb-1">
                    <Link
                      to={"https://flowbite.com"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"https://flowbite.com"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Fabrics
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="md:mb-6 md:text-base md:font-bold text-gray-900 uppercase">
                  Information
                </h2>
                <ul className="text-gray-900">
                  <li className="mb-1">
                    <Link
                      to={"https://github.com/themesberg/flowbite"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Our History
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="md:mb-6 md:text-base md:font-bold text-gray-900 uppercase">
                  Customer Service
                </h2>
                <ul className="text-gray-900">
                  <li className="mb-1">
                    <Link
                      to={"#"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Exchange &amp; Return
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 sm:mx-auto my-2" />
          <div className="flex justify-center md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <Link to={"/"} className="hover:text-gray-900 hover:font-medium">
                SABAFAB™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="hidden lg:flex md:flex lg:gap-8 md:gap-4">
              <Link>
                <FacebookOutlined className="text-gray-500 hover:text-gray-900" />
              </Link>
              <Link>
                <InstagramOutlined className="text-gray-500 hover:text-gray-900" />
              </Link>
              <Link>
                <TwitterOutlined className="text-gray-500 hover:text-gray-900" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
