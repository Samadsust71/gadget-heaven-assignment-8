
import { toast } from "react-hot-toast";

const getCartData = () => {
  const storedData = localStorage.getItem("cart");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
const getWishListData = () => {
  const storedData = localStorage.getItem("wishlist");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const addCartDataToDB = (id)=>{

    const getDataFromDB = [...getCartData(),id]
    const dataInJsonFormat = JSON.stringify(getDataFromDB)
       localStorage.setItem('cart',dataInJsonFormat)
       toast.success(`Added to the cart`)

}
const addWishListDataToDB = (id)=>{
    const getDataFromDB = getWishListData()
    if (getDataFromDB.includes(id)) {
      return toast.error(`Already added to the wishlist`)
    }
    else{
       getDataFromDB.push(id)
       const dataInJsonFormat = JSON.stringify(getDataFromDB)
       localStorage.setItem('wishlist',dataInJsonFormat)
       toast.success(`Added to the wishlist`)
    }
}

const removedCartItem = (id) => {
  const cart = getCartData();
  const matchingItems = cart.filter(idx => idx === id);
  const remainingItems = cart.filter(idx => idx !== id);
  
  if (matchingItems.length > 1) {
    const updatedCart = [...remainingItems, ...matchingItems.slice(1)];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify(remainingItems));
  }
  toast.error('Item removed from the Cart')
};


const removeWishListItem =(id)=>{
  const wishList = getWishListData();
  const remainingItems =  wishList.filter(idx => idx !== id);
  localStorage.setItem("wishlist", JSON.stringify(remainingItems));
  
  

}
const clearCartItems = ()=>{
  localStorage.removeItem('cart')
}


export {getCartData,getWishListData,addCartDataToDB,addWishListDataToDB,removedCartItem,clearCartItems,removeWishListItem }