import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import error from "../assets/images/404/404.gif";

function NotFound() {
  return (
    <div className="relative"> 
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-[150px] ">
          <Link to="/" className="text-main text-xl cursor-pointer flex  gap-3 items-center">
            <BsArrowLeft className="text-main" />
            <div className="font-rancho">Back to home</div>
          </Link>
        </div>
      </div>
      <div className=" flex justify-center items-center">
      <img src={error} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
