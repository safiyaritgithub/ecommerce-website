import fire from "../../assets/fire.webp";

export const Fire = () => {
  return (
    <>
      <div className=" mt-20 rounded-xl overflow-hidden border-2 border-b-4 border-customDarkbrown lg:flex">
        <div>
          <img src={fire} className="lg:h-[33rem] w-full border-b-2 border-b-customDarkbrown  lg:border-r-customDarkbrown" />
        </div>

        <div className="pl-10 pt-10 lg:pl-16 lg:pt-32">
          <div className="text-3xl lg:text-4xl text-customDarkbrown">
          <h2>Rip - Pour - Fire it</h2>
          <h2>up 🌶</h2>
          </div>
          <div className="text-customDarkbrown pt-4 text-sm lg:text-md leading-7">
            <p>Our meal starters are pantry shortcuts for a specific</p>
            <p>Asian dish. They combine all the sauces, aromatics,</p>
            <p>and seasonings you need.</p>
          </div>
          <button className="text-md  bg-[#910f37] text-white rounded-3xl px-6 py-3 mt-5 lg:mt-9  mb-10">
            Shop Starters
          </button>
        </div>
      </div>
    </>
  );
};
