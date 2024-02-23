import React from 'react'
import mealData from '../data/data'

function OurFood({handelcounts}) {
  return (

      <div className="mt-6 " >
            <h2 className='font-bold text-center mb-10 text-3xl text-[#f2d13d] mt-10 pl-10 '> OUR FOOD</h2>

     
      <div className="w-[95%] flex flex-wrap gap-16  items-center justify-center mx-auto">
      
      {
            mealData.recipes.map((item)=>{
                  return(

                        

                        
                            <div className="w-[300px] rounded-md border">
                              <img
                                src={item.image}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                              />
                              <div className="p-4">
                                <h1 className="text-lg text-center font-semibold">{item.name}</h1>
                                
                    <p className=" text-lg text-center text-gray-800">
                    ₹{item.caloriesPerServing}
                    </p>
                                <button
                                  type="button"
                                  className="mt-4  w-[70%] justify-center flex mx-auto rounded-sm bg-black px-2.5 py-1 text-[14px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                 onClick={handelcounts} >
                                  Add TO Cart
                                </button>
                              </div>
                            </div>
                         

                  )
            })
      }
      
    </div>

    </div>
  )
}

export default OurFood
