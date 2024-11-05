import PropTypes from "prop-types"
import { TiDeleteOutline } from "react-icons/ti"

const CartProduct = ({product}) => {
    const {product_title,description,price,product_image}=product
  return (
    <div className="flex justify-between p-8 rounded-xl bg-white">
      <div className="flex gap-8">
         <div className="flex justify-center items-center">
            <img src={product_image} alt="" className="h-28 object-cover rounded-xl" />
         </div>
         <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">{product_title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-xl text-gray-900 font-semibold">Price : ${price}</p>
         </div>
      </div>
      <div className="text-red-400 text-4xl font-light">
      <TiDeleteOutline />
      </div>
    </div>
  )
}
CartProduct.propTypes ={
    product:PropTypes.object
}
export default CartProduct
