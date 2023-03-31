import React, { useContext } from "react"
import PerennialCard from "../components/PlantComponents/PerennialCard"
import { Context } from "../components/Context"

export default function PerennialContainer ({setID, setUpdateModal}) {
  const { allPlants } = useContext(Context);
  
  return (
    <section className="plantContainer">
      {allPlants.map(plant => {
        if (!plant.isannual)
        return (
          <PerennialCard 
            props={plant} 
            key={plant.id} 
            setID={setID}
            setUpdateModal={setUpdateModal}
            />
        )
      })}
    </section>
  )
}