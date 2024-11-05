import { useEffect, useState } from "react"
import { getWishListData } from "../utility/utilities"
import WishlistProduct from "./WishlistProduct"
import { useLoaderData } from "react-router-dom"


const Wishlist = () => {
  const allData = useLoaderData()
  const [WishlistProducts,setWishlistProducts]=useState([])

  
  useEffect(()=>{
    const wishlistData =getWishListData()
    const allWishListData = allData.filter((data) =>
      wishlistData.includes(data.product_id)
    )
    setWishlistProducts(allWishListData)
  },[allData])
  return (
    <div className="mt-10">
    <div className="flex justify-between items-center">
       <h3 className="text-2xl font-semibold text-gray-900">Wish List</h3>
       {/* <div className="flex items-center gap-4">
           <h3 className="text-2xl font-semibold text-gray-900">Total Cost : $</h3>
           <button className="px-4 py-3 rounded-full border border-[#9538E2] text-[#9538E2] cursor-pointer font-semibold">Sort By Price</button>
           <button className="px-4 py-3 rounded-full bg-[#9538E2] text-gray-50 cursor-pointer">Purchase</button>
       </div> */}
     </div>
    <div className="space-y-8 my-10">
    {
    WishlistProducts.map(product=> <WishlistProduct key={product.product_id} product={product}/>)
    
    }
    </div>
   </div>
  )
}

export default Wishlist

