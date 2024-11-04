import { useLoaderData, useParams } from "react-router-dom"
import Heading from "../components/Heading"
import DetailsCard from "../components/DetailsCard"


const ProductDetails = () => {
    const {id}=useParams()
    const allData = useLoaderData()
    const details =allData.find(data=>data.product_id === id)

    
  return (
    <div className="bg-[#9538E2] pt-8 relative pb-40 mb-80">
     <div className="lg:w-[60%] mx-auto text-white pb-10">
        <Heading title={'Product Details'} subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/>
     </div>
     <div className="w-[80%] absolute translate-x-[13%] p-2 rounded-xl bg-transparent backdrop-blur-3xl">
        <DetailsCard details={details}/>
     </div>
    </div>
  )
}

export default ProductDetails
