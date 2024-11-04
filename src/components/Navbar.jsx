import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const {pathname}=useLocation()
 
  return (
    
        <div className={`navbar rounded-t-xl mt-3 mx-auto ${ pathname==='/'?"bg-[#9538E2] text-white lg:w-[98%] lg:px-28":'bg-white lg:w-11/12'}`}>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4"
          >
            <NavLink to={'/'} className={({ isActive}) =>
                      `
                       ${
                        pathname==="/"?
                        isActive
                        ? "text-white font-semibold"
                        : ""
                        :isActive
                        ? "text-[#9538E2] font-semibold"
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
            <NavLink to={'/uniquePage'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Unique page
            </NavLink>
           
            
          </ul>
        </div>
        <Link to={'/'} className="text-xl font-bold">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
        <NavLink to={'/'} className={({ isActive}) =>
                      `
        ${
          pathname==="/"?
          isActive
          ? "text-white font-semibold underline"
          : ""
          :isActive
          ? "text-[#9538E2] font-semibold"
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
            <NavLink to={'/uniquePage'} className={({ isActive}) =>
                      `
                       ${
                        isActive
                        ? "text-[#9538E2] font-semibold"
                        : ""
                       }
                      `
                    }>
              Unique page
            </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-4 text-2xl">
        <button>{<AiOutlineShoppingCart/>} </button>
        <button>{<CiHeart />} </button>
      </div>
    </div>
    
  );
};

export default Navbar;
