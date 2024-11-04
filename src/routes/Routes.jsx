import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Products from "../components/Products";

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
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default routes;
