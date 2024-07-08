import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import animationData from "../../assets/addpage.json";

const UpdateTourist = () => {
  const { user } = useContext(AuthContext);
  const loaderData = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const image = form.photo.value;
    const Tourist = form.Tourist.value;
    const countryName = form.desh.value;
    const visitor = form.visit.value;
    const averageCost = form.cost.value;
    const seasonality = form.season.value;
    const located = form.located.value;
    const short_description = form.short_description.value;
    const newItem = {
      name,
      email,
      image,
      Tourist,
      visitor,
      countryName,
      averageCost,

      seasonality,
      located,
      short_description,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change previous data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/updateTourist/${loaderData._id}`,
          {
            method: "PATCH",
            body: JSON.stringify(newItem),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated Successfully!",
                text: "Check My_List or Tourist spot to see the updated value.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "No update!",
                text: "You haven't changed anything!",
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb]">
      <Lottie
        className="absolute inset-0 z-0"
        animationData={animationData}
        loop
        autoplay
      />
      <div className="relative z-10">
        <Helmet>
          <title>Update Tourist Spot</title>
        </Helmet>
        <header className="py-10 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl text-black font-bold">
              Update Spot Details
            </h1>
            <p className="mt-4 text-black text-xl">
              Edit the details of your favorite places.
            </p>
          </div>
        </header>
        <section className="mx-auto pt-10 px-4 md:px-0">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:px-20 lg:px-36 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-black mb-6">
              Update Tourist Spot
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 mb-1">
                  Tourist Spot Name
                </label>
                <input
                  type="text"
                  name="Tourist"
                  defaultValue={loaderData.Tourist}
                  placeholder="Enter Tourist Spot Name"
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 mb-1">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={loaderData.image}
                  placeholder="Enter Photo URL"
                  className="mt-2 p-3 bg-black text-white w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 mb-1">Country Name</label>
                <select
                  name="desh"
                  defaultValue={loaderData.countryName}
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                >
                  <option>Bangladesh</option>
                  <option>Thailand</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Vietnam</option>
                  <option>Cambodia</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 mb-1">
                  Total Visitors Per Year
                </label>
                <input
                  type="number"
                  name="visit"
                  defaultValue={loaderData.visitor}
                  placeholder="Total Visitors Per Year"
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 mb-1">Average Cost</label>
                <input
                  type="number"
                  name="cost"
                  defaultValue={loaderData.averageCost}
                  placeholder="Enter Average Cost"
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 mb-1">Seasonality</label>
                <select
                  name="season"
                  defaultValue={loaderData.seasonality}
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                >
                  <option>Summer</option>
                  <option>Winter</option>
                  <option>Rainy</option>
                  <option>Autumn</option>
                  <option>Monsoon</option>
                  <option>Dry season</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="located"
                  defaultValue={loaderData.located}
                  placeholder="Write Location"
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 mb-1">
                  Short Description
                </label>
                <textarea
                  name="short_description"
                  defaultValue={loaderData.short_description}
                  placeholder="Write a short description about your spot"
                  className="mt-2 bg-black text-white p-3 w-full border-b-2 focus:outline-none focus:border-purple-500"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex  mt-4">
              <button
                type="submit"
                className="relative inline-block px-14 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Update Spot
                </span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateTourist;
