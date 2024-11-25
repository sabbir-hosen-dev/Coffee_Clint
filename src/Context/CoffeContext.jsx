import { createContext, useState } from "react";

const CoffeeContext = createContext();

const CoffeeContexProvider = ({children}) => {

  const {coffees,setCoffees} = useState([])

  const value = {
    coffees,
    setCoffees
  }

  return <CoffeeContext.Provider value={value}>{children} </CoffeeContext.Provider>
}

export {CoffeeContexProvider,CoffeeContext}