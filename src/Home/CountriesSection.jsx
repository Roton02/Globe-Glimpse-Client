import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountriesSection = () => {
  const [coutryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/contries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryData(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {coutryData.map((country) => {
        return (
          //   <Link to={`/ReleteCountryData/${country?.name}`} key={country._id} className="card  bg-slate-100 border-2 shadow-xl">
          //   <figure className="px-3 pt-3">
          //     <img src={country.image} alt="Shoes" className="hover:scale-110 transition rounded-xl" />
          //   </figure>
          //   <div className=" px-10 py-5">
          //     <h2 className="text-xl font-bold">{country.name}</h2>
          //     <p>{country.description.slice(0,75)}</p>
          //   </div>
          // </Link>
          <Link key={country._id}
            to={`/ReleteCountryData/${country?.name}`}
            className="card lg:card-side rounded-none bg-base-100 shadow-xl"
          >
            <div className="md:flex">
              <figure className="flex-1">
                <img
                  className="md:pl-4 md:h-36 w-full"
                  src={country.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body flex-1">
                <h2 className="card-title text-3xl">{country.name}</h2>
                <p>{country.description.slice(0, 75)}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesSection;
