import { useLoaderData } from "react-router-dom"
import { getCartData } from "../utility/utilities"
import { useEffect, useState } from "react"
import CartProduct from "./CartProduct"


const Cart = () => {
  
  const allData = useLoaderData()
  const [cartProducts,setCartProducts]=useState([])

  
  useEffect(()=>{
    const cartData =getCartData()
    const allCartsData = allData.filter((data) =>
      cartData.includes(data.product_id)
    )
    setCartProducts(allCartsData)
  },[allData])

  


 
  return (
    <div className="mt-10">
     <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-900">Cart</h3>
        <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-gray-900">Total Cost : $</h3>
            <button className="px-4 py-3 rounded-full border border-[#9538E2] text-[#9538E2] cursor-pointer font-semibold">Sort By Price</button>
            <button className="px-4 py-3 rounded-full bg-[#9538E2] text-gray-50 cursor-pointer">Purchase</button>
        </div>
      </div>
     <div className="space-y-8 my-10">
     {
     cartProducts.map(product=> <CartProduct key={product.product_id} product={product}/>)
     
     }
     </div>
    </div>
  )
}

export default Cart
