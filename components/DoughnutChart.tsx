'use client'
import {Chart as ChartJS, ArcElement, Tooltip,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement,Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {

  const data = {
    datasets:[
      {
        label:'Banks',
        data:[663,776,837],
        backgroundColor:['#0747b6', '#2265db', '#2f91fa'],

      }
    ],

    labels:[
      'bank 1', 'bank 2', 'bank 3'
    ]

  }

  return (
    <div className='w-full'>
      <Doughnut 
       data={data}
 
            options={{
        cutout:'60%',
        plugins:{
          legend:{
            display:false
          }
        }
       }}
      />
    </div>
  )
}
export default DoughnutChart