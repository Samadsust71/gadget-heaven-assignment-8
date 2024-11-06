
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';


const Category = ({category}) => {
    const{category_name}=category
    
  return (
   
       <NavLink to={`/products/${category_name}`} className={({ isActive}) =>
        `
        px-4 py-3 rounded-full
         ${
          isActive
          ? "bg-[#9538E2] font-semibold text-white"
          : "bg-gray-200 text-gray-600"
         }
        `
      }>
        {category_name}
    </NavLink>
  )
}

Category.propTypes={
    category:PropTypes.object
}

export default Category
