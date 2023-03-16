import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { server } from '../../config';

export default function AddAnnual () {
  const { userID } = useContext(Context)
  plant_id, observation_date, notes

  const defaultObs = {
    user_id: userID,
    plant_id: '',
    observation_date: '',
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
  }

  const addPlant = (e) => {
    // e.preventDefault()
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
      setObsDetails(defaultAnnual);
      console.log('Annual added:', addedplant);
      setAllPlants(state=>state.concat(addedplant));
      })
    .catch ((err) => console.log('error in AddToPlants', err))
  }

  return (
    <div>
      <br></br>
      {/* If it is a form, it will auto reload */}
      <div className="addPlant"> 
        <label>Common name:
          <input type="text" id={common_name} name='common_name' value={common_name} onChange={updateForm} />
        </label><br></br>
        <label>Type:
          <input type="text" name='type' value={type} onChange={updateForm} />
        </label><br></br>
        <label>Scientific name:
          <input type="text" id={scientific_name} name='scientific_name' value={scientific_name} onChange={updateForm} />
        </label><br></br>
        <label>Inside Seed Start Date:
          <input type="date" name='seed_start_date' onChange={updateForm} />
        </label><br></br>
        <label>Soil Block?
          <input type="checkbox" name='soil_block' onChange={updateForm} />
        </label><br></br>
        <label>Seed Depth:
          <input type="text" name='seed_depth' value={seed_depth} onChange={updateForm} />
        </label><br></br>
        <br></br>
        <h4>Additional Details</h4>
        <label>Days for Germination:
          <input type="text" name="days_to_germ" value={days_to_germ} onChange={updateForm} />
        </label><br></br>
        <label>Weeks to Transplant:
          <input type="number" name="weeks_to_transplant" value={weeks_to_transplant} onChange={updateForm} />
        </label><br></br>
        <label>Outside Seed Start Date:
          <input type="date" name='seed_start_date_outside' onChange={updateForm} />
        </label><br></br>
        <label>Favorite?
          <input type="checkbox" name='favorite' onChange={updateForm} />
        </label><br></br>
        <div className="notes">
          <label>Other Notes:
            <input type="text" name='notes' value={notes} onChange={updateForm} />
          </label><br></br>      
        </div>
        <button className='addButton' onClick={addPlant} >Submit</button>
      </div>
    </div>
  )
}


