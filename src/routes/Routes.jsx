import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts/>,
    },
  ]);

  export default routes