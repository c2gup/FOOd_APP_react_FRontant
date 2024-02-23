import React from 'react';
import data from '../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Top.css"

const TopFood = ({handelcountt}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-[90%] mx-auto">
       <h2 className='font-bold text-3xl  mt-10 pl-10 '> What's on your mind?</h2>
      <Slider {...settings}>
        {data.recipes.map((recipe) => (
          <div className=" rounded-md mt-10 " key={recipe.id} >
            <div className='' >
             
              <div  className="rounded-md   flex justify-center items-center ">
                <div className=' flex justify-end  gap-2 flex-col items-center rounded-t-xl' >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-[180px] rounded-full h-[180px] object-cover"
                  />
                  <div/>
                  <div className="  flex flex-col justify-center items-center">
<p className="text-lg uppercase font-semibold">{recipe.name}</p>
                    <p className=" text-lg text-gray-800">
                    ₹{recipe.caloriesPerServing}
                    </p>                    
                    <button
                      type="button"
                      className="rounded-sm bg-black px-2.5 mt-2 mb-4 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                     onClick={handelcountt} >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopFood;












    
  

