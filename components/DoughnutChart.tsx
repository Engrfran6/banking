'use client'
import { Account, DoughnutChartProps } from '@/types';
import {Chart as ChartJS, ArcElement, Tooltip,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement,Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {

function getOfficialNames(accounts: Account[]): string[] {
  return accounts.map(account => account.officialName);
}

function getCurrentBalance(accounts: Account[]): number[] {
  return accounts.map(account => account.currentBalance);
}

const officialName: string[] = getOfficialNames(accounts)
const currentBalance: number[] = getCurrentBalance(accounts)

  const data = {
    datasets:[
      {
        label:'Banks',
        data:[...currentBalance],
        backgroundColor:['#0747b6', '#2265db', '#2f91fa'],

      }
    ],

    labels:[
      ...officialName
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