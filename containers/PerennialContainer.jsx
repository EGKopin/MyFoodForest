import React, { useContext } from "react"
import PerennialCard from "../components/PerennialCard"
import { Context } from "../components/Context"

export default function PerennialContainer () {
  const { allPlants } = useContext(Context);
  
  return (
    <section className="plantContainer">
      {allPlants.map(plant => {
        if (!plant.isannual)
        return <PerennialCard props={plant} key={plant.id}></PerennialCard>
      })}
    </section>
  )
}