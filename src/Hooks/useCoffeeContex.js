import { useContext } from "react";
import { CoffeeContext } from "../Context/CoffeContext";


const useCoffeeContex = () => {
  return useContext(CoffeeContext)
};

export default useCoffeeContex;