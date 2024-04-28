import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";

const AllTourist = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);
  const [data , setData]= useState(loaderData)
  const sort = cost =>{
    // console.log(cost);
    if (cost == 'Assending') {
      
      const remainingAssending = loaderData.sort((a,b)=>(a.averageCost - b.averageCost))
      setData([...data , remainingAssending])
    }
    if (cost == 'Dessending') {
      const remainingDessending = loaderData.sort((a,b)=>(b.averageCost - a.averageCost))
      setData([...data , remainingDessending])
    }
  }
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-100 from-10%  via-30% to-[#F9F3F9] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] gadgetContainer">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center py-4">
          <div className="flex pl-10 gap-2">
            <span className="text-3xl text-[#FF497C]">
              <i className="bx bxs-envelope"></i>
            </span>
            <p className="font-semibold text-3xl lg:text-2xl">
              Send Newsletter
            </p>
          </div>
          <div className="flex gap-2 md:flex-row flex-col justify-center items-center">
            <p className="font-medium text-lg md:w-1/2 md:mr-5 px-5 w-full text-black/60">
              Sign-up for our newsletter to get up-to-date from us
            </p>
            <div className="flex gap-2 shrink">
              <input
                placeholder="Enter email"
                type="text"
                className="px-2 py-1 border rounded focus:outline-[#FF497C]"
              />
              <button className="px-3 py-2 bg-green-600 hover:bg-[#ab3154] text-sm text-white font-semibold rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-2 mr-20 mx-auto  ">
        <details className="dropdown">
          <summary className="m-1  btn btn-sm border border-green-600 text-black hover:bg-green-600 hover:text-white transition">
            Sort By <FaArrowDown></FaArrowDown>
          </summary>
          <ul className="p-2 space-y-2 bg-gray-200 shadow menu dropdown-content z-[1]  rounded-box w-28">
            <li onClick={()=>sort('Assending')} className="hover:bg-black border border-black hover:text-white rounded-lg">
              <button>A-Z</button>
            </li>
            <li onClick={()=>sort('Dessending')}  className="hover:bg-black border border-black hover:text-white rounded-lg">
              <button>Z-A</button>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((ld) => (
          <div key={ld._id} className=" card shadow-xl">
            <figure className=" ">
              <img src={ld.image} alt="Shoes" className="h-full w-full" />
            </figure>
            <div className="">
              <h1 className="text-2xl font-semibold ml-4 my-1">
                {ld.Tourist}{" "}
              </h1>
             
                <div className="flex justify-between px-4">
                  <p>TravelTime : {ld.TravelTime}</p>
                  <p>season :{ld.seasonality}</p>
                 
                </div>
                <div className="flex justify-between px-4">
                  <p className="flex items-center">
                    <span className="mr-2">Cost :</span> {ld.averageCost}{" "}
                    <LuCircleDollarSign />{" "}
                  </p>
                  <p> Visit per Year : {ld.visitor} </p>
                </div>
              
              <div className=" p-5">
                <Link to={`/details/${ld._id}`}>
                  <button className="btn w-full  btn-primary ">
                    {" "}
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTourist;
