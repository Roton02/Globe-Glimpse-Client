
import "./Navbar.css";
import 'animate.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { Controller } from "swiper/modules";

const Navbar = () => {

  // Initialize state variables
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage on component mount
    const locatTheme = localStorage.getItem("theme");
    // If no theme is found in localStorage, default to dark theme
    // return locatTheme === "dark" ? true : false;
    return locatTheme === "light" ? true : false;
});

// Function to toggle theme
const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
}

useEffect(() => {
    // Store current theme in localStorage
    // localStorage.setItem("theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "light" : "dark");

    // Apply theme to HTML element
    // document.querySelector('html').setAttribute('data-theme', theme ? "dark" : "light");
    document.querySelector('html').setAttribute('data-theme', theme ? "light" : "dark");
}, [theme]); // Re-run effect when theme changes

  const { Logout, user } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="navbar my-3 z-[100]  w-full  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2  shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/allTourist"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              All Tourists Spot
            </NavLink>
           
            <NavLink
          to="/addTourist"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          Add Tourists Spot
        </NavLink>
        <NavLink
          to="/myList"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
         My List
        </NavLink>
       
            
          </div>
        </div>
        <Link
          to="/"
          className="btn  btn-ghost text-base md:text-xl lg:text-3xl mr-0 font-bold animate__animated animate__swing animate__delay-0.5s"
        >
          <span className="text-pink-700">Globe</span> Glimpse
        </Link>
      </div>
      <div className="navbar-center hidden space-x-2  lg:flex">
        <NavLink
          to="/"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          Home
        </NavLink>
        <NavLink
          to="/allTourist"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          All Tourists Spot
        </NavLink>
        <NavLink
          to="/addTourist"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          Add Tourists Spot
        </NavLink>
        <NavLink
          to="/myList"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
         My List
        </NavLink>
       
        
      </div>
      <div className="navbar-end ">
                 <div className="mr-2">
                    {/* Theme switcher */}
                    <label className="swap swap-rotate">
                        {/* Hidden checkbox to control theme */}
                        <input type="checkbox" onClick={toggleTheme} checked={theme} className={theme-Controller} />
                        {/* Sun icon for light theme */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        {/* Moon icon for dark theme */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>
     
        {user ? (
          <div  className="flex items-center ">
            <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
          <div
              tabIndex={0}
              role="button"
              className=" border rounded-full border-gray-300  avatar hover:tooltip tooltip-open"
              data-tip={user ? user.displayName : "Invalid Name"}
            >
              <div className=" rounded-full w-9 md:w-12  ">
                <img  alt="" src={user.photoURL} />
              </div>
            </div>
          </div>
         
        </div>
            <button
              onClick={Logout}
              className="rounded-md btn-sm md:btn-md lg:px-3.5 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border-2 p-1 font-medium border-pink-700 text-pink-700 hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-pink-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative  text-pink-700 transition duration-300 group-hover:text-white ease">
                Logout
              </span>
            </button>
          </div>
        ) : (
          <div>
            <NavLink
          to='/login'
          className="btn btn-ghost mr-2 border-2 border-gray-300 hover:bg-black hover:text-white "
        >
         Login
        </NavLink>
            <NavLink
          to='/register'
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
         Register
        </NavLink>
        
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;