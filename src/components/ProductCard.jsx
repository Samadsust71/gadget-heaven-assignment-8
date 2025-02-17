import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const {product_id, product_title, product_image, price } = product;
  const navigate =useNavigate()
  return (
    <div className="bg-base-100 w-full shadow-xl p-6 rounded-xl space-y-4">
      <div className='flex justify-center items-center'>
        <img src={product_image} alt={`image of ${product_title}`} className="rounded-xl h-32" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className='font-bold flex-grow'>{product_title}</h3>
        <p className='text-gray-700'>Price: ${price}</p>

        <button onClick={()=>navigate(`/productDetails/${product_id}`)} className="px-3 py-2 border-2 border-[#9538E2] text-[#9538E2] cursor-pointer rounded-full max-w-fit">
          View Details
        </button>
      </div>
    </div>
  )
};

ProductCard.propTypes={
    product:PropTypes.object
}

export default ProductCard;
