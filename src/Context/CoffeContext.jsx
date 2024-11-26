/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const CoffeeContext = createContext();

const CoffeeContexProvider = ({children}) => {

  const [coffees, setCoffees] = useState([]);

  const [update,setUpdate] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
    .then(res => res.json())
    .then(data => setCoffees(data))
    .catch(err => console.log(err))
  },[update])

  const value = {
    setUpdate,
    coffees,
    update
  }

  return(
     <CoffeeContext.Provider value={value}>
      {children}
    </CoffeeContext.Provider>
  )
}

export {CoffeeContexProvider,CoffeeContext}