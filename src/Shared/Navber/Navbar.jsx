import "./Navbar.css";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import Contract from "../../Home/Contract";

const Navbar = () => {
  // Initialize state variables
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage on component mount
    const locatTheme = localStorage.getItem("theme");
    // If no theme is found in localStorage, default to dark theme
    // return locatTheme === "dark" ? true : false;
    return locatTheme === "dark" ? false : true;
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    // Store current theme in localStorage
    // localStorage.setItem("theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "light" : "dark");

    // Apply theme to HTML element
    // document.querySelector('html').setAttribute('data-theme', theme ? "dark" : "light");
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]); // Re-run effect when theme changes

  const { Logout, user } = useContext(AuthContext);
  console.log(user);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);

  return (
    <div className="  bg-black text-white">
      <div className="relative  max-w-7xl mx-auto md:px-5 lg:px-2">
        {openModal || (
          <nav className="navbar py-3 z-[100]  w-full  ">
            <div className="navbar-start ">
              <div className="block md:block lg:hidden">
                <div className="text-center">
                  <button
                    className="md:mr-5"
                    type="button"
                    onClick={toggleDrawer}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-gray-800 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <h5
                    id="drawer-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                  >
                    <h2 className="text-2xl   text-nowrap text-[#ff0000] border-b-2 border-[#ff0000] ">
                      Globe Glimpse
                    </h2>
                  </h5>
                  <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>

                  <div className=" grid grid-cols-1 ">
                    <Link to="/">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                      >
                        <span
                          className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full 
                      bg-[#ff0000] group-hover:translate-x-0 ease"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] transition-all font-bold  duration-300 transform group-hover:translate-x-full ease">
                          Home
                        </span>
                        <span className="relative invisible">Home</span>
                      </a>
                    </Link>

                    <Link to="/allTourist">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] transition-all font-bold  duration-300 transform group-hover:translate-x-full ease">
                          Destinations
                        </span>
                        <span className="relative invisible">Destinations</span>
                      </a>
                    </Link>
                    <Link to="/addTourist">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] transition-all font-bold  duration-300 transform group-hover:translate-x-full ease">
                          Add Tourists Spot
                        </span>
                        <span className="relative invisible">
                          Add Tourists Spot
                        </span>
                      </a>
                    </Link>

                    <Link to="/myList">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] transition-all font-bold  duration-300 transform group-hover:translate-x-full ease">
                          My List
                        </span>
                        <span className="relative invisible">My List</span>
                      </a>
                    </Link>
                    <Link to="/addReviews">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] font-bold  transition-all duration-300 transform group-hover:translate-x-full ease">
                          Add Reviews
                        </span>
                        <span className="relative invisible">Add Reviews</span>
                      </a>
                    </Link>
                    <Link onClick={() => setOpenModal(true)}>
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] transition-all duration-300 transform group-hover:translate-x-full ease">
                          <button className=" border-0 font-bold hover:text-[#ff0000]  ">
                            Contract
                          </button>
                        </span>
                        <span className="relative invisible">Contract</span>
                      </a>
                    </Link>
                    <hr />
                    {user ? (
                      <div className="grid grid-cols-1">
                        <Link to="/profile">
                          <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                          >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000]  font-bold  transition-all duration-300 transform group-hover:translate-x-full ease">
                              Profile
                            </span>
                            <span className="relative invisible">Profile</span>
                          </a>
                        </Link>

                        <Link to="/updateProfile">
                          <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                          >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-[#ff0000] font-bold  transition-all duration-300 transform group-hover:translate-x-full ease">
                              Settings
                            </span>
                            <span className="relative invisible">Settings</span>
                          </a>
                        </Link>

                        <div>
                          <a
                            onClick={Logout}
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out   border-[#ff0000] shadow-md group"
                          >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                            <span className="absolute flex font-bold  items-center justify-center w-full h-full text-[#ff0000] transition-all duration-300 transform group-hover:translate-x-full ease">
                              Logout
                            </span>
                            <span className="relative invisible">Logout</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1">
                        <Link to="/login">
                          <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#ff0000]transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                          >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                            <span className="absolute flex  font-bold  items-center justify-center w-full h-full text-[#ff0000] transition-all duration-300 transform group-hover:translate-x-full ease">
                              Login
                            </span>
                            <span className="relative invisible">Login</span>
                          </a>
                        </Link>
                        <Link to="/register">
                          <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out  border-[#ff0000] shadow-md group"
                          >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000] group-hover:translate-x-0 ease">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                            <span className="absolute flex font-bold  items-center justify-center w-full h-full text-[#ff0000] transition-all duration-300 transform group-hover:translate-x-full ease">
                              Register
                            </span>
                            <span className="relative invisible">Register</span>
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Link to="/">
                <h2 className=" text-2xl text-nowrap md:text-3xl md:ml-2 text-[#ff0000] ">
                  Globe Glimpse
                </h2>
              </Link>
            </div>
            <div className="navbar-center hidden space-x-2  lg:flex">
              <NavLink
                to="/"
                className=" px-2  font-bold   hover:text-[#ff0000] "
              >
                Home
              </NavLink>
              <NavLink
                to="/allTourist"
                className=" px-2 l font-bold  hover:text-[#ff0000]   "
              >
                Destinations
              </NavLink>
              <NavLink
                to="/addTourist"
                className="  px-2  font-bold hover:text-[#ff0000]   "
              >
                Add Tourists Spot
              </NavLink>
              <NavLink
                to="/myList"
                className=" px-2  font-bold hover:text-[#ff0000]  "
              >
                My List
              </NavLink>
              <NavLink
                to="/addReviews"
                className=" px-2  font-bold hover:text-[#ff0000]  "
              >
                Add Reviews
              </NavLink>

              <button
                onClick={() => setOpenModal(true)}
                className=" border-0 font-bold hover:text-[#ff0000]  "
              >
                Contract
              </button>
            </div>
            <div className="navbar-end ">
              <label className="mr-5 cursor-pointer grid place-items-center">
                <input
                  type="checkbox"
                  onClick={toggleTheme}
                  checked={theme}
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>

              {user ? (
                <div className="flex items-center ">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button">
                      <div
                        tabIndex={0}
                        role="button"
                        className=" border rounded-full border-gray-300 z-[110]  avatar"
                      >
                        <div className=" rounded-full w-9 md:w-12  ">
                          <img alt="" src={user?.photoURL || ""} />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-80 "
                    >
                      <div className="flex justify-center">
                        <img
                          className="rounded-md w-28 h-20 text-center"
                          src={user?.photoURL || ""}
                          alt=""
                        />
                      </div>
                      <li className="mx-auto text-xl font-bold ">
                        {user?.displayName}
                      </li>
                      <li className="px-20">
                        <NavLink
                          to="/profile"
                          className="btn btn-sm  border-2  border-pink-600 "
                        >
                          Profile
                        </NavLink>
                      </li>

                      <li className="px-20 pb-10 ">
                        <button
                          onClick={Logout}
                          className="btn btn-sm   border-2 border-pink-600 "
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="rounded-md btn-sm  m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff0000] text-[#ff0000] hover:text-white"
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff0000] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-[#ff0000] transition duration-300 group-hover:text-white ease">
                    Login
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}

        <div
          className={`fixed flex justify-center items-center z-[100] ${
            openModal ? "visible opacity-1" : "invisible opacity-0"
          } duration-300 inset-0 w-full h-full`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`relative overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center  drop-shadow-2xl  ${
              openModal
                ? "translate-y-0 opacity-1 duration-500"
                : "translate-y-32 opacity-0 duration-500"
            }`}
          >
            <div className="  px-4 sm:px-6 lg:px-8 ">
              <button 
                onClick={() => {
                  setOpenModal(false);
                }}
                className="absolute top-10  mx-auto right-12  flex bg-white font-bold text-xl rounded  text-black px-3 "
              >
                Close
              </button>
              <Contract></Contract>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
