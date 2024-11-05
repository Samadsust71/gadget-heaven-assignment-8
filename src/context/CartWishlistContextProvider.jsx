import { useEffect, useState } from "react"
import { getCartData, getWishListData } from "../utility/utilities"
import { CartWishlistContext } from "./CartWishlistContext"



// eslint-disable-next-line react/prop-types
const CartWishlistContextProvider = ({children}) => {
    const [cart, setCart]=useState([])
    const [wishList,setWishlist]=useState([])
    useEffect(()=>{
        const getStoredCart = getCartData()
        const getStoredWishlit = getWishListData()
        setCart(getStoredCart)
        setWishlist(getStoredWishlit)

    },[])

    
    const addToCart = () => {
     
      const updatedCart = getCartData(); 
      setCart([...updatedCart])
     
      
  };
 
  const addToWishlist = () => {
     
      const updatedWishlist = getWishListData(); 
     
        setWishlist([... updatedWishlist]);
    
      
  };
  return (
    <CartWishlistContext.Provider value={{cart,wishList,addToCart, addToWishlist}}>
        {children}
    </CartWishlistContext.Provider>
  )
}

export default CartWishlistContextProvider

