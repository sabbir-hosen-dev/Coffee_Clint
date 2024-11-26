import { BsCup } from "react-icons/bs";
import Coffee from "./CoffeesCard";

import img from '../assets/images/more/1.png'
import { Link } from "react-router-dom";
import useCoffeeContex from './../Hooks/useCoffeeContex';

function Products() {
  const {coffees} = useCoffeeContex();
  return (  
    <div className="my-32">
          <div className="relative">
      <div className="top z-10 flex justify-center text-center">
        <div className="py-10 ">
          <p>--- Sip & Savor ---</p>
          <h4 className="font-rancho my-2 font-bold text-3xl">
            Our Popular Products
          </h4>
          <Link to="/add-coffee" className="">
            <button className="main-btn cursor-pointer m-auto z-30 hover:border-pin border-main border-2  text-white hover:text-main font-semibold  flex gap-2 items-center">
              <span className="text-white shadow-inherit">Add Coffee</span>{" "}
              <BsCup className="text-main text-xl" />
            </button>
          </Link>
        </div>
      </div>

      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          coffees && coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} />)
        }
      </div>

      <div className="absolute z-[-1] top-0">
        <img src={img} alt="" />
      </div>
    </div>
    </div>
  );
}

export default Products;
