// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import TypeWriter from "./TypeWriter";

const Banner = () => {
  return (
    <div className="mb-20 ">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide1 w-full h-[70vh] md:min-h-[90vh] banner-overlay relative">
            <div className="flex items-center h-[60vh] md:h-[80vh]">
              <div className="max-w-7xl mx-auto w-4/5  z-40 relative space-y-3">
                <h2 className="text-white font-bold text-5xl  md:6xl lg:text-8xl">
                  <span className="text-[#FF4838]">
                    {" "}
                    <TypeWriter></TypeWriter>
                  </span>
                </h2>

                <p className="full lg:w-1/2 md:w-9/12 text-white opacity-70">
                  Embark on unforgettable journeys and explore the world wonders
                  with Wanderlust Travel pro. From hidden gems to iconic
                  landmarks, your next adventure awaits
                </p>
                <div className="pt-5">
                  <button
                    type="submit"
                    className="btn rounded-none  border-[#FF0000] hover:border-[#FF0000] bg-transparent btn-overlay btn-overlay3 relative hover:text-[#FF0000] text-white hover:bg-transparent"
                  >
                    <span className="z-30 lg:text-lg font-bold">
                      Take A Tour
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2 w-full h-[70vh] md:min-h-[90vh]  banner-overlay relative">
            <div className="flex items-center h-[60vh] md:h-[80vh]">
              <div className="w-4/5 mx-auto z-40 relative space-y-3">
                <h2 className="text-white font-bold text-5xl  md:6xl lg:text-8xl">
                  <span className="text-[#FF4838]">
                    {" "}
                    <TypeWriter></TypeWriter>
                  </span>
                </h2>

                <p className="full lg:w-1/2 md:w-9/12 text-white opacity-70">
                  Embark on unforgettable journeys and explore the world wonders
                  with Wanderlust Travel pro. From hidden gems to iconic
                  landmarks, your next adventure awaits
                </p>
                <div className="pt-5">
                  <button
                    type="submit"
                    className="btn rounded-none  border-[#FF0000] hover:border-[#FF0000] bg-transparent btn-overlay btn-overlay3 relative hover:text-[#FF0000] text-white hover:bg-transparent"
                  >
                    <span className="z-30 lg:text-lg font-bold">
                      Take A Tour
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3 w-full h-[70vh] md:min-h-[90vh]  banner-overlay relative">
            <div className="flex items-center  h-[60vh] md:h-[80vh]">
              <div className="w-4/5 mx-auto z-40 relative space-y-3">
                <h2 className="text-white font-bold text-5xl  md:6xl lg:text-8xl">
                  <span className="text-[#FF4838]">
                    {" "}
                    <TypeWriter></TypeWriter>
                  </span>
                </h2>

                <p className="full lg:w-1/2 md:w-9/12 text-white opacity-70">
                  Embark on unforgettable journeys and explore the world wonders
                  with Wanderlust Travel pro. From hidden gems to iconic
                  landmarks, your next adventure awaits
                </p>
                <div className="pt-5">
                  <button
                    type="submit"
                    className="btn rounded-none  border-[#FF0000] hover:border-[#FF0000] bg-transparent btn-overlay btn-overlay3 relative hover:text-[#FF0000] text-white hover:bg-transparent"
                  >
                    <span className="z-30 lg:text-lg font-bold">
                      Take A Tour
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide4 w-full h-[70vh] md:min-h-[90vh]  banner-overlay relative">
            <div className="flex items-center h-[60vh] md:h-[80vh]">
              <div className="w-4/5 mx-auto z-40 relative space-y-3">
                <h2 className="text-white font-bold text-5xl  md:6xl lg:text-8xl">
                  <span className="text-[#FF4838]">
                    {" "}
                    <TypeWriter></TypeWriter>
                  </span>
                </h2>

                <p className="full lg:w-1/2 md:w-9/12 text-white opacity-70">
                  Embark on unforgettable journeys and explore the world wonders
                  with Wanderlust Travel pro. From hidden gems to iconic
                  landmarks, your next adventure awaits
                </p>
                <div className="pt-5">
                  <button
                    type="submit"
                    className="btn rounded-none  border-[#FF0000] hover:border-[#FF0000] bg-transparent btn-overlay btn-overlay3 relative hover:text-[#FF0000] text-white hover:bg-transparent"
                  >
                    <span className="z-30 lg:text-lg font-bold">
                      Take A Tour
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
