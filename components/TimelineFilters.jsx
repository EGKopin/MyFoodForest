import React, { useContext, useEffect } from 'react';
import { Context } from "./Context";
import { inferPrune, inferEnd, createEnd, convertYear } from './service/dateConversions'


const TimelineFilters = ({ setCategories }) => {
  const { allPlants } = useContext(Context);

  const elementDefault = {dates: [], name: '', type: '', details: ''}

  const perennials = allPlants.filter(plant => !plant.isannual);

  const constructPruning = () => {
    const pruningElements = perennials.map(plant => {
      const newElement = {...elementDefault,
        name:plant.common_name,
        type: plant.type,
        details: plant.pruning_details
      };
      //if there are both dates, use
      if (plant.prune_start && plant.prune_end){
        newElement.dates = [convertYear(plant.prune_start), convertYear(plant.prune_end)];
      } 
      //if there is only a start date, infer end date
      else if (plant.prune_start && !plant.prune_end){
        newElement.dates = [convertYear(plant.prune_start), inferEnd(plant.prune_start)]
      }
      //if there is only a bud break date, infer best pruning times
      else if (!plant.prune_start && !plant.prune_end && plant.bud_break_date){
        const inferDates = inferPrune(plant.bud_break_date)
        newElement.dates = inferDates
       }        
      return newElement;
    })
    setCategories(state => ({
      ...state,
      pruning:pruningElements
      })
    )
  };
  
  const constructFruiting = () => {
    const fruitingElements = perennials.map(plant => {
      const newElement = {...elementDefault,
        name:plant.common_name,
        type: plant.type,
        details: plant.fruiting_wood,
        dates: [convertYear(plant.first_day_fruiting), convertYear(plant.last_day_fruiting)]
      }
      return newElement;
    })
    setCategories(state => ({
      ...state,
      fruiting:fruitingElements
      })
    )
  };

  const constructBudBreak = () => {
    const buddingElements = perennials.map(plant => {
      const newElement = {...elementDefault,
        name:plant.common_name,
        type: plant.type,
        // details: plant.fruiting_wood,
        dates: [convertYear(plant.bud_break_date), createEnd(plant.bud_break_date)]
      }
      return newElement;
    })
    setCategories(state => ({
      ...state,
      budBreak:buddingElements
      })
    )
  };

  const constructFlowering = () => {
    const floweringElements = perennials.map(plant => {
      const newElement = {...elementDefault,
        name:plant.common_name,
        type: plant.type,
        // details: plant.fruiting_wood,
        dates: [convertYear(plant.bud_break_date), convertYear(plant.bud_break_date)]
      }
      return newElement;
    })
    setCategories(state => ({
      ...state,
      flowering:floweringElements
      })
    )
  };

  useEffect(()=> {
    constructPruning();
    constructFruiting();
    constructBudBreak();
    constructFlowering();
  }, [])

  return (
    <>
    Filter by:
    </>
  )
}

export default TimelineFilters;