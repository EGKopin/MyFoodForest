import { useState } from 'react'
import SearchApi from '../components/SearchAPI'
import SearchPlantList from '../components/SearchPlantList'
import styles from '../styles/Layout.module.css'
import { server } from '../config'

export default function addPerennial() {
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
        <SearchPlantList plants={display} />
      </main>
    </>
  )
}