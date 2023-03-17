import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import moment from "moment";
import AddObservation from './ObservationForm';
import PlantObservations from './PlantObservations';


export default function PerennialDetails (props) {
  const { currentID, obsModal, setObsModal } = props
  const { allPlants } = useContext(Context);

  let currentDetails = {};

  const addObs = () => {
    setObsModal(true)
  }

  const UpdatedDetails = () => {
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
    UpdatedDetails();
  }, [currentID]);



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
    <section className="plantContainer">
      <div className="plantDetails">
        <UpdatedDetails />
        <br></br>
      {obsModal ? <AddObservation currentID={currentID}/> : null}
      </div>
      <PlantObservations currentID={currentID}/>
    </section>
    </>
  )
}