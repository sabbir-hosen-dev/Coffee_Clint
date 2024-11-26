import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

function MainElement() {
  return (
    <div className="">
      <Navber />
      <div className="min-h-[calc(100vh-78px-570px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainElement;
