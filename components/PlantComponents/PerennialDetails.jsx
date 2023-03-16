import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import moment from "moment"
import AddObservation from './ObservationForm'


export default function PerennialDetails (props) {
  const { currentID } = props
  const { allPlants } = useContext(Context);
  const [ obsModal, setObsModal ] = useState(false)

  let currentDetails = {};

  const addObs = () => {
    setObsModal(true)
    console.log('Current plant\'s id', currentID, 'and obsmodal is ', obsModal)
  }

  const UpdateDetails = () => {
    if (currentID){
    currentDetails = allPlants.filter(plant => plant.id === currentID)[0]
    const { id, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes } = currentDetails
    return (
      <>
      <h1>{common_name}</h1>
       <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
       <section className="details">
        <div>First Bloom: {convertDate(first_bloom_date)}</div>
        <div>Last Bloom: {convertDate(last_bloom_date)}</div>
      </section>
      <section className="details">
        <div>Fruiting Start: {convertDate(first_day_fruiting)}</div>    
        <div>Fruiting End: {convertDate(last_day_fruiting)}</div>
      </section>
      <div>Fruiting Wood: {fruiting_wood}</div>
      <div>Pruning Details: <br></br>{pruning_details}</div>
      <div>Notes:<br></br>{notes}</div>
      <button onClick={addObs}>Add observation</button>
      </>
    )
    }
  }

  useEffect(() => {
    UpdateDetails();
  }, [currentID]);



  // Doubt I will need, but leaving in for now
  const convertDate = (timestamp) => {
    if (timestamp !== null) {
    const newDate = new Date(timestamp)
    const date = moment(newDate).format('L')
    return date
    }
    return 'n/a'
  }

  return (
    <>
    <div className="plantDetails">
      <UpdateDetails />
      <br></br>
    {obsModal ? <AddObservation /> : null}
    </div>
    </>
  )
}