import React, { useContext, useEffect } from "react"
import { Context } from "../../components/Context"
import moment from "moment";

export default function PlantObservations ({currentID}) {
  const { allObs } = useContext(Context);

  let obsDisplay= []
  
  function ConstructObs  ()  {
    const filteredObs = allObs.filter(obs => obs.plant_id === currentID)
    obsDisplay = filteredObs.map(obs => {
      return (
        <li key={obs.id}>
          {convertDate(obs.observation_date)}  {obs.notes}
        </li>
      )
    });
    return obsDisplay
  };

  const convertDate = (timestamp) => {
    if (timestamp !== null) {
    const newDate = new Date(timestamp)
    const date = moment(newDate).format('L')
    return date
    }
    return 'n/a'
  }

  useEffect(()=> {
    ConstructObs();
  }, [currentID]);

  return (
    <section> 
    Observations
    <ul>
    {currentID ? <ConstructObs /> : null}
    </ul>
    </section>
  )
}