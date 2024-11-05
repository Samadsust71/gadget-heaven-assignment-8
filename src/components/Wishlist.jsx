import { useEffect, useState } from "react";
import { getWishListData } from "../utility/utilities";
import WishlistProduct from "./WishlistProduct";
import { useLoaderData } from "react-router-dom";

const Wishlist = () => {
  const allData = useLoaderData();
  const [WishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const wishlistData = getWishListData();
    const allWishListData = allData.filter((data) =>
      wishlistData.includes(data.product_id)
    );
    setWishlistProducts(allWishListData);
  }, [allData]);
  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">Wish List</h3>
        </div>
        <div className="space-y-8 my-10">
          {WishlistProducts.map((product) => (
            <WishlistProduct key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
