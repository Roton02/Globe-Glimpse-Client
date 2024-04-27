// import { IoLocationSharp } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const loaderData = useLoaderData()
    console.log(loaderData);
    return (
        <div>
            <div className="grid grid-cols-1 border-2 mt-2 rounded-xl overflow-y-hidden overflow-x-hidden lg:grid-cols-5 gap-2   p-2 ">
       <div  className="col-span-3 p-4  my-auto ">
        <img className=" w-full rounded-lg " src={loaderData.image} alt="" />
       </div>
       <div data-aos="fade-left" data-aos-duration='3000' className="col-span-2  space-y-1 md:space-y-3  md:px-16 py-4 mt-5">
        <h1  className="text-2xl mb-2 font-bold"> -------{loaderData.Tourist}------- </h1> <hr />
        <div className="flex my-2 gap-12 ">
          <h1 className="font-bold">Time: {loaderData.TravelTime}</h1>
          <h1 className="font-bold">{loaderData.seasonality}</h1> <hr />
        </div> <hr />
        <div className="flex flex-col lg:flex-row gap-2 justify-between my-2">
        <h1 className="flex items-center font-semibold " >AVG Cost: {loaderData.averageCost}<CgDollar /></h1> 
        <h1 className="flex items-center font-semibold " >Visit Per year :{loaderData.visitor}  </h1> <hr />
        </div>
        <p className="font-bold ">
          <span>Location: {loaderData.located},</span><span>{loaderData.countryName}</span>
        </p>
        <p className=" my-1 "> <span className=" font-bold underline ">About Spot: </span>{loaderData.short_description}</p> <hr />
        <Link  to="/contract"
            className="rounded-md mt-10  py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#23BE0A] hover:bg-[#23BE0A] transition  text-[#23BE0A]   duration-500  hover:text-white"
          >
            <button  className="w-full mt-8 "><span className="absolute w-64 h-0  duration-300 origin-center rotate-45  bg-[#23BE0A] "></span>
            <span className="relative">
            </span></button>
          </Link>
       </div>
       
      </div>
        </div>
    );
};

export default DetailsPage;