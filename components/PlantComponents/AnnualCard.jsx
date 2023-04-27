import React from "react";

export default function AnnualCard (props) {
  const { id, common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes } = props.props;
  
  const { setID, setUpdateModal } = props;

  const reset = () => {
    setUpdateModal(false);
    setID(id)
 }

  return (
    <div className="plantCard">
      <h1>{common_name}</h1>
       <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
       Would like image and Favorite star here
      <div className="buttons">
        <button onClick={reset}>Details</button>
      </div>
    </div>
  )
}