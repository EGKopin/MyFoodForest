import React, {createContext, useState} from "react";

const Context = createContext({})

const ContextProvider = ({children}) => {
  const [ userID, setUserID ] = useState(4)
  const [ allPlants, setAllPlants ] = useState([]);
  const [ allObs, setAllObs ] = useState([])

  const allState = {
    userID,
    setUserID,
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
