import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import moment from "moment";
import AddObservation from './ObservationForm';
import PlantObservations from './PlantObservations';
import AnnualUpdate from './AnnualUpdate';

export default function AnnualDetails (props) {
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

    const { id, common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes } = currentDetails

    return (
      <section className="plantDetails">
        <div className="detailHeader">
          <h1>{common_name} id {id}</h1> 
        <button className="updateBtn" onClick={() => setUpdateModal(true)}>Update</button>
        </div>
        <h4>{type}, <span className="italics"> {scientific_name}</span></h4>

        <section className="details">
          <div>Days to Germination: {days_to_germ}</div>
          <div>Seed Depth: {seed_depth}</div>
        </section>

        <section className="details">
          <div>Inside Seed Start: {convertDate(seed_start_date)}</div>    
          <div>Outside Seed Start: {convertDate(seed_start_date_outside)}</div>
        </section>

        <section className="details">
            <div>Soil Block:</div>
            <div>Favorite </div>
        </section>

        <div>Weeks To Transplant: <br></br>{weeks_to_transplant}</div>
        <div>Notes:<br></br>{notes}</div>

      </section>
    )
    }
  }

  useEffect(() => {
    UpdatedDetails();
  }, [currentID]);


  return (
    <>
      <section>
      {currentID && !updateModal ? <UpdatedDetails /> : null }
      {currentID && !updateModal ? <AddObservation currentID={currentID}/> : null }

      {updateModal ? <AnnualUpdate id={currentID} details={currentDetails} setUpdateModal={setUpdateModal}/> : null}

      <div className="plantDetails">
        {currentID ? <PlantObservations currentID={currentID}/> : null }
      </div>
    </section>
    </>
  )
}