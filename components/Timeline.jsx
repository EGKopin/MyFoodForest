import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, TimeScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { todayLine, assignedName, tooltipInfo, test } from './service/chartFunctions';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, TimeScale, LinearScale, BarElement, Title, Tooltip, Legend, todayLine, assignedName );

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
      borderSkipped: false,
      borderRadius: 14,
      // outerHeight: 2
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Perennial Care Timeline',
    },
    tooltip: {
      enabled: false,
      external: test,
    },
    plugins: [todayLine, assignedName],
  },
  responsive: true,
  scales: {
    x: {
      min: '2022-01-01',
      max: '2023-12-31',
      type: 'time',
      time: {
        unit: 'month'
      }
    },
    y: {
      stacked: true,
    },
  },
  layout: {
    padding: {
      left: 100
    }
  }
};

/* Labels will be each Event Type */

export const data = {
  // labels,
  datasets: [
    {
      label: 'Dormant Pruning',
      data: [
        {x: ['2022-02-01', '2022-03-10'], y:'Raspberry', name: 'extraName'},
        {x: ['2022-02-15', '2022-03-10'], y:'Blackberry', name: 'extraName2'},
        ],
      borderColor: 'rgb(162, 162, 235)',
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Bud Break',
      data: [
        {x: ['2022-03-31', '2022-04-10'], y:'Raspberry'},
        {x: ['2022-05-03', '2022-05-10'], y:'Blackberry'},
        ],
      borderColor: 'rgb(162, 162, 235)',
      backgroundColor: 'rgb(105, 99, 132)',
    },
  ],
};


export function Timeline() {
  return (
    <div className='timelineSection'>
      <Bar options={options} data={data} />
    </div>
  )
}
