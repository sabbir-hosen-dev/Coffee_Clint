import { Link } from "react-router-dom";
import logo from "../../src/assets/images/icons/logo.png"
import backgroundImage from "../assets/images/more/15.jpg";

const Navber = () => {
  return (
    <nav className=" bg-no-repeat bg-cover flex justify-center"
    
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link className="wrap py-3" >
        <img className="max-w-64" src={logo} alt="" />
      </Link>
    </nav>
  );
};

export default Navber;