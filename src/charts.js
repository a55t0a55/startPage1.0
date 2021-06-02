import { Line } from 'react-chartjs-2';
import {useState} from 'react';




{/*Props passed here are:stock api info.*/}
const Charts=(props)=>{
    
console.log(props.apiData)
{/*Settings for the chart*/}
 
const data = {
  labels: ['1', '2', '3', '4', '5', '6','7'],
  datasets: [
    {
      label: 'Stock price @ close',
      data:props.apiData,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
    responsive: true,
     scaleLabel: {
                     display: true,
                     labelString: 'Moola',
                     fontSize: 50 
                  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
    layout:{
        
    }
}

    
    return(
        <div className="chart">
   <Line  data={data} options={options} />
   </div>
    )
}

export default Charts;