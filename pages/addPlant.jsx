import React, { use, useState } from 'react'
import SearchApi from '../components/AddPlant/SearchAPI'
import SearchPlantList from '../components/AddPlant/SearchPlantList'
import styles from '../styles/Layout.module.css'
import { server } from '../config'
import AddPerennial from '../components/AddPlant/AddPerennial'
import AddAnnual from '../components/AddPlant/AddAnnual'

//Main page for adding all plants

export default function AddPlant() {
  const [display, setDisplay] = useState([]);
  let [addType, setAddType] = useState('')

  const TypeCheck = () => {
    if (addType === 'annual') return <AddAnnual />
    if (addType === 'perennial') return <AddPerennial />
  }

  /* Works with API, no longer using atm */
  // const onSubmit = async (input) => {
  //   const res = await fetch(`${server}/api/GetFlora/?string=${input}`);
  //   const results = await res.json()
  //   setDisplay(results.data)
  // }

  const handleChange = (e) => {
    setAddType(e.target.value)
  } 

  return (
    <>
      <main className={styles.main}>    
        {/* <SearchApi  */}
          {/* onSubmit={onSubmit} */}
        {/* /> */}
        <div>
          <h3>The collection grows</h3>
          <br></br>
          <form className='addType'>
            <label>Adding a   
              <select name='plantType' onChange={handleChange} >
                <option value=""></option>
                <option value="annual">annual</option>
                <option value="perennial">perennial</option>
              </select>
            </label>
          </form>
          {/* <SearchPlantList plants={display} /> */}
          <TypeCheck />
        </div>
      </main>
    </>
  )
}
