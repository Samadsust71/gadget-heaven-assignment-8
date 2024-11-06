import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartWishlistContext } from "../context/CartWishlistContext";
import logo from '../../src/assets/favicon.png'
const Navbar = () => {
  const {pathname}=useLocation()
  const {cart,wishList}= useContext(CartWishlistContext)
  const navigate= useNavigate()
 
 
  return (
    
        <div className={`navbar rounded-t-xl pt-3 mx-auto ${ pathname==='/'||pathname.includes('products')?"bg-[#9538E2] text-white mt-3 lg:w-[98%] lg:px-28":'bg-gray-100 lg:w-11/12'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content transition duration-100 bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4 ${ pathname==='/'||pathname.includes('products')?"text-white bg-[#9538E2]":'text-black bg-base-100'} `}
          >
            <NavLink to={'/'} className={({ isActive}) =>
                      `
                       ${
                        (pathname==='/'||pathname.includes('products')) ||
                        isActive
                        ? "text-white font-semibold underline"
                        : ""
                       }
                      `
                    }>
              Home
            </NavLink>
            <NavLink to={'/statistics'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Statistics
            </NavLink>
            <NavLink to={'/dashboard'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Dashboard
            </NavLink>
            <NavLink to={'/about'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Sign Up
            </NavLink>
           
            
          </ul>
        </div>
        <Link to={'/'} className="text-xl font-bold flex items-center gap-2">
        <img src={logo} alt="logo"/>
        <span>Gadget Heaven</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 transition duration-100">
        <NavLink to={'/'} className={({ isActive}) =>
                      `
        ${
          pathname==='/'||pathname.includes('products')||
          isActive
          ? "text-white font-semibold underline"
          : ""
          // :isActive
          // ? "text-[#9538E2] font-semibold underline"
          // : ""
         }
                      `
                    }>
              Home
            </NavLink>
            <NavLink to={'/statistics'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Statistics
            </NavLink>
            <NavLink to={'/dashboard'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Dashboard
            </NavLink>
            <NavLink to={'/about'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
             Sign Up
            </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-4 text-2xl">
        <button onClick={()=>navigate("/dashboard/cart")} className="h-10 w-10 px-4 py-3 bg-white rounded-full text-gray-700 flex justify-center"><span>{<AiOutlineShoppingCart/>}</span> <span className="text-xs font-semibold text-[#9538E2]">{cart.length}</span> </button>
        <button onClick={()=>navigate('/dashboard/wishlist')} className="h-10 w-10 px-4 py-3 bg-white rounded-full text-gray-700 flex justify-center"><span>{<CiHeart />}</span> <span className="text-xs font-semibold text-[#9538E2]">{wishList.length}</span> </button>
      </div>
    </div>
    
  );
};

export default Navbar;
