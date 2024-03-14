import cardne from '../../assets/cardne.webp'
import cardto from '../../assets/cardto.webp';
import cardthr from '../../assets/cardthr.webp';

export const Threecards = () => {

  return(
  
    <>
    <div className='mt-20'>
   
     <div className=' lg:flex lg:gap-4 items-center'>
        <div className='border-2 border-b-[5px] border-customDarkbrown w-fit py-[40px] px-12 lg:py-[60px] lg:px-16 rounded-xl flex flex-col items-center'>
          <img src={cardne} className='w-36 relative bottom-5'/>
          <div className='text-customDarkbrown text-[16px] lg:text-[17px]'>
            <p>"It's completely transformed</p>
            <p className='lg:pl-10'>home cooking."</p>
          </div>
        </div>
        <div className='border-2 border-b-[5px] border-customDarkbrown w-fit py-[30px] px-10 lg:py-12 lg:px-[67px] rounded-xl flex flex-col items-center mt-3'>
          <img src={cardto} className='w-36 relative bottom-5'/>
          <div className='text-customDarkbrown text-[16px] lg:text-[17px]'>
            <p>"I was nothing short of amazed</p>
            <p>to taste flavors I'd had only in</p>
            <p className='pl-8 lg:pl-14'>restaurants!"</p>
          </div>
        </div>
        <div className='border-2 border-b-[5px] border-customDarkbrown w-fit py-[15px] px-10 lg:py-12 lg:px-[67px] rounded-xl flex flex-col items-center mt-3'>
          <img src={cardthr} className='w-36 relative bottom-5'/>
          <div className='text-customDarkbrown text-[16px] lg:text-[17px]'>
            <p>"I made my best quarantine</p>
            <p>meal with Asian Meal Starter</p>
            <p className='lg:pl-24'>Kit."</p>
          </div>
        </div>
      </div> 
       
    </div>
    </>
  )
}


