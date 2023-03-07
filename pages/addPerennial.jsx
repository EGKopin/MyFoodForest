import React, { useState } from 'react'
import SearchApi from '../components/AddPlant/SearchAPI'
import SearchPlantList from '../components/AddPlant/SearchPlantList'
import styles from '../styles/Layout.module.css'
import { server } from '../config'
import AddPlantDetails from '../components/AddPlant/AddPlantDetails'


export default function AddPerennial() {
  const [display, setDisplay] = useState([]);

  const onSubmit = async (input) => {
    const res = await fetch(`${server}/api/GetFlora/?string=${input}`);
    const results = await res.json()
    setDisplay(results.data)
  }

  return (
    <>
      <main className={styles.main}>    
        <SearchApi 
          onSubmit={onSubmit}
        />
        <div>        
          <SearchPlantList plants={display} />
          <AddPlantDetails />
        </div>
      </main>
    </>
  )
}
