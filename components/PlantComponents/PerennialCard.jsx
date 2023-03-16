import React from "react";
import moment from "moment"

export default function PerennialCard (props) {
  const { id, common_name, type, scientific_name, planted_date, self_pollinating, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes } = props.props;

  const { setID } = props;

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