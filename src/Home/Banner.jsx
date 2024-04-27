
import { useState } from 'react';
  const Carosel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img:'https://i.ibb.co/LJ4bcFY/isuuu.jpg', title: "Travelling Essay", des: "Travelling is important as it teaches us a lot of things. You can learn new skills, new languages, new cultures. "}, {img: 'https://i.ibb.co/p4LjnYb/sl2222.jpg', title: " Private isLand ", des: "An island is a body of land surrounded by water. Continents are also surrounded by water, but because they are so big, they are not considered islands.  "}, {img: 'https://i.ibb.co/qWzZhGR/villa22.jpg', title: "Penthouse", des: "A Penthouse is typically an apartment on the highest floor of an apartment building.  "}, {img: 'https://i.ibb.co/tBRLhFr/rest.jpg', title: "Mohonais Villa", des: "A villa was originally a style of house built for the upper classes in ancient Rome. This style of architecture has been kept and adapted upon."}, {img: 'https://i.ibb.co/gjvy4Pf/sll555.jpg ', title: "Royal King Resturent", des: "A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises. "},];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="w-full  h-[550px] md:h-[650px] lg:h-screen rounded-2xl flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute  before:inset-0 transform duration-1000 ease-linear  overflow-hidden"
    style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})`}}>
    {/* arrow */}
    <div className="absolute bottom-1/4 flex gap-3  px-5">
        {/* arrow left */}
        <button onClick={prevSlider} className="flex justify-center items-center  rounded-full w-6 h-6 md:w-8 md:h-8">
            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="white" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="flex justify-center items-center  rounded-full w-6 h-6 md:w-8 md:h-8">
            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="white" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
    </div>
    {/* text container here */}
    <div className="w-1/2 hidden md:flex flex-col px-4 ml-16 left-0 absolute drop-shadow-lg text-white rounded-lg">
        <h1 data-aos="fade-right" data-aos-duration='2000' className="text-3xl lg:text-5xl mb-3 font-bold">{sliders[currentSlider].title}</h1>
        <p data-aos="zoom-in" data-aos-duration='3000' className="  sm:text-sm md:text-base text-xl lg:text-2xl">{sliders[currentSlider].des}</p>
    </div>
    {/* slider container */}
    <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-20 px-4 py-10">
        <div className="ease-linear duration-300 flex gap-4 items-center"
            style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)`}}>
            {/* sliders */}
            {sliders.map((slide, inx) => (
                <img key={inx} src={slide.img}
                    className={`h-[150px] md:h-[180px]  lg:h-[280px] min-w-[120px] md:min-w-[180] lg:min-w-[220px] ${
                        currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                    } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-20`}
                    alt={slide.title}/>
            ))}
        </div>
    </div>
</div>
  );
};

export default Carosel;