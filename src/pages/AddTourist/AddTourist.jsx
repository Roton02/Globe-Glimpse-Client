import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Helmet } from "react-helmet-async";


const AddTourist = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  const name = user.displayName
  const email = user.email
    const image = form.photo.value
    const Tourist =form.Tourist.value;
    const countryName = form.desh.value;
    const visitor = form.visit.value;
    const averageCost= form.cost.value;
    const TravelTime = form.TravelTime.value;
    const seasonality = form.season.value;
    const located = form.located.value;
    const short_description = form.short_description.value;
    const newItem ={name,email,image,Tourist,visitor,countryName,averageCost,TravelTime,seasonality,located,short_description}
    console.log(newItem);
    fetch('https://globeglimpse.vercel.app/addTousristSpot',{
      method:'POST',
      body:JSON.stringify(newItem),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.acknowledged) {
        Swal.fire({
          title: "Wow Done!",
          text: "you create a spot succesfully !",
          icon: "success"
        });
        form.reset();
      }
    })
  };
  // ,image,countryName,visitor,averageCost,TravelTime,Tourist,seasonality,Location,short_description

  return (
    <div className="md:w-2/3 mx-auto">
      <Helmet>
        <title>Add New</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      
        <div className="bg-gradient-to-r from-teal-800 to-blue-500 h-52 flex  justify-center  w-full rounded-t-xl">
          <div>
          <img className="h-52 w-full" src='https://i.ibb.co/SvDjR5d/download.png' alt="" />
          </div>
            <div className="text-white font-bold my-auto">
              <h1 className=" text-3xl"><span className="text-pink-950"> REGISTRATION</span> FORM</h1>
              <p className="">Fill the form and add spots of your choice.</p>
            </div>
        </div>
      <form className=" pt-10 space-y-2 pb-5 bg-gray-100 rounded-b-2xl px-10 " 
      onSubmit={handleSubmit}>
        
        {/*  */}
        <div className="md:flex gap-9">
          <div className="md:w-1/2">
            <label htmlFor="image">Tourist Spot Name:</label>
            <br />
            <input
              placeholder="Enter Tourist Spot Name"
              className="border border-black  p-2 rounded-md w-full"
              type="text"
              id="image"
              name="Tourist"
              required
            />
            <br />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="image">Photo URL:</label>
            <br />
            <input
              placeholder="Enter Photo URL:"
              className="border border-black  p-2 rounded-md w-full"
              type="text"
              id="image"
              name="photo"
              required
            />
            <br />
          </div>
        </div>
        {/*  */}
        <div className="md:flex gap-9">
          <div className="md:w-1/2">
            <label htmlFor="country_Name">Country Name:</label>
            <br />
            <select name="desh" required className=" border border-black p-2 rounded-md w-full">
            
              <option>Bangladesh</option>
              <option>Thailand</option>
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Vietnam</option>
              <option>Cambodia</option>
            </select>
          </div>

          <div className="md:w-1/2">
            <label htmlFor="location">Total Visitors Per Year:</label>
            <br />
            <input 
              placeholder="Total Visitors Per Year"
              className="border border-black  p-2 rounded-md w-full"
              type="number"
              id="location"
              name="visit"
              required
            />
            <br />
          </div>
        </div>

        

       <div className="flex md:flex-row flex-col justify-between gap-3">
      <div className="">
      <label htmlFor="average_cost">Average Cost:</label>
        <br />
        <input
          placeholder="Enter Average Cost"
          className="border border-black w-full  p-2 rounded-md "
          type="number"
          id="average_cost"
          name="cost"
          required
        />
        <br />
      </div>

        <div>
        <label htmlFor="seasonality">Seasonality:</label>
        <br />
      
        <select name="season" required className=" border border-black p-2 rounded-md w-full">
              <option>Summer</option>
              <option>Winter</option>
              <option>Rainy</option>
              <option>Autumn</option>
              <option>Monsoon</option>
              <option>Dry season</option>
            </select>
        </div>

        <div>
        <label htmlFor="travel_time">Travel Time:</label>
        <br />
       
        <select name="TravelTime"required  className=" border border-black p-2 rounded-md w-full">
              
              <option>1 Days</option>
              <option>3 Days</option>
              <option>7 Days</option>
              <option>15 days</option>
              <option>1 Month</option>
              
            </select>
        </div>
       </div>

        <label htmlFor="totalVisitorsPerYear">Location:</label>
        <br />
        <input
          placeholder="Write Location"
          className="border border-black  p-2 rounded-md w-full"
          type="text"
          id="totalVisitorsPerYear"
          name="located"
          required
        />
        <br />
        <label htmlFor="short_description">Short Description:</label>
        <br />
        <textarea
          placeholder="Write a sort Description about Your Spot"
          className="border p-2 w-full border-black  rounded-md"
          id="short_description"
          name="short_description"
          rows="4"
          required
        />
        <br />
        <div className="flex justify-center  ">

        <button
              
              className="rounded-md px-20 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border p-1 font-medium border-black text-black hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative  text-black transition duration-300 group-hover:text-white ease">
                Add
              </span>
            </button>
        </div>
      </form>
    </div>
  );
};

export default AddTourist;
