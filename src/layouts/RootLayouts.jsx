import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayouts = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-369px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
