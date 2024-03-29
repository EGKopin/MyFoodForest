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
            <label for='planted_date'>Planted Date: </label>
            <input type="date" id='planted_date' name='planted_date'  onChange={updateForm} />
          </div>

          <div className="form-pair">
            <label for='self_pollinating'>Self-Pollinating?</label>
            <input type="checkbox" id='self_pollinating' name='self_pollinating' onChange={updateForm} />
          </div>
        </div>
       
        <label for='fruiting_wood'> Fruiting Wood:</label>
        <textarea name='fruiting_wood' id='fruiting_wood' value={fruiting_wood} onChange={updateForm} />
      
        <span className="form-header">Pruning Date Range</span>
        <div className="form-row">
          <div className="form-pair">
            <label for="prune_start"> Start:</label>
            <input type="date" name="prune_start" id="prune_start" onChange={updateForm} />
          </div>
          <div className="form-pair">
            <label for="prune_end">End:</label>
            <input type="date" name="prune_end" id="prune_end" onChange={updateForm} />
          </div>
        </div>
        {/* <div className="form-row"> */}
        <label for="bud_break_date">Bud Break:</label>
        <input type="date" id="bud_break_date" name="bud_break_date"  onChange={updateForm} />
        {/* </div> */}
          <br />

          <span className="form-header">Blooming Date Range</span>
          <div className="form-row">
            <div className="form-pair">
            <label for="first_bloom_date">Start:</label>
            <input type="date" id="first_bloom_date" name="first_bloom_date" onChange={updateForm} />
          
          </div>
          <div className="form-pair">
            <label for='last_bloom_date'>End:</label>
            <input type="date" id='last_bloom_date'  name='last_bloom_date'  onChange={updateForm} />
          </div>
        </div>
        
        <span className="form-header">Fruiting Date Range</span>
        <div className="form-row">
          <div className="form-pair">
            <label for='first_day_fruiting'>Start:</label>
            <input type="date" name='first_day_fruiting' id='first_day_fruiting' onChange={updateForm} />
          </div>
          <div className="form-pair">
            <label for='last_day_fruiting'>End:</label>
            <input type="date" id='last_day_fruiting' name='last_day_fruiting' onChange={updateForm} />
          </div>
        </div>

        <div className="notes">
          <label for='pruning_details'>Pruning Notes:</label>
          <textarea name='pruning_details' id='pruning_details' value={pruning_details} onChange={updateForm} />
        </div>
        <div className="notes">
          <label for='notes' >Other Notes:</label>
          <textarea name='notes' id='notes' value={notes} onChange={updateForm} />      
        </div>
        <button className='addButton' onClick={addPlant} >Submit</button>
      </div>
    </div>
  )
}