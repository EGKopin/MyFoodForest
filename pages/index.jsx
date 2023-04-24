import { useContext, useEffect } from 'react';
import { server } from '../config';
import styles from '../styles/Layout.module.css';
import { Context } from '../components/Context';
import Canvas from '../components/Canvas/Canvas'
 
export default function Home () {
  const { allPlants, setAllPlants, setAllObs } = useContext(Context)

  const getPlants = () => {
    fetch(`${server}/api/GetAllPlants`)
    .then(res => res.json())
    .then(allPlants => { 
      setAllPlants(allPlants);
      })
    .catch ((err) => console.log('error in getPlants', err))
  }

  const getObs = () => {
    fetch(`${server}/api/GetAllObservations`)
    .then(res => res.json())
    .then(allObs => { 
      setAllObs(allObs);
      })
    .catch ((err) => console.log('error in getAllObservations', err))
  }

  useEffect(() => {
    getPlants();
    getObs();
  }, [])

  return (
    <>
      <main className={styles.main}>    
???
<Canvas />
      </main>
    </>
  )
}
