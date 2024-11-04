import Banner from "../components/Banner"
import Heading from "../components/Heading"



const Home = () => {
  return (
    <div >
     <Banner/>
     <Heading title={'Explore Cutting-Edge Gadgets'}/>
     <div className="flex items-center gap-6 lg:w-[98%] lg:px-28 mx-auto">
         <div>All Products category</div>
         <div>Oulet</div>
     </div>
    </div>
  )
}

export default Home
