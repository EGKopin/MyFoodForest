import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import { server } from '../../config';

export default function AddObservation ({currentID}) {
  const { userID, setAllObs, allObs } = useContext(Context)

  useEffect(()=> {
    setObsDetails(defaultObs)
  }, [currentID]) 

  const defaultObs = {
    user_id: userID,
    plant_id: currentID,
    observation_date: null,
    image: '',
    notes: '',
  }

  const [ obsDetails, setObsDetails ] = useState(defaultObs)
  let { observation_date, image, notes} = obsDetails;

  const updateForm = (e) => {
      setObsDetails({
        ...obsDetails,
        [e.target.name]: e.target.value
      });
    }
  
  const addObs = () => {
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
      setObsDetails(defaultObs);
      console.log('Observation added:', addedobs);
      setAllObs(state=>state.concat(addedobs));
      console.log('All observations', allObs)
      })
    .catch ((err) => console.log('error in addObs', err))
  }

  return (
    <><br></br>
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


