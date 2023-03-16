import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { server } from '../../config';

export default function AddObservation () {
  const { userID, setAllObs } = useContext(Context)

  const defaultObs = {
    user_id: userID,
    plant_id: null,
    observation_date: null,
    image: '',
    notes: '',
  }

  const [ obsDetails, setObsDetails ] = useState(defaultObs)
  const { plant_id, observation_date, image, notes} = obsDetails;

  const updateForm = (e) => {
      setObsDetails({
        ...obsDetails,
        [e.target.name]: e.target.value
      });
    }
  
  const addObs = (e) => {
    console.log('add observation', obsDetails)
    fetch(`${server}/api/AddObservation`, {
      method:'POST',
      mode: 'cors',
      body: JSON.stringify(obsDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    .then(addedobs => { 
      // setObsDetails(defaultAnnual);
      console.log('Observation added:', addedobs);
      // setAllPlants(state=>state.concat(addedplant));
      })
    .catch ((err) => console.log('error in addObs', err))
  }

  return (
    <><br></br>
      <h3>Observation Form</h3>
      <div className="addPlant obs"> 
        <label>Observation Date:
          <input type="date" name='observation_date' onChange={updateForm} />
        </label><br></br>
        <label>Image Link:
          <input type="text" name='image' value={image} onChange={updateForm} />
        </label><br></br> 
        <div className="notes">
          <label>Notes:
            <input type="text" name='notes' value={notes} onChange={updateForm} />
          </label><br></br>      
        </div>
        <button className='addButton' onClick={addObs} >Submit</button>
      </div>
    </>
  )
}


