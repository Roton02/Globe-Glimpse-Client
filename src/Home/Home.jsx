import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ClientReview from "./ClientReview";
import CountriesSection from "./CountriesSection";
import TouristSpot from "./TouristSpot";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const loaderData = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Banner></Banner>
      <h1 className="text-center font-bold text-2xl  mx-auto">
        Modern & Beautiful
      </h1>
      <h5 className="text-4xl my-5 text-center  font-bold">
        Explore the World for Yourself{" "}
      </h5>
      <TouristSpot loaderData={loaderData}></TouristSpot>

      <h1 className="text-4xl mb-5 text-center underline font-bold">
        Countries{" "}
      </h1>
      <CountriesSection></CountriesSection>
      <div className="mt-10 rounded-xl ">
        <ClientReview></ClientReview>
      </div>
    </div>
  );
};

export default Home;
