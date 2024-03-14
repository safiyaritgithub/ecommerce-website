import { FaFire } from "react-icons/fa6";
import gridne from "../../assets/gridne.webp";
import gridto from "../../assets/gridto.webp";
import gridthr from "../../assets/gridthr.webp";
import gridfr from "../../assets/gridfr.webp";
import gridfv from "../../assets/gridfv.webp";
import gridsi from "../../assets/gridsi.webp";
import gridsvn from "../../assets/gridsvn.webp";
import gridegt from "../../assets/gridegt.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/free-mode';

import {FreeMode, Mousewheel, Keyboard } from "swiper/modules";




export const BestSellers = () => {
  return (
    <>
      <div className=" mt-14">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl text-customDarkbrown">
            Get your hands on our bestsellers{" "}
          </h2>
          <span className="text-[#f7630c] text-3xl">
            <FaFire />
          </span>
        </div>

        {/* Grid images    */}

        <Swiper
           cssMode={true}
           mousewheel={true}
           keyboard={true}
           freeMode={true}
           modules={[FreeMode,Mousewheel, Keyboard]}
           className="mySwiper"
        >
          </Swiper>
        
          <div className="mt-5 grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 lg:gap-7">

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridne}
              className="  border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
              Larb Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>
          </SwiperSlide>

            <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridto}
              className=" border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            Lemongrass BBQ Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridthr}
              className="border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The East Asian Sampler
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$22.00 CAD</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridfr}
              className="border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            Mala Salad Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridfv}
              className="border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The Southeast Asian Sample
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$29.00 CAD</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridsi}
              className="border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The Heat lover's Set
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$50.00 CAD</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridsvn}
              className="border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The Best Sellers Set
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$45.00 CAD</p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 lg:w-[17rem]">
            <img
              src={gridegt}
              className="border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            Spicy Bulgogi Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>
          </SwiperSlide>
        </div>
        


          

        {/* <div className="mt-5  lg:grid grid-cols-4 gap-5">
          <div>
            <img
              src={gridne}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
              Larb Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>

          <div>
            <img
              src={gridto}
              className="h-72 w-72  border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            Lemongrass BBQ Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>
          <div>
            <img
              src={gridthr}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The East Asian Sampler
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$22.00 CAD</p>
          </div>
          <div>
            <img
              src={gridfr}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            Mala Salad Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>

          <div>
            <img
              src={gridfv}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The Southeast Asian Sample
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$29.00 CAD</p>
          </div>
          <div >
            <img
              src={gridsi}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The Heat lover's Set
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$50.00 CAD</p>
          </div>
          <div>
            <img
              src={gridsvn}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            The Best Sellers Set
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$45.00 CAD</p>
          </div>
          <div>
            <img
              src={gridegt}
              className="h-72 w-72 border-2 border-customDarkbrown border-b-[6px] rounded-xl"
            />
            <p className=" text-[15px] text-customDarkbrown pt-2 hover:underline cursor-pointer">
            Spicy Bulgogi Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">$12.00 CAD</p>
          </div>
        </div> */}
      </div>
    </>
  );
};
