import { Link } from "react-router-dom";

const Contract = () => {
  return (
    <section className="min-h-screen w-screen rounded-none bg-cover bg-[url('https://i.ibb.co/xqs920t/contract.jpg')]  bg-opacity-50 ">
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2  lg:mx-14">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Globe Glimpse
              </h1>

              <p className="max-w-xl mt-6">
                Have any questions or want to get in touch? We’d love to hear
                from you! Fill out the form below or reach out to us directly
                through our contact details.
              </p>

              
                <button className="card-lavel bg-[#1e7971] flex items-center gap-2 mt-5 py-3 px-7  text-white font-semibold">
                 MR {`Coder's`} , Bangladesh
                </button>
            

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300 ">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                    target="_blank"
                    href="https://www.linkedin.com/in/md-sana-ullah12/"
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
                    href="https://www.facebook.com/roton.chodiry"
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
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/3 text-white lg:mx-6">
              <div className="w-full px-8  mx-auto overflow-hidden bg-gray-400 bg-opacity-20 shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-3xl my-5 font-medium text-center border-b-2 mx-auto text-white dark:text-gray-200">
                  Contact form
                </h1>

                <form className="">
                  <div className="flex-1">
                    <label className="block mb-2  text-white text-sm dark:text-gray-200">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3  text-gray-700 bg-white border border-gray-200  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 ">
                    <label className="block mb-2 text-sm  text-white  dark:text-gray-200">
                      Include Reason
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="block w-full px-5 py-3   text-black  bg-white border border-gray-200  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-2">
                    <label className="block mb-2 text-sm  text-white  dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-24 px-5 py-3  text-gray-700 placeholder-gray-400 bg-white border border-gray-200  md:h-32 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className=" mt-4 mb-5  rounded-lg   transition duration-300"
                  >
                    <a
                      href="#_"
                      className="relative inline-block mt-2 px-14 py-2 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                      <span className="relative text-black group-hover:text-white">
                        Contact
                      </span>
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
