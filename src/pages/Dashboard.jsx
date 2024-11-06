import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
    <Helmet>
      <title>DashBoard | | Gadget Heaven</title>
      </Helmet>
     <div className="bg-[#9538E2] py-8">
      <div className="lg:w-[60%] mx-auto text-center text-white">
        <Heading
          title={"Dashboard"}
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div role="tablist" className="space-x-4 mt-8">
          <NavLink to={'/dashboard/cart'} role="tab" className={({ isActive}) =>
        `
        px-8 py-2 rounded-full
         ${
          isActive
          ? "text-[#9538E2] font-semibold bg-white"
          : "border border-gray-50 text-gray-50"
         }
        `}>
            Cart
          </NavLink>
          <NavLink to={'/dashboard/wishlist'} role="tab" className={({ isActive}) =>
        `
        px-8 py-2 rounded-full
         ${
          isActive
          ? "text-[#9538E2] font-semibold bg-white"
          : "border border-gray-50 text-gray-50"
         }
        `}>
            Wishlist
          </NavLink>
          
        </div>
      </div>
    </div>
     <div className="w-11/12 mx-auto">
     <Outlet/>
     </div>

    </>
 
  );
};

export default Dashboard;
