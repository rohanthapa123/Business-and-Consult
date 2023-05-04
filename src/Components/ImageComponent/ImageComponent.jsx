const ImageComponent = ({ image, background  }) => {
  return (
    <>
      <div className='lg:col-start-8 col-span-5 '>
        <div className=''>
          <img src={background} alt="background" className='absolute  -z-10  lg:pt-4 ps-8 -mt-4 md:mt-0 lg:ps-5 scale-75 md:scale-50 lg:scale-100 ' />
        </div>
        <img src={image} alt="heroin" className='md:mt-16 md:ms-6 ms-8 lg:m-0' />
      </div>
      
    </>
  )
}
export default ImageComponent