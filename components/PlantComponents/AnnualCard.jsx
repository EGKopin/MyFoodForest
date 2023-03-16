import React from "react";
import moment from "moment"

export default function AnnualCard (props) {
  const { id, common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes } = props.props;
  
  const { setID } = props;
  //Doubt I will need, but leaving in for now
  const convertDate = (timestamp) => {
    if (timestamp !== null) {
    const newDate = new Date(timestamp)
    const date = moment(newDate).format('L')
    return date
    }
    return 'n/a'
  }

  const addObs = () => {
    console.log('plant id', id)
  }


  return (
    <div className="plantCard">
      <h1>{common_name}</h1>
       <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
       Would like image here
      <div className="buttons">
        <button onClick={()=>setID(id)}>Details</button>
        <button onClick={addObs}>Observation</button>
      </div>
    </div>
  )
}