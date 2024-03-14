import { FaArrowRight } from "react-icons/fa";

export const Inbox = () => {
  return (
    <>
    <div className="mt-20">
      <div className="border-2 border-b-[5px] border-customBrown rounded-lg flex flex-col justify-center items-center p-10 lg:p-16 bg-[#faf9e1] ">
        <h2 className="text-4xl text-customBrown">Spice up your inbox</h2>
        <p className="text-md text-customBrown pt-4">Sign up for our newsletter to get exclusive recipes, cooking tips, and more.</p>
        <div className="flex items-center mt-6 "> 
        <div className='labee flex gap-6 relative'> 
          <input type="email"  required className='border-2 bg-[#faf9e1]  border-customDarkbrown border-b-4 lg:w-96 px-2 py-3 rounded-lg  '/>
          <label className=' absolute bottom-5 left-4 pointer-events-none transition-all duration-300 ease text-customDarkbrown'>Email</label>  
           </div>
       <span className="text-customBrown relative right-10"><FaArrowRight /></span>

       </div>
      </div>
    </div>
    </>
  )
}
