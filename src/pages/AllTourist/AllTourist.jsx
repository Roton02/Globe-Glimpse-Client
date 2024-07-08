import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { FaArrowDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Hero from "../../Shared/Banner/Hero";

const AllTourist = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);
  console.log(data);

  // console.log(loaderData);
  const sort = (cost) => {
    // console.log(cost);
    if (cost == "Assending") {
      const remainingAssending = [...loaderData].sort(
        (a, b) => a.averageCost - b.averageCost
      );
      setData(remainingAssending);
    }
    if (cost == "Dessending") {
      const remainingDessending = [...loaderData].sort(
        (a, b) => b.averageCost - a.averageCost
      );
      setData(remainingDessending);
    }
  };
  return (
    <div>
      <div>
      <Hero heading={'Destinations List'} subHeading={'Modern & Beautiful WordPress Theme for all Kinds of Travel and Tourism Busines.'}></Hero>
      </div>
      <Helmet>
        <title>All Tourist</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      
      <div className="flex items-center m-3">
      <div className=" ml-5 md:ml-20 mx-auto  ">
        <details className="dropdown">
          <summary className="m-1   btn btn-md bg-black text-white border border-[#ff0000] light:text-black hover:bg-[#ff0000] hover:text-white transition dark:text-white">
            Sort By <FaArrowDown></FaArrowDown>
          </summary>
          <ul className="p-2 md:ml-12  space-y-2 bg-gray-200 shadow menu dropdown-content z-[1]  rounded-box w-52 py-5">
            <li 
              onClick={() => sort("Assending")}
              className="hover:bg-black btn btn-sm border mx-auto  border-black hover:text-white rounded-lg"
            >
              <button>Cost Low to High</button>
            </li>
            <li
              onClick={() => sort("Dessending")}
              className="hover:bg-black border btn btn-sm  mx-auto  border-black hover:text-white rounded-lg"
            >
              <button>Cost High to Low</button>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <h2 className="text-2xl md:text-5xl font-bold mr-20"> All Tourist Spot</h2>
      </div>
      </div>
      <div className="grid px-4 md:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((ld) => (
          <div key={ld._id} className="card bg-base-100 shadow-xl">
            <div className="relative p-5">
              <figure>
                <img
                  className="w-full hover:scale-105 hover:delay-75 h-64 object-cover"
                  src={ld.image}
                />
              </figure>
              <p className="card-lavel bg-[#ff0000] flex items-center gap-2 bg-red absolute py-3 px-7 -bottom-0 left-14 text-white">
                <IoLocationOutline size={20} />
                <span>{ld.countryName}</span>
              </p>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center gap-2">
                <h2 className="font-semibold text-3xl md:text-4xl mt-3">
                  {ld.Tourist}
                </h2>
                <p className="font-semibold text-red text-2xl md:text-4xl">
                  ${ld?.averageCost}
                </p>
              </div>

              <p>
                {ld.short_description.slice(0,70)}{" "}
                <span className="text-orange-500 font-semibold"> More ...</span>
              </p>
           
              <div className="pt-1">
                <Link to={`/details/${ld._id}`}>
                  <a
                    href="#_"
                    className="relative inline-block mt-2 px-4 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#ff0000] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#ff0000] group-hover:bg-[#ff0000]"></span>
                    <span className="relative text-[#ff0000] group-hover:text-white">
                      View Details
                    </span>
                  </a>
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
