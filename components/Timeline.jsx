import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, TimeScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { todayLine, assignedName, tooltipInfo } from './service/chartFunctions';
import 'chartjs-adapter-date-fns';


ChartJS.register(CategoryScale, TimeScale, LinearScale, BarElement, Title, Tooltip, Legend, todayLine );

export const options = {
  // barPercentage: 0.3,
  barThickness: 25,
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
      borderSkipped: false,
      borderRadius: 14,
      barPercentage: 0.3
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Perennial Care Timeline',
    },
    tooltip: {
      enabled: false,
      external: tooltipInfo,
    },
    plugins: [todayLine],
  },
  responsive: true,
  scales: {
    x: {
      min: '2022-01-01',
      max: '2022-12-31',
      type: 'time',
      time: {
        displayFormats: {
          month: 'MMM'
        },
        unit: 'month'
      }
    },
    y: {
      stacked: true,
    },
  },
  layout: {
    padding: {
      left: 10
    }
  }
};

const pruning = [
  { dates: ['2022-02-01', '2022-03-01'], name:'Fall Gold', type: 'Raspberry', details: 'Prune with care, mofo!'},
  { dates: ['2022-02-11', '2022-03-10'], name:'Black Jewel', type: 'Raspberry', details: 'details here'},
  { dates: ['2022-04-11', '2022-05-10'], name:'Nothing', type: 'Raspberry', details: 'no details here'}
]

const fruiting = [
  { dates: ['2022-04-01', '2022-05-12'], name:'Fall Gold', type: 'Raspberry' }, 
  { dates: ['2022-05-03', '2022-05-10'], name:'Triple Crown', type: 'Blackberry' },
  { dates: ['2022-05-11', '2022-05-19'], name:'Nothing', type: 'Raspberry', details: 'no details here'}
]

export const data = {
  datasets: [
    {
      label: 'Dormant Pruning',
      data: pruning,
      borderColor: 'rgb(162, 162, 235)',
      backgroundColor: 'rgb(255, 99, 132)',
      parsing: {
        xAxisKey: 'dates',
        yAxisKey: 'name',
      }
    },
    {
      label: 'Fruiting',
      data: fruiting,
      borderColor: 'rgb(102, 162, 235)',
      backgroundColor: 'rgb(105, 99, 132)',
      parsing: {
        xAxisKey: 'dates',
        yAxisKey: 'name'
      },
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
