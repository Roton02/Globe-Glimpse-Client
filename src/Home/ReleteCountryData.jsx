import { Helmet } from "react-helmet-async";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const ReleteCountryData = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  if (loaderData.length < 1) {
    return <div className="bg-gray-50 py-10 rounded-xl">
      <Helmet>
        <title>Releted-Country</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <img className="flex justify-center items-center w-96 mx-auto" src="https://i.ibb.co/9nRx15g/not.jpg" alt="" />
      <h1 className=" text-xl md:text-3xl text-center  font-bold text-red-600">There are no spot matching this country !</h1>
    </div>
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Helmet>
        <title>Releted-Country</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      {loaderData.map((ld) => {
        return (
          <div key={ld._id} className="card  md:card-side bg-base-100 border">
            <figure>
              <img className="md:w-52  w-full  h-full" src={ld.image} alt="Movie" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-bold">{ld.Tourist}</h2>
                <h1 className="font-bold">Time: {ld.TravelTime}</h1>
              <div className="flex items-center  gap-6 ">
                <h1 className="font-bold  flex  items-center">Cost: {ld.averageCost}<BsCurrencyDollar /> </h1>
                <h1 className="font-bold text-sm bg-green-600 rounded-xl text-white p-2">
                  {" "}
                  {ld.seasonality}
                </h1>{" "}
                <hr />
              </div>{" "}
              <hr />
              <p className="font-bold ">
                <span>Location: {ld.located},</span>
                <span>{ld.countryName}</span>
              </p>
              <p>
                {ld.short_description.slice(0,85)}
              </p>
              <Link to={`/details/${ld?._id}`} className="card-actions justify-center ">
                <button className="rounded-md w-1/2  overflow-hidden relative group cursor-pointer border p-1 font-medium border-green-600 text-green-600 hover:text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative  text-green-600 transition duration-300 group-hover:text-white ease">
                    View Details
                  </span>
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReleteCountryData;
