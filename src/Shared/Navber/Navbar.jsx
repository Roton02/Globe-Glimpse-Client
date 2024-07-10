import "./Navbar.css";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { Controller } from "swiper/modules";
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
    <div className="relative">
      {openModal || (
        <nav className="navbar my-3 z-[100]  w-full  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  Destinations
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
                <NavLink
                  to="/addReviews"
                  className=" btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
                >
                  Add Reviews
                </NavLink>

                <button
                  onClick={() => setOpenModal(true)}
                  className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
                >
                  Contract
                </button>
              </div>
            </div>
            <Link to="/">
              <h2 className="text-3xl text-[#ff0000] ">Globe Glimpse</h2>
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
            <label className="mr-2 cursor-pointer grid place-items-center">
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
                    className="dropdown-content hidden lg:flex  z-[100] menu p-2 gap-2 shadow bg-base-100 rounded-box w-80 "
                  >
                    <div className="flex justify-center">
                      <img
                        className="rounded-full w-28 h-20 text-center"
                        src={user?.photoURL || ""}
                        alt=""
                      />
                    </div>
                    <li className="mx-auto text-xl font-bold ">
                      ----- {user?.displayName} -----
                    </li>
                    <li className="px-20">
                      <NavLink
                        to="/profile"
                        className="btn btn-sm  btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
                      >
                        Profile
                      </NavLink>
                    </li>

                    <li className="px-20 pb-10 pt-2">
                      <button
                        onClick={Logout}
                        className="btn btn-sm  btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
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
            {/* <section className="min-h-screen w-screen    bg-cover bg-[url('https://i.ibb.co/2kWxd2V/contract.jpg')]  bg-opacity-50 ">
              <div className="flex flex-col min-h-screen  bg-black/60">
                <div className=" px-6 py-12 ">
                  <div className="lg:flex lg:items-center max-w-7xl mx-auto lg:-mx-6">
                    <div className="text-white lg:w-1/2  lg:mx-14">
                      <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                        Globe Glimpse
                      </h1>

                      <p className="max-w-xl mt-6">
                        we Provide best travel package in save money . Enjoy
                        Your trip . If Any Consern or Quries give us and
                        contract us
                      </p>

                      <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        get in touch
                      </button>

                      <div className="mt-6 md:mt-8">
                        <h3 className="text-gray-300 ">Follow us</h3>

                        <div className="flex mt-4 -mx-1.5 ">
                          <a
                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                            href="#"
                          >
                            <svg
                              className="w-10 h-10 fill-current"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                            </svg>
                          </a>

                          <a
                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                            href="#"
                          >
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                                fill="currentColor"
                              />
                              <path
                                d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>

                          <a
                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                            href="#"
                          >
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>

                          <a
                            className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                            href="#"
                          >
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 lg:w-1/3 text-white lg:mx-6">
                      <div className="w-full px-8  mx-auto overflow-hidden bg-gray-400 bg-opacity-20 shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                        <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                          Contact form
                        </h1>

                        <form className="py-6">
                          <div className="flex-1">
                            <label className="block mb-2  text-white text-sm dark:text-gray-200">
                              Full Name
                            </label>
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="block w-full px-5 py-3  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                          </div>

                          <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm  text-white  dark:text-gray-200">
                              Email address
                            </label>
                            <input
                              type="email"
                              placeholder="johndoe@example.com"
                              className="block w-full px-5 py-3   text-black  bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                          </div>

                          <div className="w-full mt-6">
                            <label className="block mb-2 text-sm  text-white  dark:text-gray-200">
                              Message
                            </label>
                            <textarea
                              className="block w-full h-24 px-5 py-3  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-32 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                              placeholder="Message"
                            ></textarea>
                          </div>

                          <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                            get in touch
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
