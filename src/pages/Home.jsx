import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import Category from "../components/Category";

const Home = () => {
  const category = useLoaderData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(category);
  }, [category]);


  return (
    <div>
      <Banner />
      <Heading title={"Explore Cutting-Edge Gadgets"} />
      <div className="flex gap-6 lg:w-[98%] lg:px-28 mx-auto pt-10">
        <div className="flex flex-col gap-6 basis-[20%]">
        <NavLink to={'/'} className={({ isActive}) =>
        `
        px-4 py-3 rounded-full
         ${
          isActive
          ? "bg-[#9538E2] font-semibold text-white"
          : "bg-base-200 text-gray-600"
         }
        `
      }>
        All Products
    </NavLink> 
          {categories.map((category) => (
            <Category key={category.category_id} category={category} />
          ))}
        </div>
        <div className="basis-[80%]">
         <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Home;
