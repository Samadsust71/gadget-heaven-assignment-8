import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayouts = () => {
  return (
    <div>
      <div className="bg-gray-100 mb-20 pb-20">
      <Header />
      <div className="min-h-[calc(100vh-369px)]">
        <Outlet />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
