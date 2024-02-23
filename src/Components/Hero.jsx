import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const imageData = [
  {
    url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    text: "Delicious Burgers made with fresh ingredients"
  },
  {
    url: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    text: "Tasty Pizzas for the whole family to enjoy"
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg",
    text: "Yummy Sandwiches perfect for a quick lunch"
  }
];

function Hero() {
  const [slider, setSlider] = useState(0);

  const handleSlidePlus = () => {
    setSlider(slider === imageData.length - 1 ? 0 : slider + 1);
  };

  const handleSlideMinus = () => {
    setSlider(slider === 0 ? imageData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handleSlidePlus();
    }, 2000);

    return () => clearInterval(sliderClear);
  }, [slider]); 

  return (
    <div className='relative w-[90%] mx-auto h-[80vh]'>
      {imageData.map((item, i) => {
        return (
          <div className={`${slider === i ? "block" : "hidden"}`} key={i}>
            <img src={item.url} alt="" className="w-full h-[80vh] rounded-2xl object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <h1 className="text-white text-3xl font-bold text-center">
                <span className="block text-5xl text-gray-800">{item.text.split(' ')[0]}</span>
                <span className="block text-2xl text-gray-600">{item.text.split(' ')[1]}</span>
                <span className="block text-xl text-gray-400">{item.text.split(' ')[2]}</span>
              </h1>
            </div>
          </div>
        )
      })}
      <div className="absolute top-[50%] left-0 right-0 flex justify-between items-center px-4">
        <div>
          <FaChevronLeft
            size={35}
            onClick={handleSlideMinus}
            className='cursor-pointer text-white'
          />
        </div>
        <div>
          <FaChevronRight
            size={35}
            onClick={handleSlidePlus}
            className='cursor-pointer text-white'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;








