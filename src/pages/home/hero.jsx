import hero from "../../assets/hero.webp";
import hero2 from "../../assets/hero2.jpg";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper/modules";

export const Hero = () => {
  return (
    <>
      <div>
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                src={hero}
                className="h-[400px] w-full lg:h-[550px] lg:w-full"
              />
            </div>
            <div className=" align-center lg:absolute top-32 left-48 bg-customlightbrown lg:border-2 lg:border-b-[6px]  lg:w-fit py-7 px-10 border-customBrown lg:rounded-2xl">
          <div className="text-2xl lg:text-4xl text-customDarkbrown">
            <h3 className="">Meet your new</h3>
            <h3 className="lg:pt-3">favorite pantry staple!</h3>
          </div>

          <div className="text-customBrown text-sm pt-2 lg:text-md lg:pt-3">
            <p>Cook restaurant-quality Asian dishes in under 30 minutes</p>
            <p className="pt-1">with our meal starters.</p>
          </div>

          <button className="border-2 mb-5 rounded-3xl border-[#512131] px-8 py-3 border-b-4 mt-5 text-sm hover:border-t-4 hover:border-r-4 hover:border-l-4 cursor-pointer">
            Shop now
          </button>
        </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div>
              <img
                src={hero2}
                className="h-[400px] w-full lg:h-[550px] lg:w-full"
              />
            </div>
            <div className=" align-center lg:absolute top-32 left-48 bg-customlightbrown py-16 px-10  lg:border-2 lg:border-b-[6px]  lg:w-fit lg:py-7 lg:px-10 border-customBrown lg:rounded-2xl">
          <div className="text-2xl lg:text-4xl text-customDarkbrown">
            <h3 className="">Bring the heat.</h3>
          </div>

          <div className="text-customBrown text-sm pt-4 lg:text-md lg:pt-3">
            <p>Fire up our hottest flavors with the Heat Lover's Set!</p>
          </div>

          <button className="border-2 mb-5 rounded-3xl border-[#512131] px-8 py-3 border-b-4 mt-7 text-sm hover:border-t-4 hover:border-r-4 hover:border-l-4 cursor-pointer">
            Shop now
          </button>
        </div>
        
         
          </SwiperSlide>
        </Swiper>
      <hr className="border-b-2 border-[#513121] mt-[1px] sm:relative bottom-80 sm:border-[#ebe6d5] sm:mt-2"/>


        {/* content box */}

        {/* <div className=" align-center lg:absolute top-60 left-48 bg-customlightbrown border-b-4 lg:border-2 lg:border-b-[6px]  lg:w-fit py-7 px-10 border-customBrown lg:rounded-2xl">
          <div className="text-2xl lg:text-4xl text-customDarkbrown">
            <h3 className="">Meet your new</h3>
            <h3 className="lg:pt-3">favorite pantry staple!</h3>
          </div>

          <div className="text-customBrown text-sm pt-2 lg:text-md lg:pt-3">
            <p>Cook restaurant-quality Asian dishes in under 30 minutes</p>
            <p className="pt-1">with our meal starters.</p>
          </div>

          <button className="border-2 mb-5 rounded-3xl border-[#512131] px-8 py-3 border-b-4 mt-5 text-sm hover:border-t-4 hover:border-r-4 hover:border-l-4 cursor-pointer">
            Shop now
          </button>
        </div> */}
      </div>
    </>
  );
};
