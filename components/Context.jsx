import React, {createContext, useState} from "react";

const Context = createContext({})

const ContextProvider = ({children}) => {
  const [allPlants, setAllPlants] = useState([]);

  const allState = {
    allPlants,
    setAllPlants
  }

  return (
    <Context.Provider value={allState}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}
