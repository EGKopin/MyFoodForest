import React from "react";

export default function PerennialCard (props) {
  const { id, common_name, type, scientific_name } = props.props;

  const { setID, setUpdateModal } = props;

  const reset = () => {
     setUpdateModal(false);
     setID(id)
  }

  return (
    <div className="plantCard">
      <h1>{common_name}</h1>
      <h4>{type}</h4>
       <span className="italics"> {scientific_name}</span>
      <div className="buttons">
        <button onClick={reset}>Details</button>
      </div>
    </div>
  )
}