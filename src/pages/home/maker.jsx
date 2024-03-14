import maker from '../../assets/maker.webp'

export const Maker = () => {
  return (
    <>
    <div className="mt-20 border-2 border-customBrown overflow-hidden rounded-xl lg:flex lg:gap-48 ">
      <div className='pt-14 pl-10 lg:pt-28 lg:pl-20'>
        <div className="text-customBrown text-2xl lg:text-4xl">
      <h2>Trusted</h2>    
    <h2 className='mt-1 lg:mt-3'>tastemakers</h2>
    </div>
    <div className="text-sm lg:text-md leading-6 mt-2 mb-4 lg:leading-8  text-customBrown">
      <p>Maiko Kyogoku's signature cooking style is a bal-</p>
      <p>ance of refinement + whimsy. And she lent her</p>
      <p>tangy expertise to our favorite starters.</p>
    </div>

    
      </div>
      <div>
    <img src={maker} className=' lg:h-[27rem] border-t-2 lg:border-l-2 border-customDarkbrown '/>
    </div>

     
    </div> 
     
    </>
  )
}
