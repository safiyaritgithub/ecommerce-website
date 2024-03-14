import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <div className="bg-[#910f37] mt-20 md:px-6 lg:static">
        {/* TopFooter  */}
          <div className=" max-w-[1100px] mx-auto  lg:flex justify-between pt-4 lg:pt-12">
           <div className="flex items-center justify-center mt-8 lg:-mt-2 lg:mb-28">
           <img
                  src="https://theme-crave-demo.myshopify.com/cdn/shop/files/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.png?v=1642089232"
                  className="text-white"
                />
          </div>
          <div className="  text-sm text-[#d7b3a4] leading-9 ml-8  sm:leading-7 ">
            <h2 className="text-xl mt-8 sm:-mt-1 sm:text-2xl text-white">Quick links</h2>
          
            <p className="pt-3 cursor-pointer hover:underline">Shop all</p>
            <p className="cursor-pointer hover:underline">Meet us</p>
            <p className="cursor-pointer hover:underline">Recipes</p>
            <p className="cursor-pointer hover:underline">Contact</p>
            
          </div>
          <div className="  sm:text-md text-[#d7b3a4] ml-8 pt-8 sm:relative bottom-9 leading-7">
            <h2 className="text-xl sm:text-2xl text-white">Our mission</h2>
            <p className="pt-3 ">To bring proud, loud Asian flavors to your</p>
            <p>fingertips any day of the week.</p>
          </div>
        </div>
        <div className="text-white flex justify-center items-center gap-6 text-lg border-b border-[#ebe6d519] mt-8 pb-9  cursor-pointer relative pr-14 ">
        <FaTwitter />
              <FaSquareFacebook />
              <FaPinterest />
              <CiInstagram />
              <FaTiktok />
        </div>
        {/* BottomFooter */}

          <div className="text-center px-24 mt-5 max-w-[1100px] mx-auto   sm:mt-12  ">
          <div className="  sm:flex justify-between items-center pb-20">
            <div className="relative right-20">
              <p className="text-[#d7b3a4] text-sm "> Country/region</p>
              
              {/* <select className="bg-[#910f37] text-white py-2 px-5 rounded-xl border-2  outline-none mt-4 ml-6">
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select> */}
            </div>
              <div className="mt-5 text-white text-2xl relative right-14 md:pt-8 lg:static ">
              <div className="flex gap-4  ">
                <i class="fa-brands fa-cc-visa"></i> 
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-cc-amex"></i>
                <i class="fa-brands fa-paypal"></i>
                <i class="fa-brands fa-cc-diners-club"></i>
                <i class="fa-brands fa-cc-discover"></i>
              </div>
              <div className="mt-4 sm:-mt-2  ">
              <p className=" text-[8px] sm:text-[11px] text-[#d7b3a4] sm:mt-3 sm:ml-4 ">
                © 2023,
                <span className="cursor-pointer hover:underline hover:text-white">theme-crave-demo</span>
                <span className="cursor-pointer hover:underline hover:text-white  sm:static"> Powered by Shopify </span>
                 </p>
              </div>
              
            </div>  

            
            
          </div> 
        </div>  
        
          
         
 
 

      </div>

        </>
  )
}
