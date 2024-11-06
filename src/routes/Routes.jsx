import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch("../category.json"),
        children:[
          {
            path: "/",
            element: <Products/>,
            loader:()=>fetch("../products.json")
          },
          {
            path: "/products/:category",
            element: <Products/>,
            loader:()=>fetch("../products.json")
          }
      ]
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children:[
         
          {
            path: "/dashboard/cart",
            element: <Cart/>,
            loader:()=>fetch("../products.json") 
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist/>,
            loader:()=>fetch("../products.json") 
          },
        ]
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader:()=>fetch("../products.json")
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader:()=>fetch("../products.json")
      },
    ],
  },
]);

export default routes;
