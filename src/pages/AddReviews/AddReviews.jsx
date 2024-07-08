import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

const AddReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ClientReview")
      .then((res) => res.json())
      .then((res) => {
        setReviews(res);
      });
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5">
      <div className="w-full md:w-2/3 ">
        {reviews.map((i) => (
          <div
            key={i._id}
            className="w-full border-b-2 m px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                ----    -----
              </span>
              <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                {i.ratings} ⭐
              </span>
            </div>

            <div>
              <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                {i.title}
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {i.description}
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-16 h-16  mt-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={i.image}
                  alt={i.client_name}
                />
              </div>
              <h2 className="text-2xl">{i.client_name}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/3 border-2">
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={45}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <select className="select select-bordered w-full mb-5  max-w-xs">
                <option disabled selected>
                Tell your feelings
                </option>
                <option>Wonderful</option>
                <option>Amazing</option>
                <option>Good</option>
                <option>Satisfied</option>
                <option>Bad</option>
              </select>
              <textarea
                rows="3"
                placeholder="Message..."
                className="p-4 border-2 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
              ></textarea>
              <button
                type="submit"
                className=" mt-4  rounded-lg   transition duration-300"
              >
                <a
                  href="#_"
                  className="relative inline-block mt-2 px-14 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Submit Feedback
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
