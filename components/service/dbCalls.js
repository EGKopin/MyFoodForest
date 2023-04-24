import { server } from '../../config';

export const getPlants = () => {
  fetch(`${server}/api/GetAllPlants`)
  .then(res => res.json())
  .then(allPlants => { 
    return allPlants;
    })
  .catch ((err) => console.log('error in getPlants', err))
}