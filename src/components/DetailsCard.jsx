import PropTypes from "prop-types";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaStarHalf } from "react-icons/fa";




const DetailsCard = ({ productDetails,isWhishlistExist, handleCart,handleWishlist}) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    availability,
    rating,
  } = productDetails;
  

  
  return (
    <div className="flex gap-8 p-8 bg-white rounded-xl z-10">
      <div className="basis-[30%] space-y-4 flex justify-center items-center">
        <img
          src={product_image}
          alt={`image of${product_title}`}
          className="rounded-xl"
        />
      </div>
      <div className="basis-[70%] space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          {product_title}
        </h2>
        <p className="font-semibold text-gray-900">Price : ${price}</p>
        <p className="bg-green-100 text-green-500 p-2 rounded-full max-w-fit text-sm">
          {availability ? "In Stock" : "Out of Stock"}
        </p>
        <p className="text-gray-600">{description}</p>
        <div>
          <h3 className="font-bold text-gray-900">Specification :</h3>
          <ol className="list-inside list-decimal text-gray-600">
            {productDetails.Specification &&
              productDetails.Specification.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
          </ol>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Rating : </h3>
          <div className="flex gap-1 items-center">
            <div className="flex items-center text-[#F9C004]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <span className="p-2 bg-gray-100 rounded-full text-sm">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCart(product_id)}
            className="text-xl p-2 border border-[#9538E2] text-[#9538E2] rounded-full cursor-pointer hover:text-white hover:bg-[#9538E2]"
          >
            <AiOutlineShoppingCart />
          </button>
          <button
            disabled ={isWhishlistExist}
            onClick={() => handleWishlist(product_id)}
            className={`text-xl p-2 border ${isWhishlistExist?"border-gray-400 text-gray-400 rounded-full":" border-[#9538E2] text-[#9538E2] rounded-full cursor-pointer hover:text-white hover:bg-[#9538E2]"}`}
          >
            <CiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};
DetailsCard.propTypes = {
  productDetails: PropTypes.object,
  isWhishlistExist:PropTypes.bool,
  handleWishlist:PropTypes.func,
  handleCart:PropTypes.func,
};
export default DetailsCard;
