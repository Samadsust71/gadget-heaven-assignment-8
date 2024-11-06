import { useLoaderData, useNavigate } from "react-router-dom";
import { clearCartItems, getCartData, removedCartItem } from "../utility/utilities";
import { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { CartWishlistContext } from "../context/CartWishlistContext";
import PurchaseModal from "./PurchaseModal";
import { PiSlidersFill } from "react-icons/pi";

const Cart = () => {
  const allData = useLoaderData();
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice,setTotalPrice] =useState();
  const {addToCart}=useContext(CartWishlistContext)
  const navigate = useNavigate()
  // modal er jinish
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // modal er jinish

  useEffect(() => {
    const cartData = getCartData();
    const allCartsData =[]
    let totalCost = 0
    for (const id of cartData) {
      const availableData = allData.find((data) => data.product_id === id);
      if (availableData) {
        allCartsData.push(availableData);
        totalCost += availableData.price
        
      }
    }
    setCartProducts(allCartsData);
    setTotalPrice(totalCost)
    
  }, [allData]);

  const hanleSortByPrice = ()=>{

    const sortedPosts = [...cartProducts].sort((a, b) => b.price - a.price);
    setCartProducts(sortedPosts);
  }

  const handleDeleteItem =(id)=>{


    const cartItemsWithoutCurrent = cartProducts.filter(
      (products) => products.product_id !== id
    );
    const currentCartItem = cartProducts.filter((product) => product.product_id === id);
    const deletedCartItem = cartProducts.find((product) => product.product_id === id);
    setTotalPrice(()=>totalPrice-deletedCartItem.price)

    if (currentCartItem.length <= 1) {
      setCartProducts(cartItemsWithoutCurrent);
    } else {
      const updatedSameCartItems = currentCartItem.slice(1); 
      const updatedCartItems = [
        ...cartItemsWithoutCurrent,
        ...updatedSameCartItems,
      ];
      setCartProducts(updatedCartItems);
      
      
    }
    removedCartItem(id)
    addToCart()
  }
  const handlePurchase = ()=>{
        clearCartItems()
        setTotalPrice(0)
        setCartProducts([])
        addToCart()
        navigate("/")
  }

 

  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">Cart</h3>
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Total Cost : ${totalPrice}
            </h3>
            <button onClick={()=> hanleSortByPrice()}
             className="flex items-center gap-2 px-4 py-3 rounded-full border border-[#9538E2] text-[#9538E2] cursor-pointer font-semibold">
              <span>Sort By Price</span> <span><PiSlidersFill/></span>
            </button>
            <button onClick={()=>openModal()} disabled ={!totalPrice} className={`px-4 py-3 rounded-full ${totalPrice?" bg-gradient-to-b from-[#9538E2] to-violet-400 text-gray-50 cursor-pointer":"bg-gray-300 text-gray-500 border"}`}>
              Purchase
            </button>
          </div>
        </div>
        <div className="space-y-8 my-10">
          {cartProducts.map((product,idx) => (
            <CartProduct key={idx} product={product} handleDeleteItem={handleDeleteItem}/>
          ))}
        </div>
        <PurchaseModal handlePurchase={handlePurchase} isOpen={isOpen} closeModal={closeModal} totalPrice={totalPrice} />
      </div>
    </div>
  )
};

export default Cart;
