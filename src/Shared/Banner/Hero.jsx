const Hero = ({ heading, subHeading }) => {
  return (
    <div>
      <header>
        <div className="w-full bg-[url('https://i.ibb.co/28GzxtS/o1.jpg')] bg-center bg-cover h-[38rem]">
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-8xl">
                {heading}
              </h1>
              <p
                className="text-xl px-5 py-2 mt-4 font-medium text-white 
              "
              >
                {subHeading}
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
