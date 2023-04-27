import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { server } from '../../config';
import { formatForForm } from '../service/dateConversions'

export default function AnnualUpdate ({id, details, setUpdateModal}) {
  const { setAllPlants } = useContext(Context);

  const [ plantDetails, setPlantDetails ] = useState(details);

  plantDetails.id = id;

  const { common_name, type, scientific_name, days_to_germ, seed_depth, seed_start_date, soil_block, weeks_to_transplant, seed_start_date_outside, favorite, notes } = plantDetails;

  const updateForm = (e) => {
    if (e.target.name === 'favorite' || e.target.name === 'soil_block'){
      setPlantDetails({
        ...plantDetails,
        [e.target.name]: e.target.checked
      });
    } else {
      setPlantDetails({
        ...plantDetails,
        [e.target.name]: e.target.value
      });
    }
  }

  const updateAnnual = () => {
    fetch(`${server}/api/UpdateAnnual`, {
      method:'PATCH',
      mode: 'cors',
      body: JSON.stringify(plantDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    .then(updatedPlant => {
      console.log('Annual Updated', updatedPlant);
      setUpdateModal(false)

      })
    .catch ((err) => console.log('error in AnnualUpdate', err))
  }

  return (
    <div>
      <div className="addPlant">
        <label for="common_name">Common name:</label>
        <input type="text" id="common_name" name='common_name' value={common_name} onChange={updateForm} />
        <br />

        <label for="type">Type:</label>
        <input type="text" id="type" name='type' value={type} onChange={updateForm} />
        <br />

        <label for='scientific_name'>Scientific name:</label>
        <input type="text" id='scientific_name' name='scientific_name' value={scientific_name} onChange={updateForm} />
        <br />

        <div className="form-row">
          <div className="form-pair">
            <label for='favorite'>Favorite?</label>
            <input type="checkbox" id='favorite' name='favorite' onChange={updateForm} />
          </div>
        </div>
       
        <label for='days_to_germ'>Days to Germinate</label>
        <textarea name='days_to_germ' id='days_to_germ' value={days_to_germ} onChange={updateForm} />
      
        <span className="form-header">Seed Starting Dates</span>
        <div className="form-row">
          <div className="form-pair">
            <label for="seed_start_date"> Start:</label>
            <input type="date" name="seed_start_date" id="seed_start_date" value={formatForForm(seed_start_date)} onChange={updateForm} />
          </div>
          <div className="form-pair">
            <label for="seed_start_date_outside">End:</label>
            <input type="date" name="seed_start_date_outside" id="seed_start_date_outside" value={formatForForm(seed_start_date_outside)} onChange={updateForm} />
          </div>
        </div>
       
        <div className="notes">
          <label for='notes'>Notes:</label>
          <textarea name='notes' id='notes' value={notes} onChange={updateForm} />
        </div>
        <button className='addButton' onClick={updateAnnual} >Update</button>
        <button className='addButton' onClick={() => setUpdateModal(false)} >Cancel</button>
      </div>
    </div>
  )
}