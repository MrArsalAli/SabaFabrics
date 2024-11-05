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
      <footer className="p-4 mt-8 bg-emerald-100 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex justify-between">
            <div className="flex flex-col mb-6 md:mb-0">
              <span className="flex">
                <MailOutlined className="text-xl md:text-3xl py-2" />
                <p className="text-sm font-semibold md:text-lg md:font-bold p-3">
                  customercare@sabafabrics.com
                </p>
              </span>
              <span className="flex">
                <PhoneOutlined className="text-xl md:text-3xl py-2" />
                <p className="text-sm font-semibold md:text-lg md:font-bold p-3">
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
                <span className="self-center text-2xl md:text-4xl whitespace-nowrap dark:text-white protest-strike-regular">
                  SabaFab
                </span>
              </span>
            </div>
            <div className="hidden md:hidden lg:grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="md:mb-6 text-sm md:text-base font-semibold md:font-bold text-gray-900 uppercase">
                  Shop
                </h2>
                <ul className="text-gray-900 dark:text-gray-400">
                  <li className="mb-4 md:mb-2">
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
                <h2 className="md:mb-6 text-sm md:text-base font-semibold md:font-bold text-gray-900 uppercase">
                  Information
                </h2>
                <ul className="text-gray-900 dark:text-gray-400">
                  <li className="mb-4 md:mb-2">
                    <Link
                      to={"https://github.com/themesberg/flowbite"}
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Our History
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="md:mb-6 text-sm md:text-base font-semibold md:font-bold text-gray-900 uppercase">
                  Customer Service
                </h2>
                <ul className="text-gray-900 dark:text-gray-400">
                  <li className="mb-4 md:mb-2">
                    <a
                      href="#"
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Exchange &amp; Return
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 hover:font-medium"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 sm:mx-auto dark:border-gray-700  md:mb-2" />
          <div className="flex justify-center md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link to={"/"} className="hover:text-gray-900 hover:font-medium">
                SABAFAB™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="hidden lg:flex md:flex lg:gap-8 md:gap-4">
              <Link>
                <FacebookOutlined className="text-gray-500 hover:text-gray-900 hover:font-bold dark:hover:text-white" />
              </Link>
              <Link>
                <InstagramOutlined className="text-gray-500 hover:text-gray-900 hover:font-bold dark:hover:text-white" />
              </Link>
              <Link>
                <TwitterOutlined className="text-gray-500 hover:text-gray-900 hover:font-bold dark:hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
