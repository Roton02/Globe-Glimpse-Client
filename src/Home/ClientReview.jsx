import Marquee from "react-fast-marquee";

const ClientReview = () => {
  return (
    <div>
        
      <Marquee pauseOnHover={true}>
        <div className="container flex flex-col w-full max-w-lg p-6  divide-y rounded-md bg-slate-800 text-white dark:divide-gray-800 dark:bg-gray-500 dark:text-gray-800 mx-5">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/3r23bm0/mark.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Mark wood</h4>
                <span className="text-xs dark:text-gray-600">10 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.2</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
            I stumbled upon this tourist website while planning a last-minute getaway, and it was a game-changer. 
            </p>
            <p>
            Not only did they have great deals on accommodations, but their curated lists of activities and attractions saved me hours of research. Thanks to them, I had an unforgettable vacation!
            </p>
          </div>
        </div>
        <div className="  container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-slate-800 text-white dark:divide-gray-800 dark:bg-gray-500 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/HtsQ7Rw/women.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-600">4 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">5</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
            Iam not usually one to leave reviews, but I had such an amazing experience with this tourist website that I had to share. 
            </p>
            <p>
            From the moment I landed on their page, I was impressed by the breadth of options available. Whether you are a budget traveler or looking for luxury, they have something for everyone. Thanks for making my vacation stress-free!
            </p>
          </div>
        </div>
        <div className=" mx-5 container flex flex-col w-full max-w-lg p-6  divide-y rounded-md bg-slate-800 text-white dark:divide-gray-800 dark:bg-gray-500 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/d6vyDNh/m2.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Lorens Bisnoy</h4>
                <span className="text-xs dark:text-gray-600">7 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
            Wow! What an incredible experience! This tourist website helped me plan my dream vacation seamlessly. 
            </p>
            <p>
            From booking accommodations to finding hidden gems off the beaten path, their recommendations were spot-on. I cant wait to use this site for my next adventure!
            </p>
          </div>
        </div>
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-slate-800 text-white dark:divide-gray-800 dark:bg-gray-500 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/sysTXX2/m1.webp"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Alex</h4>
                <span className="text-xs dark:text-gray-600">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.7</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
            As a frequent traveler, I will ve used many tourist websites, but none compare to this one. 
            </p>
            <p>
            The user-friendly interface made it a breeze to navigate, and the wealth of information provided helped me discover new destinations I never would have found otherwise. 10/10 would recommend!
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientReview;
