/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TouristSpot = ({ loaderData }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:grid-cols-5  my-7">
        {loaderData.slice(0, 10).map((ld) => (
          <Link key={ld._id} to={`/details/${ld._id}`}>
            <div className="relative h-96 overflow-hidden  transition duration-300 ease-in-out transform group">
              <img
                src={ld.image}
                alt="Placeholder"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-35 transition duration-300 ease-in-out group-hover:bg-opacity-50">
                <div className="p-4">
                  <h1 className="text-white text-xl"> $ {ld.averageCost} </h1>
                </div>
                <div className="flex flex-col justify-end items-center p-4">
                  <h2 className="text-white text-xl font-bold">{ld.Tourist}</h2>
                  <h3 className="text-white text-lg">{ld.countryName}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/allTourist">
        <div className="w-full  my-16 flex justify-center items-center">
          <a
            href="#_"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Load More..
            </span>
          </a>
        </div>
      </Link>
    </div>
  );
};

export default TouristSpot;
