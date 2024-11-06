import { useContext, useEffect, useState } from "react";
import { getWishListData, removeWishListItem } from "../utility/utilities";
import WishlistProduct from "./WishlistProduct";
import { useLoaderData } from "react-router-dom";
import { CartWishlistContext } from "../context/CartWishlistContext";

const Wishlist = () => {
  const allData = useLoaderData();
  const [WishlistProducts, setWishlistProducts] = useState([]);
  const {addToWishlist}=useContext(CartWishlistContext)

  useEffect(() => {
    const wishlistData = getWishListData();
    const allWishListData = allData.filter((data) =>
      wishlistData.includes(data.product_id)
    );
    setWishlistProducts(allWishListData);
  }, [allData]);

  const handleDeleteItem =(id)=>{

    const cartItemsWithoutCurrent = WishlistProducts.filter(
      (products) => products.product_id !== id
    );

      setWishlistProducts(cartItemsWithoutCurrent);
    removeWishListItem(id)
    addToWishlist()
  }
  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">Wish List</h3>
        </div>
        <div className="space-y-8 my-10">
          {WishlistProducts.map((product) => (
            <WishlistProduct key={product.product_id}  handleDeleteItem ={ handleDeleteItem } product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
