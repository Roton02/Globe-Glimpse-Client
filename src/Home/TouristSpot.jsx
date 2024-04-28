import { Link } from "react-router-dom";

const TouristSpot = ({loaderData}) => {
    return (
        <div>
            
            <div className="grid grid-cols-3 gap-10 my-7">
            {
                loaderData.slice(0,6).map(ld => <div key={ld._id} className="relative card shadow-xl">
                <figure className=" ">
                  <img  src={ld.image} alt="Shoes" className="rounded-xl hover:scale-95 transition delay-50 bg-slate-400 bg-opacity-10 " />
                </figure>
               <div className="flex justify-between absolute top-44 ">
               <div className="pl-10 text-white">
                  <h2 className="card-title font-bold">{ld.Tourist}</h2>
                  <p className="text-sm"> {ld.countryName}</p>
                </div>
                  <div className="flex justify-end ml-24">
                    <Link to={`/details/${ld._id}`}>
                    <button className="hover:bg-white hover:text-black transition delay-150 text-white px-5 rounded-xl font-bold border-2">Details</button>
                    </Link>
                  </div>
               </div>
              </div> )
            }
            </div>
            
        </div>
    );
};

export default TouristSpot;