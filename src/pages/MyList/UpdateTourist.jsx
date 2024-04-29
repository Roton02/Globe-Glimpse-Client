import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const UpdateTourist = () => {
    const { user} = useContext(AuthContext);
    const loaderData = useLoaderData()
    console.log(loaderData);
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
        Swal.fire({
          title: "Are you sure?",
          text: "Do you want to change previous data?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Update it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://globeglimpse.vercel.app/updateTourist/${loaderData._id}`, {
            method:'PATCH',
            body:JSON.stringify(newItem),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount>0) {
                Swal.fire({
                    title: "Update succesfully!",
                    text: "Cheek My_List or Tourist spot and get the updated value",
                    icon: "success"
                  });
            }else{
              Swal.fire({
                title: "No update!",
                text: "You haven't changed anything!",
                icon: "error"
              });
            }
        })
          }
        });

        
      };
    return (
        <div className="md:w-2/3 mx-auto">
      
        <div className="bg-gradient-to-r from-teal-800 to-blue-500 h-24 flex justify-around  w-full rounded-t-xl">
            <div>
              <h1 className="text-white font-bold pt-5 text-3xl">Update Spot Details</h1>
              <p></p>
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
            defaultValue={loaderData.Tourist}
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
            defaultValue={loaderData.image}
              placeholder="Enter Tourist Spot Name"
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
        <div className="md:flex items-center justify-between gap-2">
          <div className="md:w-1/2">
            <label htmlFor="country_Name">Country Name:</label>
            <br />
            <select defaultValue={loaderData.countryName} name="desh" className=" border border-black p-2 rounded-md w-full">
             
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
            defaultValue={loaderData.visitor}
              placeholder="Total Visitors Per Year"
              className="border border-black  p-2 rounded-md w-full"
              type="number"
              id="location"
              name="visit"
            />
            <br />
          </div>
        </div>

        

       <div className="flex flex-col md:flex-row justify-between gap-3">
      <div className="w-full md:w-1/3">
      <label htmlFor="average_cost">Average Cost:</label>
        <br />
        <input 
        defaultValue={loaderData.averageCost}
          placeholder="Enter Average Cost"
          className="border border-black w-full p-2 rounded-md "
          type="number"
          id="average_cost"
          name="cost"
        />
        <br />
      </div>

        <div>
        <label htmlFor="seasonality">Seasonality:</label>
        <br />
      
        <select defaultValue={loaderData.seasonality} name="season" className=" border border-black p-2 rounded-md w-full">
             
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
       
        <select defaultValue={loaderData.TravelTime} name="TravelTime" className=" border border-black p-2 rounded-md w-full">
              
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
        defaultValue={loaderData.located}
          placeholder="Write Location"
          className="border border-black  p-2 rounded-md w-full"
          type="text"
          id="totalVisitorsPerYear"
          name="located"
        />
        <br />
        <label htmlFor="short_description">Short Description:</label>
        <br />
        <textarea
        defaultValue={loaderData.short_description}
          placeholder="Enter Your Email"
          className="border p-2 w-full border-black  rounded-md"
          id="short_description"
          name="short_description"
          rows="4"
        />
        <br />
        <div className="flex justify-center  ">

        <button
              
              className="rounded-md px-20 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border p-1 font-medium border-black text-black hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative  text-black transition duration-300 group-hover:text-white ease">
                Update
              </span>
            </button>
        </div>
      </form>
    </div>
    );
};

export default UpdateTourist;