import React from "react";

export default function PerennialCard (props) {
  const { id, common_name, type, scientific_name } = props.props;

  const { setID } = props;

  return (
    <div className="plantCard">
      <h1>{common_name}</h1>
      <h4>{type}, <span className="italics"> {scientific_name}</span></h4>
      <div className="buttons">
        <button onClick={()=>setID(id)}>Details</button>
      </div>
    </div>
  )
}