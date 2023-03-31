import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import moment from "moment";
import AddObservation from './ObservationForm';
import PlantObservations from './PlantObservations';
import PerennialUpdate from './PerennialUpdate';

export default function PerennialDetails (props) {
  const { currentID, updateModal, setUpdateModal } = props
  const { allPlants } = useContext(Context);
  
  const [ currentDetails, setCurrentDetails ] = useState({})

  const convertDate = (timestamp) => {
    if (timestamp !== null) {
    const newDate = new Date(timestamp)
    const date = moment(newDate).format('L')
    return date
    }
    return 'n/a'
  }

  const UpdatedDetails = () => {

    if (currentID){
    setCurrentDetails(allPlants.filter(plant => plant.id === currentID)[0])

    const { id, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, prune_start, prune_end } = currentDetails

    return (
      <section className="plantDetails">
        <div className="detailHeader">
          <h1>{common_name} id {id}</h1> 
        <button className="updateBtn" onClick={() => setUpdateModal(true)}>Update</button>
        </div>
        <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
        <section className="details">
          <div>Pruning Window: {convertDate(prune_start)} to {convertDate(prune_end)}</div>
        </section>
        <section className="details">
          <div>Bud Break: {convertDate(bud_break_date)}</div>
        </section>
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
      </section>
      );
    };
  }

  useEffect(() => {
    UpdatedDetails();
  }, [currentID]);
   

  return (
    <>
    <section className="plantContainer">
      <div>
        {currentID && !updateModal ? <UpdatedDetails /> : null }
        </div>
        <div className="plantDetails">
        {currentID && !updateModal ? <AddObservation currentID={currentID}/> : null }
        </div>
        {updateModal ? <PerennialUpdate id={currentID} details={currentDetails} setUpdateModal={setUpdateModal}/> : null}
        <br></br>
        {/* <div className="plantDetails"> */}
      {/* </div> */}
      <div className="plantDetails">
        {currentID ? <PlantObservations currentID={currentID}/> : null }
      </div>
    </section>
    </>
  )
}