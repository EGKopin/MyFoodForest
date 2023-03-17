import React from "react";
import moment from "moment"
import AddObservation from './ObservationForm'

export default function PerennialCard (props) {
  const { id, common_name, type, scientific_name } = props.props;

  const { setID, setObsModal } = props;

  const convertDate = (timestamp) => {
    if (timestamp !== null) {
    const newDate = new Date(timestamp)
    const date = moment(newDate).format('L')
    return date
    }
    return 'n/a'
  }

  // const addObs = () => {
  //   setID(id);
  //   setObsModal(true)
  //   console.log(common_name,'\'s id', id)
  // }

  return (
    <div className="plantCard">
      <h1>{common_name}</h1>
       <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
       Would like image here
      <div className="buttons">
        <button onClick={()=>setID(id)}>Details</button>
        {/* <button onClick={()=>addObs(id)}>Observation</button> */}
      </div>
    </div>
  )
}