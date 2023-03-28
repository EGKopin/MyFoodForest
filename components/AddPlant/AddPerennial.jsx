import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { server } from '../../config'



export default function AddPerennial () {
  const { setAllPlants } = useContext(Context);

  const defaultPerennial = {
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
    isannual: false,
    prune_start: null,
    prune_end: null
  }

  const [ plantDetails, setPlantDetails ] = useState(defaultPerennial)

  const { common_name, type, scientific_name, planted_date, bud_break_date, first_bloom_date, last_bloom_date, first_day_fruiting, last_day_fruiting, pruning_details, fruiting_wood, notes, prune_start, prune_end} = plantDetails;

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
    // e.preventDefault()
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
    .then(addedplant => {
      setPlantDetails(defaultPerennial);
      console.log('Perennial Added', addedplant);
      setAllPlants(state=>state.concat(addedplant));

      })
    .catch ((err) => console.log('error in AddToPlants', err))
  }

  return (
    <div>
      <br></br>
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
        <label>Planted Date:
          <input type="date" name='planted_date'  onChange={updateForm} />
        </label><br></br>
        <label>Self-Pollinating?
          <input type="checkbox" name='self_pollinating' onChange={updateForm} />
        </label><br></br>
        <label> Fruiting Wood:
          <input type="text" name='fruiting_wood' value={fruiting_wood} onChange={updateForm} />
        </label><br></br>
        <br></br>
        <h4>Additional Details</h4>
        <label>Prune Range Start:
          <input type="date" name="prune_start"  onChange={updateForm} />
        </label><br></br>
        <label>Prune Range End::
          <input type="date" name="prune_end"  onChange={updateForm} />
        </label><br></br>
        <label>Bud Break:
          <input type="date" name="bud_break_date"  onChange={updateForm} />
        </label><br></br>
        <label>First Bloom:
          <input type="date" name="first_bloom_date" onChange={updateForm} />
        </label><br></br>
        <label>Last Bloom:
          <input type="date" name='last_bloom_date'  onChange={updateForm} />
        </label><br></br>
        <label>First Fruit:
          <input type="date" name='first_day_fruiting' onChange={updateForm} />
        </label><br></br>
        <label>Fruit End:
          <input type="date" name='last_day_fruiting' onChange={updateForm} />
        </label><br></br>
        <div className="notes">
          <label>Pruning Notes:
            <input type="text" name='pruning_details'value={pruning_details} onChange={updateForm} />
          </label><br></br>
        </div>
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