import React, { useContext } from "react"
import AnnualCard from "../components/PlantComponents/AnnualCard"
import { Context } from "../components/Context"

const AnnualContainer = ({setID}) => {
  const { allPlants } = useContext(Context);
  
  return (
    <section className="plantContainer">
      {allPlants.map(plant => {
        if (plant.isannual)
        return <AnnualCard props={plant} key={plant.id} setID={setID}></AnnualCard>
      })}
    </section>
  )
}

export default AnnualContainer;