import { useNavigate } from 'react-router-dom'
import bannerImage from '../assets/banner.jpg'


const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center pt-6 pb-40 bg-[#9538E2] lg:w-[98%] mx-auto rounded-b-xl text-white relative mb-80">
      <div className="flex flex-col justify-center items-center lg:w-[60%] text-center">
        <h1 className="font-bold text-2xl lg:text-4xl mb-6">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-[90%] px-10 text-gray-200">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button onClick={()=>navigate('/dashboard')} className='mt-6 mb-24 px-6 py-3 rounded-3xl bg-white text-[#9538E2] font-bold cursor-pointer'>Shop Now</button>
      </div>
      <div className='w-[50%] rounded-xl p-3 border bg-transparent backdrop-blur-xl lg:absolute translate-y-3/4'>
        <img src={bannerImage} alt="Banner image" className='rounded-xl' />
      </div>
    </div>
  )
}

export default Banner
