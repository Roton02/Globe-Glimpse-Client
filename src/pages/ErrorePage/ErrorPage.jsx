import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-10 ">
        <div className="flex flex-col justify-center items-center">
           <img className="w-72" src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
       </div>
       <section className="flex items-center h-full text-2xl dark:bg-gray-50 dark:text-gray-800">
       <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
           <div className="max-w-md text-center">
               <p className="text-2xl font-semibold ">Sorry, we could not find this page.</p>
               <p className="mt-4 mb-8 text-lg dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
              <Link to='/'>
              <button
              
              className="rounded-md px-20 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border p-1 font-medium border-black text-black hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative  text-black transition duration-300 group-hover:text-white ease">
                 Home
              </span>
            </button></Link>
           </div>
       </div>
   </section>
      </div>

    );
};

export default ErrorPage;