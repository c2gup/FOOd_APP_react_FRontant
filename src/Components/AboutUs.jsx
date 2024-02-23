import React from "react";

function AboutUs() {
  return (

     <div>
    <div className=" w-[90%] items-center justify-center mx-auto mt-10">
      <div className="inline-flex  items-center space-x-2">
        <span className=" font-bold text-3xl leading-tight text-black sm:text-4xl lg:text-5xl ">
          Driving the force of
          <span className="font-bold text-3xl lg:text-5xl  text-[#f2d13d]">Food</span>
        </span>
      </div>

      <div>
        <p className="mt-4 max-w-xl    text-base leading-relaxed text-gray-600" >
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice
        </p>
      </div>

      {/* about comp */}

      <section>
        <div className="px-2  mt-10 lg:flex lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="my-10 lg:my-0 lg:px-10">
              <h2 className="font-bold text-3xl  ">
                Who are we?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                Launched in 2010, Our technology platform connects customers,
                restaurant partners and delivery partners, serving their
                multiple needs. Customers use our platform to search and
                discover restaurants, read and write customer generated reviews
                and view and upload photos, order food delivery, book a table
                and make payments while dining-out at restaurants. On the other
                hand, we provide restaurant partners with industry-specific
                marketing tools which enable them to engage and acquire
                customers to grow their business while also providing a reliable
                and efficient last mile delivery service. We also operate a
                one-stop procurement solution, Hyperpure, which supplies high
                quality ingredients and kitchen products to restaurant partners.
                We also provide our delivery partners with transparent and
                flexible earning opportunities.
              </p>

              <form action="#" method="POST" className="mt-8 max-w-xl">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    > Order Now
                      
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
              alt="ManWith Laptop"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>


{/* image  */}



    </div>

    <h2 className="font-bold text-3xl  text-center mt-10 " >Glimpses of life at Zomato</h2>

    <div  className="w-[90%] mt-10 mx-auto gap-2 flex " >

<div className="gap-2 flex">
<img src="https://b.zmtcdn.com/web/about/945996bdd3db3d99d80a2112cea29d371563210246.png?output-format=webp" alt="" srcset=""
className=" gap-2 "
/>
</div>

<div className="flex flex-col gap-2" >
  <div>
<img src="https://b.zmtcdn.com/web/about/assets/1279699be7bf8786fda44f92afc9c3511563126954.png?output-format=webp" alt="" srcset="" 
className=""
/>
  </div>

  <div>
  <img src="https://b.zmtcdn.com/web/about/assets/1279699be7bf8786fda44f92afc9c3511563126954.png?output-format=webp" alt="" srcset="" 
className=""
/>
  </div>
</div>
    </div>
    <div  className="w-[90%] mt-2  flex-row-reverse mx-auto gap-2 flex " >

<div className="gap-2 flex">
<img src="https://b.zmtcdn.com/web/about/945996bdd3db3d99d80a2112cea29d371563210246.png?output-format=webp" alt="" srcset=""
className=" gap-2 "
/>
</div>

<div className="flex flex-col gap-2" >
  <div>
<img src="https://cdn.pixabay.com/photo/2016/11/08/06/45/couple-1807617_1280.jpg" alt="" srcset="" 
className=""
/>
  </div>

  <div>
  <img src="https://cdn.pixabay.com/photo/2017/08/07/18/03/people-2606316_1280.jpg" alt="" srcset="" 
className=""
/>
  </div>
</div>
    </div>


    </div>



  );
}

export default AboutUs;
