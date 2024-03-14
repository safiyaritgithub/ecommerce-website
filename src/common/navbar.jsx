import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { navitems, shopDropdown } from "./navitems";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleShopLinkClick = (e) => {
    e.preventDefault();
    toggleDropdown();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#F2EFDD]">
        {/* Top Navbar */}
        <div className="tracking-wide">
          <p className="bg-customBrown text-white text-xs text-center font-light p-3 sm:text-sm sm:p-2 md:text-[14px] lg:text-[13px]">
            Free shipping on orders $35+ 🚀
          </p>
        </div>

        {/* Bottom Navbar */}
        <div className="max-w-[1200px] mx-auto flex justify-between items-center p-6   ">

          <div className="flex gap-6 items-center">

            <button
              className="block text-[30px] lg:hidden  "
              onClick={toggleMenu}
            >
              {isOpen ? <FaXmark /> : <CiMenuBurger />}
            </button>

            <div  >
              <Link to="/">
                <img
                  src="https://theme-crave-demo.myshopify.com/cdn/shop/files/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.png?v=1642089232"
                  className=""
                />
              </Link>
            </div>

            <div
              className={`absolute left-0 pl-3  z-50 leading-10 text-lg text-customBrown  bg-customlightbrown w-[90%]  lg:flex lg:gap-4 lg:items-center lg:pl-[-12px] lg:static ${
                isOpen ? "top-28" : "top-[-490px]"
              } `}
            > 
              <div>
                <Link to="/shop" onClick={handleShopLinkClick}>
                  <div className="flex items-center  gap-1 ">
                    <p className="text-[15px] hover:underline">Shop</p>
                    <span className="mt-1 ">
                      {isDropdownOpen ? (
                        <IoChevronUpSharp />
                      ) : (
                        <IoChevronDownSharp />
                      )}
                    </span>
                  </div>
                </Link>

                {isDropdownOpen && (
                  <div ref={dropdownRef} className=" ">
                    <ul className="border-2 border-customDarkbrown absolute py-6 pl-3 pr-14 text-[15px] rounded-xl bg-customlightbrown">
                      {shopDropdown.map((item) => {
                        return (
                          <li
                            key={item.id}
                            className=" cursor-pointer  text-customDarkbrown 
                       leading-9"
                          >
                            <Link
                              to={item.path}
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                </div>
             
            <div >  
              <ul className=" lg:flex gap-5 items-center ">
                {navitems.map((item) => {
                  return (
                    <li key={item.id} className="text-[15px] hover:underline">
                      <Link to={item.path} onClick={() => setIsOpen(false)}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-2 items-center py-36 lg:hidden">
              <FaTwitter />
              <FaSquareFacebook />
              <FaPinterest />
              <CiInstagram />
              <FaTiktok />
              </div>
              </div>


            </div>
            
          </div>

          <div className="flex gap-3 text-2xl ">
            <span className="">
              <CiSearch />
            </span>
            <span>
              <MdOutlineShoppingBag />
            </span>
        </div>

          
          </div>
          
      </nav>
    </>
  );
};
