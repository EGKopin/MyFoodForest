import React, { useState } from "react";

export default function AddAnnual () {

  const [ plantDetails, setPlantDetails ] = useState({
    commonName: '',
    sciName: '',
    type: '',
    zones: '',
    watering: '',
    fruiting_branch: '',
    planted_date: '',
    size: '',
    self_pollinating: '',
    light_exposure: '',
    hardiness_tempf: ''
  })

  const { commonName, sciName, type, zones, watering, fruiting_branch, planted_date, size, self_pollinating, light_exposure, hardiness_tempf } = plantDetails;

  const updateForm = (e) => {
    setPlantDetails({
      ...plantDetails,
      [e.target.name]: e.target.value
    });
  }

  const addPlant = () => {
    // console.log('add plant')
    // fetch('/addToPlants', {
    //   method:'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(plantDetails),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    // .then(res => res.json())
    // .then(addedplant => {
    //   console.log(addedplant)
    //   })
    // .catch ((err) => console.log('error in getPlant', err))
  }

  return (
    <div className="updateModal">
        <p>Add a new Annual:</p>
        Name:
        <input type="test" name={commonName} onChange={updateForm} />

        Scientific Name:
        <input type="test" name={sciName} onChange={updateForm} />

        Type:<input type="test" name={type} onChange={updateForm} />
        
        Zones:
        <input type="test" name={zones} onChange={updateForm} />
      
        Watering:<input type="test" name={watering} onChange={updateForm} />

        Fruiting Branches:
        <input type="test" name={fruiting_branch} onChange={updateForm} />

        Planted Date:
        <input type="test" name={planted_date} onChange={updateForm} />

        Size:
        <input type="test" name={size} onChange={updateForm} />
        
        Self-Pollinating:
        <input type="test" name={self_pollinating} onChange={updateForm} />

        Light Exposure:
        <input type="test" name={light_exposure} onChange={updateForm} />
        
        Hardiness Temp F
        <input type="test" name={hardiness_tempf} onChange={updateForm} />

        
        <button className='plantButton' onClick={addPlant} >Submit</button>
        
      </div>
  )
}