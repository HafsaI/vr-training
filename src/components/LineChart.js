// // components/LineChart.js
// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js'
//   import { Chart } from 'react-chartjs-2'
  
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   )

// function LineChart({ x, y, label }) {

//   const state = {
//     labels: x,
//     datasets: [
//       {
//         label: label,
//         fill: true,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: y
//       }
//     ]
//   }
//   return (
//     <div>
//     <Line
//       data={state}
//       options={{
//         legend:{
//           display:true,
//           position:'right'
//         }
//       }}
//     />
//   </div>
//   );    
// }
// export default LineChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement, // Correct import for Bar chart
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

function LineChart({ x, y, label }) {
  const state = {
    labels: x,
    datasets: [
      {
        label: label,
        backgroundColor: "rgba(75,192,192,0.6)", // Adjust the color as needed
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: y,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          scales: {
            x: {
              beginAtZero: true, 
              scaleLabel: {
                display: true,
                labelString: 'Session No.', 
              },
            },
            y: {
              beginAtZero: true, 
              scaleLabel: {
                display: true,
                labelString: 'Pronunciation Score (%)', 
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;

