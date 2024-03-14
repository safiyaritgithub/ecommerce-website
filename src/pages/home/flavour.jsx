import flgridne from "../../assets/flgridne.webp";
import flgridto from "../../assets/flgridto.webp";
import gridsvn from "../../assets/gridsvn.webp";
import "../../style.css";
import { FaArrowRight } from "react-icons/fa";

export const Flavour = () => {
  return (
    <>
      <div className=" mt-20">
        <div>
          <h3 className="text-customDarkbrown lg:text-2xl">Find your flavor</h3>
        </div>

        <div className=" grid mt-10">
          <div className="item1  hover:scale-105 duration-700 transition-transform ">
            <img
              src={flgridne}
              className="md:h-60 lg:h-96 border-2  border-customDarkbrown border-b-4 rounded-xl"
            />

            <div className="flex items-center gap-2">
              <p className="text-lg  text-customDarkbrown">Other goodies</p>
              <FaArrowRight />
            </div>
          </div>

          <div className="item3    hover:scale-105 duration-700 transition-transform  ">
            <img
              src={flgridto}
              className="border-2  w-full lg:h-[51rem] border-customDarkbrown border-b-4 rounded-xl  "
            />

            <div className="flex items-center gap-2">
              <p className="text-lg  text-customDarkbrown">
                Meal Starters
              </p>
              <FaArrowRight />
            </div>
          </div>

          <div className="item2 hover:scale-105 duration-700 transition-transform  ">
            <img
              src={gridsvn}
              className="md:h-60 lg:h-96 border-2 border-customDarkbrown border-b-4 rounded-xl"
            />
            <div className="flex items-center gap-2">
              <p className="text-lg  text-customDarkbrown">
                Combo packs
              </p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
