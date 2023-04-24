import React, {useState} from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, TimeScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { todayLine, assignedName, tooltipInfo } from './service/chartFunctions';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, TimeScale, LinearScale, BarElement, Title, Tooltip, Legend, todayLine );

export function Timeline({categories}) {
  const { pruning, budBreak, flowering, fruiting} = categories;

  const options = {
    // barPercentage: 0.3,
    barThickness: 15,
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
        borderSkipped: false,
        borderRadius: 14,
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
        stacked: true
      },
    },
    layout: {
      padding: {
        left: 10
      }
    }
  };

  const data = {
    datasets: [
      {
        label: 'Dormant Pruning',
        data: pruning,
        borderColor: 'rgb(162, 162, 235, 0.7)',
        backgroundColor: 'rgb(162, 162, 235, 1)',
        parsing: {
          xAxisKey: 'dates',
          yAxisKey: 'name',
        }
      },
      {
        label: 'Budbreak',
        data: budBreak,
        borderColor: 'rgb(46, 140, 25, 0.7)',
        backgroundColor: 'rgb(46, 140, 25, 1)',
        parsing: {
          xAxisKey: 'dates',
          yAxisKey: 'name',
        }
      },
      {
        label: 'Flowering',
        data: flowering,
        borderColor: 'rgb(176, 93, 179, 0.7)',
        backgroundColor: 'rgb(176, 93, 179, 1)',
        parsing: {
          xAxisKey: 'dates',
          yAxisKey: 'name',
        }
      },
      {
        label: 'Fruiting',
        data: fruiting,
        borderColor: 'rgb(255, 99, 132, 0.7)',
        backgroundColor: 'rgb(255, 99, 132, 1)',
        parsing: {
          xAxisKey: 'dates',
          yAxisKey: 'name'
        },
      },
    ],
  };


  return (
    <div className='timelineSection'>
      <Bar options={options} data={data} />
    </div>
  )
}
