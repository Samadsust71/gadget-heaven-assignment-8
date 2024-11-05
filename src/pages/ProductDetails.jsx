import { useLoaderData, useParams } from "react-router-dom"
import Heading from "../components/Heading"
import DetailsCard from "../components/DetailsCard"
import { useContext, useEffect, useState } from "react"
import { getWishListData } from "../utility/utilities"
import { addCartDataToDB, addWishListDataToDB } from "../utility/utilities";
import { CartWishlistContext } from "../context/CartWishlistContext"


const ProductDetails = () => {
    const {id}=useParams()
    const{addToCart, addToWishlist}=useContext(CartWishlistContext)
    const[productDetails,setProductDetails]=useState({ Specification:[]})
    const allData = useLoaderData()
    const [isWhishlistExist,setIsWhislistExist]= useState(false)
    useEffect(()=>{
      const details =allData.find(data=>data.product_id === id)
      setProductDetails(details)
      const wishListDataFromLs = getWishListData()
      const isExist = wishListDataFromLs.includes(details.product_id)
      if (isExist) {
        setIsWhislistExist(isExist)
      }
    },[allData,id])
    
    const handleCart = () => {
      addCartDataToDB(id);
      addToCart(id)
    };
    const handleWishlist = () => {
      addWishListDataToDB(id);
      addToWishlist()
      setIsWhislistExist(true)
    };
    
  return (
    <div className="bg-[#9538E2] pt-8 relative pb-40 mb-80">
     <div className="lg:w-[60%] mx-auto text-white pb-10">
        <Heading title={'Product Details'} subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/>
     </div>
     <div className="w-[80%] absolute translate-x-[13%] p-2 rounded-xl bg-transparent backdrop-blur-3xl">
        <DetailsCard isWhishlistExist={isWhishlistExist} handleWishlist={handleWishlist}  handleCart={ handleCart} productDetails={productDetails}/>
     </div>
    </div>
  )
}

export default ProductDetails
