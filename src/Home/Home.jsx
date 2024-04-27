import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ClientReview from "./ClientReview";
import CountriesSection from "./CountriesSection";
import TouristSpot from "./TouristSpot";

const Home = () => {
    const loaderData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <TouristSpot loaderData={loaderData}></TouristSpot>
            <CountriesSection ></CountriesSection>
           <div className="bg-slate-100 rounded-xl">
           <ClientReview></ClientReview>
           </div>
        </div>
    );
};

export default Home;