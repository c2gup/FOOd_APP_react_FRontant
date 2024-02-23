import React from 'react'
import { Star } from 'lucide-react'

function Delivery() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <h2 className="mt-4 text-3xl text-center m-8 font-bold text-black">Order Your Food</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 lg:mr-8">
          <div className="mb-10 flex justify-center">
            <img
              className="w-full md:max-w-md rounded-md object-cover"
              src="https://images.pexels.com/photos/4350100/pexels-photo-4350100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="dil"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <p className="text-sm font-bold text-black">Food . Food .  Web Apps</p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
              commodo posuere et sit amet ligula.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Trusted by over 100,000+ Customers and individuals
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-gray-800">4.8/5 . 3420 Reviews</span>
                </span>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <div className="isolate flex -space-x-2">
                  <img
                    className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Dan_Abromov"
                  />
                  {/* Other images */}
                </div>
                <span className="text-sm font-semibold text-gray-700">Join 5000+ People</span>
              </div>
            </div>
            <form className="mt-6">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Delivery
                </button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-600">
                By signing up, you agree to our terms of service and privacy policy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery;


