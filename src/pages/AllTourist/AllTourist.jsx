import { LuCircleDollarSign } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";

const AllTourist = () => {
    const loaderData = useLoaderData()
    console.log(loaderData);
    return (
        <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                loaderData.map(ld => <div key={ld._id} className=" card shadow-xl">
                <figure className=" ">
                  <img  src={ld.image} alt="Shoes" className="h-full w-full" />
                </figure>
               <div className="">
               <h1 className="text-2xl font-semibold ml-4 my-1">{ld.Tourist} </h1>
              <div className="flex justify-between px-6">
              <div>
              <p>TravelTime : {ld.TravelTime}</p>
               <p className="flex items-center"><span className="mr-2">Cost :</span>  {ld.averageCost} <LuCircleDollarSign />  </p>
              </div>
              <div>
              <p>seasonality :{ld.seasonality}</p>
               <p> Visit per Year : {ld.visitor} </p>
              </div>
              </div>
             <div className=" p-5">
              <Link to={`/details/${ld._id}`}>
             <button className="btn w-full  btn-primary "> View Details</button>
              </Link>
             </div>
               </div>
              </div>)
            }
        </div>
    );
};

export default AllTourist;
{/* <div className=" h-52 border-2  border-black rounded-lg " key={ld._id}>
                    <img className="w-full h-full" src={ld.image} alt="" />
                    {ld.Tourist}
                    {ld.countryName}
                </div>) */}