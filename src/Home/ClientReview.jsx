import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import arrowImage from "../assets/Arrow.png";

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ClientReview")
      .then((res) => res.json())
      .then((res) => {
        setReviews(res);
      });
  }, []);

  return (
    <div className="border py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Client Reviews
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Below are some feedbacks from our valued clients.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-8" // Added Tailwind class for margin-top
      >
        {reviews.slice(0, 4).map((i) => (
          <SwiperSlide key={i.client_name}>
            <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                  {i.reaction}
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
                  {i.description.slice(0, 75)}{" "}
                  <span className="ml-3 text-blue-400">
                    {" "}
                    <Link to='/AddReviews'>More...</Link>{" "}
                  </span>
                </p>
              </div>

              <div className="flex gap-5 items-end">
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
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link to='/AddReviews'>
            <div className="w-full max-w-sm px-4 py-3  rounded-md shadow-md bg-gray-100">
              <div className="flex border border-dotted border-red-500 flex-col justify-center items-center my-auto">
                <div className="w-36">
                  {" "}
                  <img className="w-28 h-10" src={arrowImage} alt="" />
                </div>
                <h1 className="text-4xl  flex items-center justify-center">
                  See all Client Review{" "}
                </h1>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientReview;
