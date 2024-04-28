import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ClientReview from "./ClientReview";
import CountriesSection from "./CountriesSection";
import TouristSpot from "./TouristSpot";
import Contract from "./Contract";

const Home = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-4xl my-5 text-center underline font-bold">Tourists Spots </h1>
            <TouristSpot loaderData={loaderData}></TouristSpot>
            <h1 className="text-4xl mb-5 text-center underline font-bold">Countries </h1>
            <CountriesSection ></CountriesSection>
            <h1 className="text-4xl mb-5 text-center underline font-bold">Client Review </h1>
           <div className="bg-gray-100 py-10 rounded-xl my-5">
           <ClientReview></ClientReview>
           </div>
           <h1 className="text-4xl mb-5 text-center underline font-bold">Contract </h1>
           <div id="/contract" className="bg-slate-100 rounded-xl">
           <Contract></Contract>
           </div>
        </div>
    );
};

export default Home;