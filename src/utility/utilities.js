// import { toast } from "react-toastify";
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
    const getDataFromDB = getCartData()
    if (getDataFromDB.includes(id)) {
        return toast.error(`Already added to the cart`)
    }
    else{
       getDataFromDB.push(id)
       const dataInJsonFormat = JSON.stringify(getDataFromDB)
       localStorage.setItem('cart',dataInJsonFormat)
       toast.success(`Added to the cart`)
    }
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


export {getCartData,getWishListData,addCartDataToDB,addWishListDataToDB}