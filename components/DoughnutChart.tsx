'use client';
import {Account, DoughnutChartProps} from '@/types';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const accountName = accounts.map((a) => a.name);
  const balance = accounts.map((b) => b.currentBalance);

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [...balance],
        backgroundColor: ['#0747b6', '#2265db', '#2f91fa'],
      },
    ],

    labels: [...accountName],
  };

  return (
    <div className="w-full">
      <Doughnut
        data={data}
        options={{
          cutout: '60%',
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default DoughnutChart;
