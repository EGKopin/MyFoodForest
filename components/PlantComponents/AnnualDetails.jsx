import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import moment from "moment";
import AddObservation from './ObservationForm';
import PlantObservations from './PlantObservations';

export default function AnnualDetails (props) {
  const { currentID } = props
  const { allPlants } = useContext(Context);

  let currentDetails = {};

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
    currentDetails = allPlants.filter(plant => plant.id === currentID)[0]
    const { id, common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes } = currentDetails
    return (
      <>
      <h3>{common_name}</h3>
      <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
      <section className="details">
        <div>Days to Germination: {days_to_germ}</div>
        <div>Seed Depth: {seed_depth}</div>
      </section>
      <section className="details">
        <div>Inside Seed Start: {convertDate(seed_start_date)}</div>    
        <div>Outside Seed Start: {convertDate(seed_start_date_outside)}</div>
      </section>
      <div>Soil Block: Favorite </div>
      <div>Weeks To Transplant: <br></br>{weeks_to_transplant}</div>
      <div>Notes:<br></br>{notes}</div>
      </>
    )
    }
  }

  useEffect(() => {
    UpdatedDetails();
  }, [currentID]);


  return (
    <>
    <section className="plantContainer">
      <div className="plantDetails">
        {currentID ? <UpdatedDetails /> : null }
        <br></br>
        {currentID ? <AddObservation currentID={currentID}/> : null }
      </div>
      {currentID ? <PlantObservations currentID={currentID}/> : null }
    </section>
    </>
  )
}