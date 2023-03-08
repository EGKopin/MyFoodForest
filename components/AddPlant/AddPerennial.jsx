import React, { useState } from "react";
import { server } from '../../config'


export default function AddPerennial () {

  const [ plantDetails, setPlantDetails ] = useState({
    common_name: '',
    type: '',
    scientific_name: '',
    planted_date: null,
    self_pollinating: false,
    bud_break_date: null,
    first_bloom_date: null,
    last_bloom_date: null,
    first_day_fruiting: null,
    last_day_fruiting: null,
    pruning_details: '',
    fruiting_wood: '',
    notes: '',
    isannual: false
  })

  const { common_name, type, scientific_name, planted_date, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes} = plantDetails;

  const updateForm = (e) => {
    if (e.target.name === 'self_pollinating'){
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

  const addPlant = () => {
    console.log('add plant')
    fetch(`${server}/api/AddToPerennials`, {
      method:'POST',
      mode: 'cors',
      body: JSON.stringify(plantDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    .then(addedplant => { //doesn't seem to be running 
      console.log('addedplant', addedplant)
      })
    .catch ((err) => console.log('error in AddToPlants', err))
  }

  return (
    <div>
      <br></br>
      <form className="addPlant">
        <label>Common name:
          <input type="text" id={common_name} name='common_name' value={common_name} onChange={updateForm} />
        </label><br></br>
        <label>Type:
          <input type="text" name='type' value={type} onChange={updateForm} />
        </label><br></br>
        <label>Scientific name:
          <input type="text" id={scientific_name} name='scientific_name' value={scientific_name} onChange={updateForm} />
        </label><br></br>
        <label>Planted Date:
          <input type="date" name='planted_date' value={planted_date} onChange={updateForm} />
        </label><br></br>
        <label>Self-Pollinating?
          <input type="checkbox" name='self_pollinating' onChange={updateForm} />
        </label><br></br>
        <label> Fruiting Wood:
          <input type="text" name='fruiting_wood' value={fruiting_wood} onChange={updateForm} />
        </label><br></br>
        <br></br>
        <h4>Additional Details</h4>
        <label>Bud Break:
          <input type="date" name="bud_break_date" value={bud_break_date} onChange={updateForm} />
        </label><br></br>
        <label>First Bloom:
          <input type="date" name="first_bloom_date" value={first_bloom_date} onChange={updateForm} />
        </label><br></br>
        <label>Last Bloom:
          <input type="date" name='last_bloom_date' value={last_bloom_date} onChange={updateForm} />
        </label><br></br>
        <label>First Fruit:
          <input type="date" name='first_day_fruiting' value={first_day_fruiting} onChange={updateForm} />
        </label><br></br>
        <label>Fruit End:
          <input type="date" name='last_day_fruiting' value={last_day_fruiting} onChange={updateForm} />
        </label><br></br>
        <label>Pruning Notes:
          <input type="text" name='pruning_details'value={pruning_details} onChange={updateForm} />
        </label><br></br>
        <label>Other Notes:
          <input type="text" name='notes' value={notes} onChange={updateForm} />
        </label><br></br>      

        <button className='plantButton' onClick={addPlant} >Submit</button>
      </form>
    </div>
  )
}