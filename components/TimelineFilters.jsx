import React, { useContext, useState, useEffect } from 'react';
import { Context } from "./Context";


const TimelineFilters = () => {
  const { allPlants } = useContext(Context);
  const [ categories, setCategories ] = useState({
    pruning: [],
    budBreak: [],
    flowering: [],
    fruiting: [],
  });

  const elementDefault = {dates: [], name: '', type: '', details: ''}

  const perennials = allPlants.filter(plant => !plant.isannual);

  const constructPruning = () => {
    const pruningElements = perennials.map(plant => {
      const newElement = {...elementDefault,
        dates: ['2022-02-01', '2022-03-01'],
        name:plant.common_name,
        type: plant.type,
        details: plant.pruning_details
      }
    })
    console.log('all', pruningElements)
  }
  
  useEffect(()=> {
    constructPruning()
  }, [])

  console.log(perennials)

  return (
    <>
    Filter by:
    </>
  )
}

export default TimelineFilters;