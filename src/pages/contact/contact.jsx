import { Footer } from "../../common/footer";


export const Contact = () => {
  return (
    <>
    <div className='max-w-[800px] mx-auto text-customDarkbrown'>
      <div className='mt-5'>
        <h2 className='text-3xl lg:text-5xl text-customDarkbrown'>Contact</h2>
      </div>
      <div className='pt-12'>
      <h2 className='text-md pl-2 lg:text-2xl'>Have a question, comment, or just want to say hi? 👇</h2>
      <div>
        <form className='bg-[#F2EFDD] pt-6'>
          <div className='flex flex-col gap-2  lg:flex lg:gap-6'>  
          <div className='labee  relative'> 
          <input type="text"  required  className='border-2 border-[#3d081b] border-b-4 lg:w-96 px-2 py-3 rounded-lg  '/>
          <label className=' absolute bottom-5 left-4 pointer-events-none transition-all duration-300 ease '>Name</label>  
           </div>
           <div className='labee flex gap-6 relative'> 
          <input type="email"  required className='border-2 border-[#3d081b] border-b-4 lg:w-96 px-2 py-3 rounded-lg  '/>
          <label className=' absolute bottom-5 left-4 pointer-events-none transition-all duration-300 ease '>Email</label>  
           </div>
           </div>

          <div className='flex flex-col gap-2 lg:gap-4  pt-2'>

          <div className='labee  relative'>
          <input type="tel" required className='border-2 border-[#3d081b] border-b-4 rounded-lg p-3 lg:w-[50rem] '/>
          <label className=' absolute bottom-5 left-4 pointer-events-none transition-all duration-300 ease '>Phone Number</label>  
          </div>

          <div className='labee  relative'>
          <input type="text"  className='border-2 border-[#3d081b] border-b-4 p-10 rounded-lg lg:w-[50rem]'/>
          <label className=' absolute bottom-16 left-4 pointer-events-none transition-all duration-300 ease '>Comments</label>  
          </div>

          </div>

        <button className='border  bg-[#910f37] text-white rounded-3xl px-10 py-3 lg:mt-9 mt-4 mb-10 hover:scale-105 duration-500 transition-transform'>Send</button>
          


        </form>
      </div>

      </div>
    </div>
    <div >
      <Footer/>
    </div>
    </>
  )
}
