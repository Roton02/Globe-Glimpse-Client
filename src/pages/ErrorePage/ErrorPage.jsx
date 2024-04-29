import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-auto h-screen">
       <section className="flex items-center bg-green-50  h-full text-2xl dark:bg-gray-50 dark:text-gray-800">
       <div className="container  flex flex-col  items-center  px-5  my-8">
           <div className="max-w-md bg-slate-800 rounded-t-lg py-8 px-28 bg-opacity-30">
               <p className="text-xl font-semibold ">Error 404.....</p>
               <p className="mt-4  font-bold text-2xl dark:text-gray-600">Page not found</p>
               
           </div>
           <ul className="text-lg ">Try:
                <li className="ml-4">Checking the network cables, modem, and router</li>
                <li className="ml-4">Reconnecting to Wi-Fi</li>
                <li className="ml-4 text-orange-400"><a href="">Running Windows Network Diagnostics</a> </li>
               </ul>
              <Link className="py-3 " to='/'>
              <button
              
              className="rounded-md  px-5 btn-sm border-2 border-black hover:bg-black hover:text-white transition "
            >
                 Try again
            </button></Link>
       </div>
   </section>
      </div>

    );
};

export default ErrorPage;